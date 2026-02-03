"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/input";

const BIBLE_BOOKS = [
  // Antigo Testamento
  {
    testament: "Antigo Testamento",
    books: [
      { name: "Genesis", ptName: "Gênesis", chapters: 50, abbr: "Gen" },
      { name: "Exodus", ptName: "Êxodo", chapters: 40, abbr: "Exo" },
      { name: "Leviticus", ptName: "Levítico", chapters: 27, abbr: "Lev" },
      { name: "Numbers", ptName: "Números", chapters: 36, abbr: "Num" },
      {
        name: "Deuteronomy",
        ptName: "Deuteronômio",
        chapters: 34,
        abbr: "Deu",
      },
      { name: "Joshua", ptName: "Josué", chapters: 24, abbr: "Jos" },
      { name: "Judges", ptName: "Juízes", chapters: 21, abbr: "Jdg" },
      { name: "Ruth", ptName: "Rute", chapters: 4, abbr: "Rut" },
      { name: "1 Samuel", ptName: "1 Samuel", chapters: 31, abbr: "1Sa" },
      { name: "2 Samuel", ptName: "2 Samuel", chapters: 24, abbr: "2Sa" },
      { name: "1 Kings", ptName: "1 Reis", chapters: 22, abbr: "1Ki" },
      { name: "2 Kings", ptName: "2 Reis", chapters: 25, abbr: "2Ki" },
      { name: "1 Chronicles", ptName: "1 Crônicas", chapters: 29, abbr: "1Ch" },
      { name: "2 Chronicles", ptName: "2 Crônicas", chapters: 36, abbr: "2Ch" },
      { name: "Ezra", ptName: "Esdras", chapters: 10, abbr: "Ezr" },
      { name: "Nehemiah", ptName: "Neemias", chapters: 13, abbr: "Neh" },
      { name: "Esther", ptName: "Ester", chapters: 10, abbr: "Est" },
      { name: "Job", ptName: "Jó", chapters: 42, abbr: "Job" },
      { name: "Psalms", ptName: "Salmos", chapters: 150, abbr: "Psa" },
      { name: "Proverbs", ptName: "Provérbios", chapters: 31, abbr: "Pro" },
      {
        name: "Ecclesiastes",
        ptName: "Eclesiastes",
        chapters: 12,
        abbr: "Ecc",
      },
      { name: "Song of Solomon", ptName: "Cantares", chapters: 8, abbr: "Sng" },
      { name: "Isaiah", ptName: "Isaías", chapters: 66, abbr: "Isa" },
      { name: "Jeremiah", ptName: "Jeremias", chapters: 52, abbr: "Jer" },
      { name: "Lamentations", ptName: "Lamentações", chapters: 5, abbr: "Lam" },
      { name: "Ezekiel", ptName: "Ezequiel", chapters: 48, abbr: "Eze" },
      { name: "Daniel", ptName: "Daniel", chapters: 12, abbr: "Dan" },
      { name: "Hosea", ptName: "Oséias", chapters: 14, abbr: "Hos" },
      { name: "Joel", ptName: "Joel", chapters: 3, abbr: "Joe" },
      { name: "Amos", ptName: "Amós", chapters: 9, abbr: "Amo" },
      { name: "Obadiah", ptName: "Obadias", chapters: 1, abbr: "Oba" },
      { name: "Jonah", ptName: "Jonas", chapters: 4, abbr: "Jon" },
      { name: "Micah", ptName: "Miquéias", chapters: 7, abbr: "Mic" },
      { name: "Nahum", ptName: "Naum", chapters: 3, abbr: "Nah" },
      { name: "Habakkuk", ptName: "Habacuque", chapters: 3, abbr: "Hab" },
      { name: "Zephaniah", ptName: "Sofonias", chapters: 3, abbr: "Zep" },
      { name: "Haggai", ptName: "Ageu", chapters: 2, abbr: "Hag" },
      { name: "Zechariah", ptName: "Zacarias", chapters: 14, abbr: "Zec" },
      { name: "Malachi", ptName: "Malaquias", chapters: 4, abbr: "Mal" },
    ],
  },
  // Novo Testamento
  {
    testament: "Novo Testamento",
    books: [
      { name: "Matthew", ptName: "Mateus", chapters: 28, abbr: "Mat" },
      { name: "Mark", ptName: "Marcos", chapters: 16, abbr: "Mar" },
      { name: "Luke", ptName: "Lucas", chapters: 24, abbr: "Luk" },
      { name: "John", ptName: "João", chapters: 21, abbr: "Jhn" },
      { name: "Acts", ptName: "Atos", chapters: 28, abbr: "Act" },
      { name: "Romans", ptName: "Romanos", chapters: 16, abbr: "Rom" },
      {
        name: "1 Corinthians",
        ptName: "1 Coríntios",
        chapters: 16,
        abbr: "1Co",
      },
      {
        name: "2 Corinthians",
        ptName: "2 Coríntios",
        chapters: 13,
        abbr: "2Co",
      },
      { name: "Galatians", ptName: "Gálatas", chapters: 6, abbr: "Gal" },
      { name: "Ephesians", ptName: "Efésios", chapters: 6, abbr: "Eph" },
      { name: "Philippians", ptName: "Filipenses", chapters: 4, abbr: "Php" },
      { name: "Colossians", ptName: "Colossenses", chapters: 4, abbr: "Col" },
      {
        name: "1 Thessalonians",
        ptName: "1 Tessalonicenses",
        chapters: 5,
        abbr: "1Th",
      },
      {
        name: "2 Thessalonians",
        ptName: "2 Tessalonicenses",
        chapters: 3,
        abbr: "2Th",
      },
      { name: "1 Timothy", ptName: "1 Timóteo", chapters: 6, abbr: "1Ti" },
      { name: "2 Timothy", ptName: "2 Timóteo", chapters: 4, abbr: "2Ti" },
      { name: "Titus", ptName: "Tito", chapters: 3, abbr: "Tit" },
      { name: "Philemon", ptName: "Filemom", chapters: 1, abbr: "Phm" },
      { name: "Hebrews", ptName: "Hebreus", chapters: 13, abbr: "Heb" },
      { name: "James", ptName: "Tiago", chapters: 5, abbr: "Jas" },
      { name: "1 Peter", ptName: "1 Pedro", chapters: 5, abbr: "1Pe" },
      { name: "2 Peter", ptName: "2 Pedro", chapters: 3, abbr: "2Pe" },
      { name: "1 John", ptName: "1 João", chapters: 5, abbr: "1Jn" },
      { name: "2 John", ptName: "2 João", chapters: 1, abbr: "2Jn" },
      { name: "3 John", ptName: "3 João", chapters: 1, abbr: "3Jn" },
      { name: "Jude", ptName: "Judas", chapters: 1, abbr: "Jud" },
      { name: "Revelation", ptName: "Apocalipse", chapters: 22, abbr: "Rev" },
    ],
  },
];

