import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Highlighter, X } from "lucide-react";
import { BibleVerse, Highlight } from "@/components/bible/types";
import { HIGHLIGHT_COLORS } from "@/components/bible/lib";

interface VerseComponentProps {
  verse: BibleVerse;
  fontSize: number;
  highlight?: Highlight;
  index: number;
  onHighlight: (verseNumber: number) => void;
  onRemoveHighlight: (verseNumber: number) => void;
}

export const VerseComponent = React.memo(function VerseComponent({
  verse,
  fontSize,
  highlight,
  index,
  onHighlight,
  onRemoveHighlight,
}: VerseComponentProps) {
  const highlightColor = highlight
    ? HIGHLIGHT_COLORS.find((c) => c.color === highlight.color)
    : null;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.05 }}
      className={`group relative p-4 rounded-2xl border transition-all duration-300 ${
        highlight
          ? `${highlightColor?.color} border-l-4 ${highlightColor?.border}`
          : "bg-white/5 border-white/10 hover:bg-white/10"
      }`}
    >
      <div className="flex gap-4">
        <span
          className="text-2xl font-bold text-primary select-none shrink-0"
          style={{ fontSize: fontSize * 1.2 }}
        >
          {verse.verse}
        </span>
        <div className="flex-1">
          <p className="text-white leading-relaxed" style={{ fontSize }}>
            {verse.text.split(" ").map((word, wordIndex) => (
              <motion.span
                key={wordIndex}
                whileHover={{ scale: 1.1 }}
                className="inline-block cursor-pointer hover:text-primary transition-colors px-1"
              >
                {word}{" "}
              </motion.span>
            ))}
          </p>
        </div>
      </div>

      {/* Highlight Button */}
      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <Button
          variant="outline"
          size="icon"
          onClick={() => onHighlight(verse.verse)}
          className="bg-white/10 border-white/10 hover:bg-primary text-white h-8 w-8"
          aria-label={`Destacar versículo ${verse.verse}`}
        >
          <Highlighter className="w-4 h-4" />
        </Button>
        {highlight && (
          <Button
            variant="outline"
            size="icon"
            onClick={() => onRemoveHighlight(verse.verse)}
            className="bg-red-700 border-red-600 hover:bg-red-600 text-white h-8 w-8 ml-1"
            aria-label={`Remover destaque do versículo ${verse.verse}`}
          >
            <X className="w-4 h-4" />
          </Button>
        )}
      </div>
    </motion.div>
  );
});
