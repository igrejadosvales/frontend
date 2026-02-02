// Funções de navegação da Bíblia
import { BIBLE_BOOKS_DATA } from "./books-data";

interface ChapterNavigation {
  book: string;
  chapter: number;
}

/**
 * Navega para o capítulo anterior na Bíblia
 */
export function getPreviousChapter(
  currentBook: string,
  currentChapter: number,
): ChapterNavigation | null {
  const currentBookIndex = BIBLE_BOOKS_DATA.findIndex(
    (b) => b.name === currentBook,
  );

  if (currentBookIndex === -1) return null;

  const bookData = BIBLE_BOOKS_DATA[currentBookIndex];

  // Se não é o primeiro capítulo do livro, volta um capítulo
  if (currentChapter > 1) {
    return {
      book: currentBook,
      chapter: currentChapter - 1,
    };
  }

  // Se é o primeiro capítulo e não é o primeiro livro, vai para o último capítulo do livro anterior
  if (currentBookIndex > 0) {
    const previousBook = BIBLE_BOOKS_DATA[currentBookIndex - 1];
    return {
      book: previousBook.name,
      chapter: previousBook.chapters,
    };
  }

  // É o primeiro capítulo do primeiro livro, não há anterior
  return null;
}

/**
 * Navega para o próximo capítulo na Bíblia
 */
export function getNextChapter(
  currentBook: string,
  currentChapter: number,
): ChapterNavigation | null {
  const currentBookIndex = BIBLE_BOOKS_DATA.findIndex(
    (b) => b.name === currentBook,
  );

  if (currentBookIndex === -1) return null;

  const bookData = BIBLE_BOOKS_DATA[currentBookIndex];

  // Se não é o último capítulo do livro, avança um capítulo
  if (currentChapter < bookData.chapters) {
    return {
      book: currentBook,
      chapter: currentChapter + 1,
    };
  }

  // Se é o último capítulo e não é o último livro, vai para o capítulo 1 do próximo livro
  if (currentBookIndex < BIBLE_BOOKS_DATA.length - 1) {
    const nextBook = BIBLE_BOOKS_DATA[currentBookIndex + 1];
    return {
      book: nextBook.name,
      chapter: 1,
    };
  }

  // É o último capítulo do último livro, não há próximo
  return null;
}
