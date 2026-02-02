import { useState, useEffect, useCallback } from "react";
import { BibleChapterData, BibleVersion } from "../types";
import { getBookAbbreviation } from "@/components/bible/lib";

interface UseBibleChapterReturn {
  data: BibleChapterData | null;
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

export function useBibleChapter(
  book: string,
  chapter: number,
  version: BibleVersion,
): UseBibleChapterReturn {
  const [data, setData] = useState<BibleChapterData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchChapter = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const bookAbbrev = getBookAbbreviation(book);

      if (!bookAbbrev) {
        throw new Error(`Livro não encontrado: ${book}`);
      }

      const response = await fetch(
        `/api/bible/${version}/${bookAbbrev}/${chapter}`,
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `Erro HTTP: ${response.status}`);
      }

      const apiData = await response.json();

      // Converter formato da API para o formato esperado
      const convertedData: BibleChapterData = {
        reference: `${apiData.book} ${apiData.chapter}`,
        verses: apiData.verses.map((v: any) => ({
          book_id: bookAbbrev,
          book_name: apiData.book,
          chapter: apiData.chapter,
          verse: v.number,
          text: v.text,
        })),
        text: apiData.verses.map((v: any) => v.text).join(" "),
        translation_id: version,
        translation_name: version.toUpperCase(),
        translation_note: "",
      };

      setData(convertedData);
    } catch (err) {
      console.error("Erro ao carregar capítulo:", err);
      setError(err instanceof Error ? err.message : "Erro desconhecido");
    } finally {
      setLoading(false);
    }
  }, [book, chapter, version]);

  useEffect(() => {
    fetchChapter();
  }, [fetchChapter]);

  return { data, loading, error, refetch: fetchChapter };
}
