import { useState, useEffect, useCallback } from "react";
import { Highlight } from "../types";

interface UseHighlightsReturn {
  highlights: Highlight[];
  addHighlight: (verseNumber: number, color: string) => void;
  removeHighlight: (verseNumber: number) => void;
  getHighlight: (verseNumber: number) => Highlight | undefined;
}

export function useHighlights(
  book: string,
  chapter: number,
): UseHighlightsReturn {
  const [highlights, setHighlights] = useState<Highlight[]>([]);
  const storageKey = `highlights-${book}-${chapter}`;

  // Carregar highlights do localStorage
  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    if (saved) {
      setHighlights(JSON.parse(saved));
    } else {
      setHighlights([]);
    }
  }, [storageKey]);

  const addHighlight = useCallback(
    (verseNumber: number, color: string) => {
      setHighlights((prev) => {
        const newHighlights = prev.filter((h) => h.verseNumber !== verseNumber);
        newHighlights.push({ verseNumber, color });
        localStorage.setItem(storageKey, JSON.stringify(newHighlights));
        return newHighlights;
      });
    },
    [storageKey],
  );

  const removeHighlight = useCallback(
    (verseNumber: number) => {
      setHighlights((prev) => {
        const newHighlights = prev.filter((h) => h.verseNumber !== verseNumber);
        localStorage.setItem(storageKey, JSON.stringify(newHighlights));
        return newHighlights;
      });
    },
    [storageKey],
  );

  const getHighlight = useCallback(
    (verseNumber: number) => {
      return highlights.find((h) => h.verseNumber === verseNumber);
    },
    [highlights],
  );

  return { highlights, addHighlight, removeHighlight, getHighlight };
}
