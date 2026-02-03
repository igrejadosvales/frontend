import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface WordZoomModalProps {
  word: string | null;
  isOpen: boolean;
  onClose: () => void;
}

export const WordZoomModal = React.memo(function WordZoomModal({
  word,
  isOpen,
  onClose,
}: WordZoomModalProps) {
  return (
    <AnimatePresence>
      {isOpen && word && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            className="bg-primary border-2 border-primary rounded-3xl p-12 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-6xl md:text-8xl font-bold text-white text-center tracking-wide">
              {word}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
});
