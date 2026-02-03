// Tipos compartilhados para funcionalidade de Bíblia

export type BibleVersion = "nvi" | "acf" | "aa";

export interface BibleVerse {
  book_id: string;
  book_name: string;
  chapter: number;
  verse: number;
  text: string;
}

export interface BibleChapterData {
  reference: string;
  verses: BibleVerse[];
  text: string;
  translation_id: string;
  translation_name: string;
  translation_note: string;
}

export interface BibleBook {
  name: string;
  ptName: string;
  chapters: number;
  abbr?: string;
}

export interface BibleTestament {
  testament: string;
  books: BibleBook[];
}

export interface Highlight {
  verseNumber: number;
  color: string;
}

export interface HighlightColor {
  name: string;
  color: string;
  border: string;
}

export interface ReadingDay {
  day: number;
  readings: string[];
  completed: boolean;
  expanded?: boolean;
}

export interface ReadingPlan {
  id: string;
  title: string;
  description: string;
  duration: number;
  category: string;
  days: ReadingDay[];
}
