"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  NotebookPen,
  X,
  Bold,
  Italic,
  Underline,
  Type,
  Palette,
  Minimize2,
  Maximize2,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const TEXT_COLORS = [
  { name: "Branco", value: "#FFFFFF" },
  { name: "Preto", value: "#000000" },
  { name: "Vermelho", value: "#EF4444" },
  { name: "Laranja", value: "#F97316" },
  { name: "Verde", value: "#22C55E" },
  { name: "Azul", value: "#3B82F6" },
  { name: "Roxo", value: "#A855F7" },
  { name: "Rosa", value: "#EC4899" },
];

const FONT_SIZES = [
  { label: "Pequeno", value: "14px" },
  { label: "Normal", value: "16px" },
  { label: "Grande", value: "18px" },
  { label: "Maior", value: "20px" },
];

export function NotesEditor() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [content, setContent] = useState("");
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [showFontSize, setShowFontSize] = useState(false);
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const editorRef = useRef<HTMLDivElement>(null);
  const storageKey = "bible-notes-global"; // Chave única para todas as anotações
  const [isEditorReady, setIsEditorReady] = useState(false);

  // Carregar notas do localStorage quando o editor estiver pronto
  useEffect(() => {
    if (isEditorReady && editorRef.current) {
      const savedNotes = localStorage.getItem(storageKey);
      if (savedNotes) {
        editorRef.current.innerHTML = savedNotes;
        setContent(savedNotes);
      }
    }
  }, [isEditorReady, storageKey]);

  // Salvar notas no localStorage
  const saveNotes = () => {
    if (editorRef.current) {
      const html = editorRef.current.innerHTML;
      // Só salva se tiver conteúdo ou se for diferente do atual
      if (html !== content) {
        localStorage.setItem(storageKey, html);
        setContent(html);
      }
    }
  };

  // Verificar estado da formatação
  const checkFormatting = () => {
    setIsBold(document.queryCommandState("bold"));
    setIsItalic(document.queryCommandState("italic"));
    setIsUnderline(document.queryCommandState("underline"));
  };

  // Comandos de formatação
  const execCommand = (
    command: string,
    value: string | undefined = undefined,
  ) => {
    document.execCommand(command, false, value);
    editorRef.current?.focus();
    checkFormatting();
    saveNotes();
  };

  const applyColor = (color: string) => {
    execCommand("foreColor", color);
    setShowColorPicker(false);
  };

  const applyFontSize = (size: string) => {
    const selection = window.getSelection();
    if (selection && selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      const span = document.createElement("span");
      span.style.fontSize = size;
      range.surroundContents(span);
      saveNotes();
    }
    setShowFontSize(false);
  };

  const handleInput = () => {
    checkFormatting();
    saveNotes();
  };

  const handleSelectionChange = () => {
    checkFormatting();
  };

  // Adicionar listener para mudanças de seleção
  useEffect(() => {
    document.addEventListener("selectionchange", handleSelectionChange);
    return () => {
      document.removeEventListener("selectionchange", handleSelectionChange);
    };
  }, []);

  // Salvar antes de desmontar o componente
  useEffect(() => {
    return () => {
      if (editorRef.current) {
        const html = editorRef.current.innerHTML;
        localStorage.setItem(storageKey, html);
      }
    };
  }, []);

  // Salvar quando a página está prestes a ser fechada
  useEffect(() => {
    const handleBeforeUnload = () => {
      if (editorRef.current) {
        const html = editorRef.current.innerHTML;
        localStorage.setItem(storageKey, html);
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <>
      {/* Floating Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 p-4 bg-primary text-white rounded-full shadow-2xl hover:shadow-primary/50 transition-all"
          >
            <NotebookPen className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Notes Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay for mobile */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                saveNotes();
                setIsOpen(false);
                setIsEditorReady(false);
              }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
            />

            {/* Notes Container */}
            <motion.div
              initial={{ x: 400, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 400, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className={`fixed z-50 bg-[#121212] border border-white/10 shadow-2xl rounded-2xl overflow-hidden
                ${
                  isMinimized
                    ? "bottom-6 right-6 w-80"
                    : "md:bottom-6 md:right-6 md:w-96 md:h-150 bottom-0 right-0 left-0 h-[80vh] md:rounded-2xl rounded-t-2xl"
                }`}
            >
              {/* Header */}
              <div className="bg-primary p-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <NotebookPen className="w-5 h-5 text-white" />
                  <h3 className="font-bold text-white">Anotações</h3>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      saveNotes();
                      setIsMinimized(!isMinimized);
                    }}
                    className="p-1.5 hover:bg-white/20 rounded-lg transition-colors hidden md:block"
                  >
                    {isMinimized ? (
                      <Maximize2 className="w-4 h-4 text-white" />
                    ) : (
                      <Minimize2 className="w-4 h-4 text-white" />
                    )}
                  </button>
                  <button
                    onClick={() => {
                      saveNotes();
                      setIsOpen(false);
                      setIsEditorReady(false);
                    }}
                    className="p-1.5 hover:bg-white/20 rounded-lg transition-colors"
                  >
                    <X className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>

              {/* Toolbar */}
              <div
                className={`bg-white/5 p-3 border-b border-white/10 ${isMinimized ? "hidden" : ""}`}
              >
                <div className="flex items-center gap-2 flex-wrap">
                  {/* Text formatting */}
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => execCommand("bold")}
                    className={`h-8 w-8 border-white/10 hover:bg-primary transition-colors text-white ${
                      isBold ? "bg-primary border-primary" : "bg-white/10"
                    }`}
                    title="Negrito"
                  >
                    <Bold className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => execCommand("italic")}
                    className={`h-8 w-8 border-white/10 hover:bg-primary transition-colors text-white ${
                      isItalic ? "bg-primary border-primary" : "bg-white/10"
                    }`}
                    title="Itálico"
                  >
                    <Italic className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => execCommand("underline")}
                    className={`h-8 w-8 border-white/10 hover:bg-primary transition-colors text-white ${
                      isUnderline ? "bg-primary border-primary" : "bg-white/10"
                    }`}
                    title="Sublinhado"
                  >
                    <Underline className="w-4 h-4" />
                  </Button>

                  <div className="w-px h-6 bg-white/10" />

                  {/* Font size */}
                  <div className="relative">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setShowFontSize(!showFontSize)}
                      className="h-8 w-8 bg-white/10 border-white/10 hover:bg-primary text-white"
                      title="Tamanho"
                    >
                      <Type className="w-4 h-4" />
                    </Button>
                    {showFontSize && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute top-10 left-0 bg-white/5 border border-white/10 rounded-lg p-2 z-10 shadow-xl min-w-30"
                      >
                        {FONT_SIZES.map((size) => (
                          <button
                            key={size.value}
                            onClick={() => applyFontSize(size.value)}
                            className="block w-full text-left px-3 py-2 text-sm text-white hover:bg-primary/20 rounded transition-colors"
                          >
                            {size.label}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </div>

                  {/* Color picker */}
                  <div className="relative">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setShowColorPicker(!showColorPicker)}
                      className="h-8 w-8 bg-white/10 border-white/10 hover:bg-primary text-white"
                      title="Cor do texto"
                    >
                      <Palette className="w-4 h-4" />
                    </Button>
                    {showColorPicker && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute top-10 left-0 bg-white/5 border border-white/10 rounded-lg p-3 z-10 shadow-xl"
                      >
                        <div className="grid grid-cols-4 gap-2 min-w-32">
                          {TEXT_COLORS.map((color) => (
                            <button
                              key={color.value}
                              onClick={() => applyColor(color.value)}
                              className={`w-8 h-8 rounded-lg border-2 hover:border-primary transition-colors cursor-pointer ${
                                color.value === "#FFFFFF"
                                  ? "border-white/10"
                                  : "border-white/10"
                              }`}
                              style={{ backgroundColor: color.value }}
                              title={color.name}
                            />
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>
              </div>

              {/* Editor */}
              <div
                className={`p-4 h-[calc(100%-120px)] overflow-y-auto ${isMinimized ? "hidden" : ""}`}
              >
                <div
                  ref={(el) => {
                    if (el) {
                      editorRef.current = el;
                      // Carregar conteúdo do localStorage toda vez que o editor é montado
                      const savedNotes = localStorage.getItem(storageKey);
                      if (savedNotes && el.innerHTML !== savedNotes) {
                        el.innerHTML = savedNotes;
                        setContent(savedNotes);
                      }
                      if (!isEditorReady) {
                        setIsEditorReady(true);
                      }
                    }
                  }}
                  contentEditable
                  onInput={handleInput}
                  onBlur={saveNotes}
                  className="min-h-full outline-none text-white prose prose-invert max-w-none empty:before:content-[attr(data-placeholder)] empty:before:text-gray-400"
                  style={{ fontSize: "16px", lineHeight: "1.6" }}
                  data-placeholder="Digite suas anotações aqui..."
                />
              </div>

              {/* Info */}
              <div
                className={`absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur px-4 py-2 text-xs text-gray-400 border-t border-white/10 ${isMinimized ? "hidden" : ""}`}
              >
                <p>Anotações Globais • Salvo automaticamente</p>
              </div>

              {isMinimized && (
                <div
                  className="p-4 cursor-pointer hover:bg-white/10 transition-colors"
                  onClick={() => setIsMinimized(false)}
                >
                  <p className="text-gray-400 text-sm mb-2">
                    Anotações minimizadas
                  </p>
                  {content && (
                    <div
                      className="text-xs text-gray-400 line-clamp-3 prose prose-invert prose-sm max-w-none"
                      dangerouslySetInnerHTML={{ __html: content }}
                    />
                  )}
                  {!content && (
                    <p className="text-xs text-gray-400 italic">
                      Nenhuma anotação ainda
                    </p>
                  )}
                  <p className="text-xs text-gray-600 mt-2">
                    Clique para expandir
                  </p>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style jsx global>{`
        [contenteditable][data-placeholder]:empty:before {
          content: attr(data-placeholder);
          color: #64748b;
          pointer-events: none;
        }
      `}</style>
    </>
  );
}
