"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BibleSelector } from "@/components/bible/BibleSelector";
import { BibleReader } from "@/components/bible/BibleReader";
import { NotesEditor } from "@/components/bible/NotesEditor";
import { Book, BookOpen, BookMarked } from "lucide-react";
import Link from "next/link";
import { BibleVersion } from "@/components/bible/types";
import { BIBLE_VERSIONS } from "@/components/bible/lib";

export default function BibliaPage() {
  const [selectedBook, setSelectedBook] = useState<string | null>(null);
  const [selectedChapter, setSelectedChapter] = useState<number | null>(null);
  const [showSelector, setShowSelector] = useState(true);
  const [bibleVersion, setBibleVersion] = useState<BibleVersion>("nvi");

  const handleBookSelect = (book: string, chapter: number) => {
    setSelectedBook(book);
    setSelectedChapter(chapter);
    setShowSelector(false);
  };

  const handleNavigate = (book: string, chapter: number) => {
    setSelectedBook(book);
    setSelectedChapter(chapter);
  };

  const handleBackToSelector = () => {
    setShowSelector(true);
    setSelectedBook(null);
    setSelectedChapter(null);
  };

  return (
    <div className="min-h-screen bg-[#121212] text-white">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="border-b border-white/10 bg-[#121212] backdrop-blur-lg max-w-6xl mx-auto"
      >
        <div className="container px-4 pb-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-primary rounded-xl">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-lg md:text-3xl font-bold text-white">
                  Bíblia Sagrada
                </h1>
                <p className="text-xs text-gray-400 md:text-sm">
                  João Ferreira de Almeida
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              {/* Seletor de Versão */}
              <div className="flex items-center gap-2">
                <label
                  htmlFor="bible-version-main"
                  className="text-gray-400 text-sm hidden md:block"
                >
                  Versão:
                </label>
                <select
                  id="bible-version-main"
                  value={bibleVersion}
                  onChange={(e) =>
                    setBibleVersion(e.target.value as BibleVersion)
                  }
                  className="bg-[#1a1a1a] text-white border border-white/10 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer"
                  style={{ appearance: "none" }}
                >
                  {BIBLE_VERSIONS.map((version) => (
                    <option key={version.value} value={version.value}>
                      {version.label}
                    </option>
                  ))}
                </select>
              </div>
              {!showSelector && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  onClick={handleBackToSelector}
                  className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 text-white rounded-lg border border-white/10 transition-colors"
                >
                  <Book className="w-4 h-4" />
                  <span className="hidden md:inline">Escolher Livro</span>
                </motion.button>
              )}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Content */}
      <AnimatePresence mode="wait">
        {showSelector ? (
          <motion.div
            key="selector"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.3 }}
          >
            {/* Reading Plans Button */}
            <div className="container mx-auto px-4 pt-8 max-w-6xl flex">
              <Link href="/biblia/planos">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-3 bg-primary/80 hover:bg-primary text-white px-5 py-3 rounded-lg font-semibold text-lg shadow-lg hover:shadow-primary/20 border border-white/10 transition-all cursor-pointer"
                >
                  <BookMarked className="w-6 h-6" />
                  Planos de Leitura Bíblica
                </motion.button>
              </Link>
            </div>

            <BibleSelector onBookSelect={handleBookSelect} />
          </motion.div>
        ) : (
          <motion.div
            key="reader"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
          >
            <BibleReader
              book={selectedBook!}
              chapter={selectedChapter!}
              version={bibleVersion}
              onBackToSelector={handleBackToSelector}
              onNavigate={handleNavigate}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Notes Editor - Always visible globally */}
      <NotesEditor />
    </div>
  );
}
