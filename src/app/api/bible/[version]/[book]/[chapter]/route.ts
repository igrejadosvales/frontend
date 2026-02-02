import { NextRequest, NextResponse } from "next/server";

// URLs dos JSONs no GitHub
const BIBLE_URLS: Record<string, string> = {
  nvi: "https://raw.githubusercontent.com/thiagobodruk/biblia/master/json/nvi.json",
  acf: "https://raw.githubusercontent.com/thiagobodruk/biblia/master/json/acf.json",
  aa: "https://raw.githubusercontent.com/thiagobodruk/biblia/master/json/aa.json",
};

// Cache em memória (nota: pode não persistir em ambientes serverless)
let bibleCache: Record<string, BibleBook[]> = {};

interface BibleBook {
  abbrev: string;
  name: string;
  chapters: string[][];
}

interface ValidationError {
  error: string;
  status: number;
}

/**
 * Valida os parâmetros da requisição
 */
function validateParams(
  version: string,
  book: string,
  chapter: string,
): ValidationError | null {
  const versionKey = version?.toLowerCase();

  if (!BIBLE_URLS[versionKey]) {
    return { error: "Versão não suportada. Use: nvi, acf ou aa", status: 400 };
  }

  const chapterNum = parseInt(chapter);
  if (isNaN(chapterNum) || chapterNum < 1) {
    return { error: "Número de capítulo inválido", status: 400 };
  }

  if (!book) {
    return { error: "Livro não informado", status: 400 };
  }

  return null;
}

/**
 * Busca e cacheia os dados da Bíblia
 */
async function getBibleData(version: string): Promise<BibleBook[]> {
  const versionKey = version.toLowerCase();

  if (!bibleCache[versionKey]) {
    const response = await fetch(BIBLE_URLS[versionKey]);

    if (!response.ok) {
      throw new Error(`Erro ao buscar bíblia: ${response.statusText}`);
    }

    bibleCache[versionKey] = await response.json();
  }

  return bibleCache[versionKey];
}

export async function GET(
  request: NextRequest,
  {
    params,
  }: { params: Promise<{ version: string; book: string; chapter: string }> },
) {
  try {
    const { version, book, chapter } = await params;

    // Validação
    const validation = validateParams(version, book, chapter);
    if (validation) {
      return NextResponse.json(
        { error: validation.error },
        { status: validation.status },
      );
    }

    const versionKey = version.toLowerCase();
    const chapterNum = parseInt(chapter);

    // Busca e cache dos dados
    const bibleData = await getBibleData(versionKey);

    // Encontrar livro
    const bookData = bibleData.find(
      (b) => b.abbrev.toLowerCase() === book.toLowerCase(),
    );

    if (!bookData) {
      return NextResponse.json(
        { error: `Livro não encontrado: ${book}` },
        { status: 404 },
      );
    }

    // Verificar se capítulo existe
    if (chapterNum > bookData.chapters.length) {
      return NextResponse.json(
        {
          error: `Capítulo ${chapterNum} não existe em ${bookData.name}. O livro tem ${bookData.chapters.length} capítulos.`,
        },
        { status: 404 },
      );
    }

    // Retornar versículos
    const verses = bookData.chapters[chapterNum - 1];

    return NextResponse.json({
      book: bookData.name,
      bookAbbrev: bookData.abbrev,
      chapter: chapterNum,
      version: version.toUpperCase(),
      verses: verses.map((text, index) => ({
        number: index + 1,
        text,
      })),
    });
  } catch (error) {
    console.error("Erro na API da Bíblia:", error);
    return NextResponse.json(
      { error: "Erro ao buscar versículos" },
      { status: 500 },
    );
  }
}
