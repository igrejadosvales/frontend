"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  CheckCircle2,
  Circle,
  ArrowLeft,
  Calendar,
  Trophy,
  BookMarked,
  ChevronDown,
  ChevronUp,
  Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  READING_PLANS,
  type ReadingPlan,
  type ReadingDay,
  getReadingPlanProgress,
  saveReadingPlanProgress,
  loadReadingPlanProgress,
} from "@/components/bible/lib";

interface BibleVerse {
  book_name: string;
  chapter: number;
  verse: number;
  text: string;
}

interface ReadingVerses {
  reading: string;
  verses: BibleVerse[];
}

// Mapa de abreviações para a API ABíbliaDigital (português)
const bookAbbreviations: Record<string, string> = {
  Gênesis: "gn",
  Êxodo: "ex",
  Levítico: "lv",
  Números: "nm",
  Deuteronômio: "dt",
  Josué: "js",
  Juízes: "jz",
  Rute: "rt",
  "1 Samuel": "1sm",
  "2 Samuel": "2sm",
  "1 Reis": "1rs",
  "2 Reis": "2rs",
  "1 Crônicas": "1cr",
  "2 Crônicas": "2cr",
  Esdras: "ed",
  Neemias: "ne",
  Ester: "et",
  Jó: "job",
  Salmos: "sl",
  Provérbios: "pv",
  Eclesiastes: "ec",
  Cantares: "ct",
  Isaías: "is",
  Jeremias: "jr",
  Lamentações: "lm",
  Ezequiel: "ez",
  Daniel: "dn",
  Oséias: "os",
  Joel: "jl",
  Amós: "am",
  Obadias: "ob",
  Jonas: "jn",
  Miquéias: "mq",
  Naum: "na",
  Habacuque: "hc",
  Sofonias: "sf",
  Ageu: "ag",
  Zacarias: "zc",
  Malaquias: "ml",
  Mateus: "mt",
  Marcos: "mc",
  Lucas: "lc",
  João: "jo",
  Atos: "atos",
  Romanos: "rm",
  "1 Coríntios": "1co",
  "2 Coríntios": "2co",
  Gálatas: "gl",
  Efésios: "ef",
  Filipenses: "fp",
  Colossenses: "cl",
  "1 Tessalonicenses": "1ts",
  "2 Tessalonicenses": "2ts",
  "1 Timóteo": "1tm",
  "2 Timóteo": "2tm",
  Tito: "tt",
  Filemom: "fm",
  Hebreus: "hb",
  Tiago: "tg",
  "1 Pedro": "1pe",
  "2 Pedro": "2pe",
  "1 João": "1jo",
  "2 João": "2jo",
  "3 João": "3jo",
  Judas: "jd",
  Apocalipse: "ap",
};

// Função para obter abreviação do livro
function getBookAbbreviation(bookName: string): string | null {
  return bookAbbreviations[bookName] || null;
}

// Função para expandir intervalos de capítulos (ex: "Salmos 1-3" -> [{book: "sl", chapter: 1}, {book: "sl", chapter: 2}, {book: "sl", chapter: 3}])
function expandChapterRanges(
  reference: string,
): Array<{ book: string; chapter: number }> {
  const match = reference.match(/^(.+?)\s+(\d+)(?:-(\d+))?$/);

  if (!match) return [];

  const bookName = match[1];
  const bookAbbrev = getBookAbbreviation(bookName);

  if (!bookAbbrev) return [];

  const startChapter = parseInt(match[2]);
  const endChapter = match[3] ? parseInt(match[3]) : startChapter;

  const chapters: Array<{ book: string; chapter: number }> = [];
  for (let i = startChapter; i <= endChapter; i++) {
    chapters.push({ book: bookAbbrev, chapter: i });
  }

  return chapters;
}

