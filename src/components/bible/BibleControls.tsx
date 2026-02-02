import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react";

interface BibleControlsProps {
  reference: string;
  translationName: string;
  fontSize: number;
  onPrevious: () => void;
  onNext: () => void;
  onZoomIn: () => void;
  onZoomOut: () => void;
  canGoPrevious: boolean;
  canGoNext: boolean;
  minFontSize: number;
  maxFontSize: number;
}

export const BibleControls = React.memo(function BibleControls({
  reference,
  translationName,
  fontSize,
  onPrevious,
  onNext,
  onZoomIn,
  onZoomOut,
  canGoPrevious,
  canGoNext,
  minFontSize,
  maxFontSize,
}: BibleControlsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-4 mb-6 sticky top-20 z-10"
    >
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={onPrevious}
            disabled={!canGoPrevious}
            className="bg-white/10 border-white/10 hover:bg-primary text-white disabled:opacity-50"
            aria-label="Capítulo anterior"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <div className="text-center">
            <h2 className="text-lg font-bold text-white max-md:text-sm">
              {reference}
            </h2>
            <p className="text-xs text-gray-400">{translationName}</p>
          </div>
          <Button
            variant="outline"
            size="icon"
            onClick={onNext}
            disabled={!canGoNext}
            className="bg-white/10 border-white/10 hover:bg-primary text-white disabled:opacity-50"
            aria-label="Próximo capítulo"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>

        <div className="flex items-center gap-2 max-lg:gap-0">
          <Button
            variant="outline"
            size="icon"
            onClick={onZoomOut}
            disabled={fontSize <= minFontSize}
            className="bg-white/10 border-white/10 hover:bg-primary text-white disabled:opacity-50"
            aria-label="Diminuir fonte"
          >
            <ZoomOut className="w-4 h-4" />
          </Button>
          <span className="text-white text-sm font-medium text-center px-2 max-md:text-xs">
            {fontSize}px
          </span>
          <Button
            variant="outline"
            size="icon"
            onClick={onZoomIn}
            disabled={fontSize >= maxFontSize}
            className="bg-white/10 border-white/10 hover:bg-primary text-white disabled:opacity-50"
            aria-label="Aumentar fonte"
          >
            <ZoomIn className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
});