interface BibleSelectorProps {
  onBookSelect: (book: string, chapter: number) => void;
}

export function BibleSelector({ onBookSelect }: BibleSelectorProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedBook, setExpandedBook] = useState<string | null>(null);

  const filteredBooks = BIBLE_BOOKS.map((testament) => ({
    ...testament,
    books: testament.books.filter(
      (book) =>
        book.ptName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.name.toLowerCase().includes(searchTerm.toLowerCase()),
    ),
  })).filter((testament) => testament.books.length > 0);

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Search */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <Input
            type="text"
            placeholder="Pesquisar livro..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-12 py-6 bg-[#1a1a1a] border border-white/10 text-white placeholder:text-gray-400 rounded-2xl text-lg"
          />
        </div>
      </motion.div>

      {/* Books Grid */}
      <div className="space-y-8">
        {filteredBooks.map((testament, testamentIdx) => (
          <motion.div
            key={testament.testament}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: testamentIdx * 0.1 }}
          >
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <div className="w-1 h-8 bg-primary rounded-full" />
              {testament.testament}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {testament.books.map((book, bookIdx) => (
                <motion.div
                  key={book.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: testamentIdx * 0.1 + bookIdx * 0.02 }}
                  className="group"
                >
                  <div
                    className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl px-6 py-4 transition-all duration-300 cursor-pointer group-hover:border-primary/50 group-hover:shadow-2xl group-hover:shadow-primary/10"
                    onClick={() =>
                      setExpandedBook(
                        expandedBook === book.name ? null : book.name,
                      )
                    }
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-white group-hover:text-orange-500 transition-colors">
                          {book.ptName}
                        </h3>
                        <p className="text-sm text-slate-400">
                          {book.chapters}{" "}
                          {book.chapters === 1 ? "capítulo" : "capítulos"}
                        </p>
                      </div>
                      <ChevronRight
                        className={`w-5 h-5 text-slate-400 group-hover:text-orange-500 transition-transform ${
                          expandedBook === book.name ? "rotate-90" : ""
                        }`}
                      />
                    </div>

                    {/* Chapters Grid */}
                    <AnimatePresence initial={false}>
                      {expandedBook === book.name && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{
                            opacity: 1,
                            height: "auto",
                            transition: {
                              duration: 0.3,
                              ease: "easeInOut",
                            },
                          }}
                          exit={{
                            opacity: 0,
                            height: 0,
                            transition: {
                              duration: 0.3,
                              ease: "easeInOut",
                            },
                          }}
                          className="mt-4 pt-4 border-t border-slate-700 overflow-hidden"
                        >
                          <p className="text-sm text-slate-400 mb-3">
                            Selecione o capítulo:
                          </p>
                          <div className="grid grid-cols-6 gap-2">
                            {Array.from(
                              { length: book.chapters },
                              (_, i) => i + 1,
                            ).map((chapter) => (
                              <motion.button
                                key={chapter}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  onBookSelect(book.name, chapter);
                                }}
                                className="aspect-square bg-white/10 border border-white/10 hover:bg-primary text-white rounded-lg text-sm font-medium transition-all duration-200"
                              >
                                {chapter}
                              </motion.button>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