export default function ReadingPlansPage() {
  const [selectedPlan, setSelectedPlan] = useState<ReadingPlan | null>(null);
  const [planDays, setPlanDays] = useState<ReadingDay[]>([]);
  const [progress, setProgress] = useState<Record<string, number>>({});
  const [expandedDay, setExpandedDay] = useState<number | null>(null);
  const [versesLoading, setVersesLoading] = useState<boolean>(false);
  const [verses, setVerses] = useState<Record<number, ReadingVerses[]>>({});
  const [bibleVersion, setBibleVersion] = useState<"nvi" | "acf" | "aa">("nvi");

  // Carregar progresso de todos os planos
  useEffect(() => {
    const progressData: Record<string, number> = {};
    READING_PLANS.forEach((plan: ReadingPlan) => {
      progressData[plan.id] = getReadingPlanProgress(plan.id);
    });
    setProgress(progressData);
  }, []);

  const handleSelectPlan = (plan: ReadingPlan) => {
    const savedProgress = loadReadingPlanProgress(plan.id);
    const daysToUse = savedProgress || plan.days;
    console.log(
      `Plano selecionado: ${plan.title}, Total de dias: ${daysToUse.length}`,
    );
    setPlanDays(daysToUse);
    setSelectedPlan(plan);
  };

  const handleToggleDay = (dayIndex: number) => {
    if (!selectedPlan) return;

    const updatedDays = [...planDays];
    updatedDays[dayIndex].completed = !updatedDays[dayIndex].completed;
    setPlanDays(updatedDays);
    saveReadingPlanProgress(selectedPlan.id, updatedDays);

    // Atualizar progresso
    const newProgress = getReadingPlanProgress(selectedPlan.id);
    setProgress((prev) => ({ ...prev, [selectedPlan.id]: newProgress }));
  };

  const handleToggleExpand = async (dayIndex: number) => {
    const day = planDays[dayIndex];

    if (expandedDay === dayIndex) {
      setExpandedDay(null);
      return;
    }

    setExpandedDay(dayIndex);

    // Se já tem os versículos carregados, não busca novamente
    if (verses[dayIndex]) return;

    // Buscar versículos da API local
    setVersesLoading(true);
    try {
      const readingVerses: ReadingVerses[] = [];

      for (const reading of day.readings) {
        const versesForReading: BibleVerse[] = [];

        // Expandir intervalos de capítulos
        const expandedChapters = expandChapterRanges(reading);

        for (const chapterInfo of expandedChapters) {
          console.log(
            `Buscando: ${reading} -> ${chapterInfo.book}/${chapterInfo.chapter}`,
          );

          try {
            // API local do Next.js
            const response = await fetch(
              `/api/bible/${bibleVersion}/${chapterInfo.book}/${chapterInfo.chapter}`,
            );

            if (response.ok) {
              const data = await response.json();
              console.log("Resposta da API:", data);

              // Estrutura da API: { book, chapter, version, verses: [{number, text}] }
              if (data.verses && Array.isArray(data.verses)) {
                // Converter para o formato esperado
                const convertedVerses = data.verses.map((verse: any) => ({
                  book_name: data.book || reading,
                  chapter: data.chapter || chapterInfo.chapter,
                  verse: verse.number,
                  text: verse.text,
                }));
                versesForReading.push(...convertedVerses);
              }
            } else {
              const errorData = await response.json();
              console.error(
                `Erro ao buscar ${chapterInfo.book}/${chapterInfo.chapter}:`,
                errorData.error || response.status,
              );
            }
          } catch (fetchError) {
            console.error(
              `Erro na requisição para ${chapterInfo.book}/${chapterInfo.chapter}:`,
              fetchError,
            );
          }
        }

        if (versesForReading.length > 0) {
          readingVerses.push({
            reading: reading,
            verses: versesForReading,
          });
        }
      }

      setVerses((prev) => ({ ...prev, [dayIndex]: readingVerses }));
    } catch (error) {
      console.error("Erro ao carregar versículos:", error);
    } finally {
      setVersesLoading(false);
    }
  };

  const handleBack = () => {
    setSelectedPlan(null);
    setPlanDays([]);
    setExpandedDay(null);
    setVerses({});
  };

  const completedDays = planDays.filter((d) => d.completed).length;
  const totalDays = planDays.length;
  const currentProgress = totalDays > 0 ? (completedDays / totalDays) * 100 : 0;

  return (
    <div className="min-h-screen bg-linear-to-br from-[#18120c] via-[#121212] to-[#18120c]">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="border-b border-white/10 bg-black/40 backdrop-blur-lg sticky top-16 z-10"
      >
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between max-md:flex-col max-md:gap-4 max-md:items-start">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-primary rounded-xl">
                <BookMarked className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-white ">
                  {selectedPlan ? selectedPlan.title : "Planos de Leitura"}
                </h1>
                <p className="text-sm text-gray-400 max-md:text-xs">
                  {selectedPlan
                    ? `${completedDays} de ${totalDays} dias concluídos`
                    : "Escolha um plano e comece sua jornada"}
                </p>
              </div>
            </div>
            {selectedPlan ? (
              <Button
                onClick={handleBack}
                variant="outline"
                className="bg-white/10 border-white/10 hover:bg-primary text-white"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar
              </Button>
            ) : (
              <Link href="/biblia">
                <Button
                  variant="outline"
                  className="bg-white/10 border-white/10 hover:bg-primary text-white"
                >
                  <BookOpen className="w-4 h-4 mr-2" />
                  <span>Voltar para Bíblia</span>
                </Button>
              </Link>
            )}
          </div>
        </div>
      </motion.div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        <AnimatePresence mode="wait">
          {!selectedPlan ? (
            <motion.div
              key="plans-list"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {READING_PLANS.map((plan: ReadingPlan, index: number) => (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  onClick={() => handleSelectPlan(plan)}
                  className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 cursor-pointer hover:border-primary transition-all group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-primary rounded-xl group-hover:scale-110 transition-transform">
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <span className="px-3 py-1 bg-white/10 text-primary text-xs font-semibold rounded-full">
                      {plan.duration} dias
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">
                    {plan.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {plan.description}
                  </p>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <span>Progresso</span>
                      <span className="font-semibold text-primary">
                        {progress[plan.id] || 0}%
                      </span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${progress[plan.id] || 0}%` }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="h-full bg-primary"
                      />
                    </div>
                  </div>

                  <div className="mt-4 flex items-center gap-2 text-xs text-gray-500">
                    <Calendar className="w-4 h-4" />
                    <span>{plan.category}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="plan-details"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="max-w-4xl mx-auto"
            >
              {/* Progress Card */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-primary rounded-2xl p-6 mb-6 text-white"
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold">
                      {completedDays} de {totalDays} dias
                    </h3>
                    <p className="text-white/80">
                      {Math.round(currentProgress)}% concluído
                    </p>
                  </div>
                  {currentProgress === 100 && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring" }}
                    >
                      <Trophy className="w-12 h-12 text-yellow-300" />
                    </motion.div>
                  )}
                </div>
                <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${currentProgress}%` }}
                    transition={{ duration: 0.5 }}
                    className="h-full bg-white rounded-full"
                  />
                </div>
              </motion.div>

              {/* Seletor de Versão da Bíblia - abaixo do progresso */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-4 mb-6"
              >
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="bible-version"
                    className="text-gray-400 font-medium"
                  >
                    Versão da Bíblia:
                  </label>
                  <select
                    id="bible-version"
                    value={bibleVersion}
                    onChange={(e) => {
                      setBibleVersion(e.target.value as "nvi" | "acf" | "aa");
                      setVerses({});
                      setExpandedDay(null);
                    }}
                    className="bg-[#313131] text-white border border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer"
                    style={{ appearance: "none" }}
                  >
                    <option value="nvi">NVI</option>
                    <option value="acf">ACF</option>
                    <option value="aa">AA</option>
                  </select>
                </div>
              </motion.div>

              {/* Days List */}
              <div className="space-y-3">
                {planDays.map((day, index) => (
                  <motion.div
                    key={day.day}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.02 }}
                    className={`bg-white/5 backdrop-blur border rounded-2xl overflow-hidden transition-all ${
                      day.completed
                        ? "border-green-500/50 bg-green-500/10"
                        : "border-white/10 hover:border-primary"
                    }`}
                  >
                    <div className="flex items-center justify-between p-4">
                      <div className="flex items-center gap-4 flex-1">
                        <div
                          className={`flex items-center justify-center w-10 h-10 rounded-full font-bold ${
                            day.completed
                              ? "bg-green-500 text-white"
                              : "bg-white/10 text-gray-400"
                          }`}
                        >
                          {day.day}
                        </div>
                        <div className="flex-1">
                          <p
                            className={`font-medium ${
                              day.completed
                                ? "text-green-400 line-through"
                                : "text-white"
                            }`}
                          >
                            Dia {day.day}
                          </p>
                          <div className="flex flex-wrap gap-2 mt-1">
                            {day.readings.map((reading: string, i: number) => (
                              <span
                                key={i}
                                className={`text-sm px-2 py-1 rounded ${
                                  day.completed
                                    ? "bg-green-500/20 text-green-300"
                                    : "bg-white/10 text-gray-400"
                                }`}
                              >
                                {reading}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 ml-4">
                        {/* Expand Button */}
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => handleToggleExpand(index)}
                          className={`p-2 rounded-lg transition-colors ${
                            expandedDay === index
                              ? "bg-primary text-white"
                              : "bg-white/10 text-gray-400 hover:bg-primary"
                          }`}
                          title="Ler versículos"
                        >
                          {expandedDay === index ? (
                            <ChevronUp className="w-5 h-5" />
                          ) : (
                            <ChevronDown className="w-5 h-5" />
                          )}
                        </motion.button>

                        {/* Complete Button */}
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => handleToggleDay(index)}
                        >
                          {day.completed ? (
                            <CheckCircle2 className="w-8 h-8 text-green-500" />
                          ) : (
                            <Circle className="w-8 h-8 text-gray-500 hover:text-primary transition-colors" />
                          )}
                        </motion.button>
                      </div>
                    </div>

                    {/* Verses Section */}
                    <AnimatePresence>
                      {expandedDay === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="border-t border-white/10"
                        >
                          <div className="p-4 bg-[#18120c]/80">
                            {versesLoading ? (
                              <div className="flex items-center justify-center py-8">
                                <Loader2 className="w-8 h-8 text-primary animate-spin" />
                                <span className="ml-3 text-gray-400">
                                  Carregando versículos...
                                </span>
                              </div>
                            ) : verses[index] && verses[index].length > 0 ? (
                              <div
                                className="space-y-6 max-h-96 overflow-y-auto custom-scrollbar pr-2"
                                style={{ background: "none" }}
                              >
                                {verses[index].map((readingGroup, rIndex) => (
                                  <div key={rIndex}>
                                    {/* Título da Leitura */}
                                    {verses[index].length > 1 && (
                                      <div className="mb-3 pb-2 border-b border-white/10">
                                        <h4 className="text-primary font-bold text-sm">
                                          {readingGroup.reading}
                                        </h4>
                                      </div>
                                    )}
                                    {/* Versículos */}
                                    <div className="space-y-3">
                                      {readingGroup.verses.map(
                                        (verse, vIndex) => (
                                          <motion.div
                                            key={`${verse.chapter}-${verse.verse}-${vIndex}`}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{
                                              delay: vIndex * 0.02,
                                            }}
                                            className="flex gap-3"
                                          >
                                            <span className="text-primary font-bold text-sm shrink-0">
                                              {verse.verse}
                                            </span>
                                            <p className="text-white text-sm leading-relaxed">
                                              {verse.text}
                                            </p>
                                          </motion.div>
                                        ),
                                      )}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            ) : (
                              <p className="text-gray-400 text-center py-4">
                                Nenhum versículo encontrado
                              </p>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>

              {/* Completion Message */}
              {currentProgress === 100 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mt-8 bg-linear-to-br from-yellow-500 to-orange-500 rounded-2xl p-8 text-center text-white"
                >
                  <Trophy className="w-16 h-16 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Parabéns! 🎉</h3>
                  <p className="text-lg">
                    Você completou o plano "{selectedPlan.title}"!
                  </p>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
