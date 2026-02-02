import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { HIGHLIGHT_COLORS } from "@/components/bible/lib";

interface ColorPickerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectColor: (color: string) => void;
}

export const ColorPickerModal = React.memo(function ColorPickerModal({
  isOpen,
  onClose,
  onSelectColor,
}: ColorPickerModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 max-w-sm w-full"
          >
            <h3 className="text-xl font-bold text-white mb-4">
              Escolher cor de destaque
            </h3>
            <div className="grid grid-cols-3 gap-3">
              {HIGHLIGHT_COLORS.map((color) => (
                <motion.button
                  key={color.name}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => onSelectColor(color.color)}
                  className={`${color.color} ${color.border} border-2 rounded-xl p-4 text-white font-medium transition-all hover:shadow-lg`}
                >
                  {color.name}
                </motion.button>
              ))}
            </div>
            <Button
              variant="outline"
              onClick={onClose}
              className="w-full mt-4 bg-white/10 border-white/10 text-white"
            >
              Cancelar
            </Button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
});
