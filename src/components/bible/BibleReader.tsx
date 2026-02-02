"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getPreviousChapter, getNextChapter } from "@/components/bible/lib";
import { useBibleChapter } from "@/components/bible/hooks/useBibleChapter";
import { useHighlights } from "@/components/bible/hooks/useHighlights";
import { BibleVersion } from "@/components/bible/types";
import { FONT_SIZE } from "@/components/bible/lib";
import { BibleControls } from "./BibleControls";
import { VerseComponent } from "./VerseComponent";
import { ColorPickerModal } from "./ColorPickerModal";
import { WordZoomModal } from "./WordZoomModal";

interface BibleReaderProps {
  book: string;
  chapter: number;
  version: BibleVersion;
  onBackToSelector: () => void;
  onNavigate: (book: string, chapter: number) => void;
}

export function BibleReader({
  book,
  chapter,
  version,
  onBackToSelector,
  onNavigate,
}: BibleReaderProps) {
  const {
    data: bibleData,
    loading,
    error,
    refetch,
  } = useBibleChapter(book, chapter, version);
  const { addHighlight, removeHighlight, getHighlight } = useHighlights(
    book,
    chapter,
  );

  const [fontSize, setFontSize] = useState<number>(FONT_SIZE.DEFAULT);
  const [selectedVerse, setSelectedVerse] = useState<number | null>(null);
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [wordZoom, setWordZoom] = useState<string | null>(null);

  const handlePreviousChapter = () => {
    const previous = getPreviousChapter(book, chapter);
    if (previous) {
      onNavigate(previous.book, previous.chapter);
    }
  };

  const handleNextChapter = () => {
    const next = getNextChapter(book, chapter);
    if (next) {
      onNavigate(next.book, next.chapter);
    }
  };

  const handleZoomIn = () => {
    if (fontSize < FONT_SIZE.MAX) {
      setFontSize((prev) => prev + FONT_SIZE.STEP);
    }
  };

  const handleZoomOut = () => {
    if (fontSize > FONT_SIZE.MIN) {
      setFontSize((prev) => prev - FONT_SIZE.STEP);
    }
  };

  const handleHighlight = (verseNumber: number, color: string) => {
    addHighlight(verseNumber, color);
    setShowColorPicker(false);
    setSelectedVerse(null);
  };

  const handleVerseHighlight = (verseNumber: number) => {
    setSelectedVerse(verseNumber);
    setShowColorPicker(true);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <Loader2 className="w-12 h-12 text-orange-500 animate-spin mx-auto mb-4" />
          <p className="text-slate-400">Carregando capítulo...</p>
        </motion.div>
      </div>
    );
  }

  if (error || !bibleData) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md mx-auto"
        >
          <p className="text-red-400 mb-4">
            Erro: {error || "Dados não encontrados"}
          </p>
          <p className="text-slate-400 text-sm mb-6">
            {book} {chapter}
          </p>
          <div className="flex gap-3 justify-center">
            <Button
              onClick={refetch}
              className="bg-orange-600 hover:bg-orange-700"
            >
              Tentar Novamente
            </Button>
            <Button onClick={onBackToSelector} variant="outline">
              Voltar
            </Button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl bg-[#121212] min-h-[70vh] rounded-2xl">
      <BibleControls
        reference={bibleData.reference}
        translationName={bibleData.translation_name}
        fontSize={fontSize}
        onPrevious={handlePreviousChapter}
        onNext={handleNextChapter}
        onZoomIn={handleZoomIn}
        onZoomOut={handleZoomOut}
        canGoPrevious={!!getPreviousChapter(book, chapter)}
        canGoNext={!!getNextChapter(book, chapter)}
        minFontSize={FONT_SIZE.MIN}
        maxFontSize={FONT_SIZE.MAX}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="space-y-4"
      >
        {bibleData.verses.map((verse, index) => (
          <VerseComponent
            key={verse.verse}
            verse={verse}
            fontSize={fontSize}
            highlight={getHighlight(verse.verse)}
            index={index}
            onHighlight={handleVerseHighlight}
            onRemoveHighlight={removeHighlight}
          />
        ))}
      </motion.div>

      <ColorPickerModal
        isOpen={showColorPicker && selectedVerse !== null}
        onClose={() => {
          setShowColorPicker(false);
          setSelectedVerse(null);
        }}
        onSelectColor={(color) =>
          selectedVerse && handleHighlight(selectedVerse, color)
        }
      />

      <WordZoomModal
        word={wordZoom}
        isOpen={!!wordZoom}
        onClose={() => setWordZoom(null)}
      />
    </div>
  );
}
