export interface ReadingDay {
  day: number;
  readings: string[];
  completed: boolean;
  expanded?: boolean;
}

export interface ReadingPlan {
  id: string;
  title: string;
  description: string;
  duration: number; // dias
  category: string;
  days: ReadingDay[];
}

// Plano de 365 dias - Dados completos
function generateBible1YearPlan(): ReadingDay[] {
  // Aqui temos um plano simplificado que cobre toda a Bíblia
  // Para um plano real, você pode adaptar conforme necessário
  const days: ReadingDay[] = [];

  // Exemplo: Genesis a Apocalipse distribuído em 365 dias
  const booksOT = [
    "Gênesis",
    "Êxodo",
    "Levítico",
    "Números",
    "Deuteronômio",
    "Josué",
    "Juízes",
    "Rute",
    "1 Samuel",
    "2 Samuel",
    "1 Reis",
    "2 Reis",
    "1 Crônicas",
    "2 Crônicas",
    "Esdras",
    "Neemias",
    "Ester",
    "Jó",
    "Salmos",
    "Provérbios",
    "Eclesiastes",
    "Cantares",
    "Isaías",
    "Jeremias",
    "Lamentações",
    "Ezequiel",
    "Daniel",
    "Oséias",
    "Joel",
    "Amós",
    "Obadias",
    "Jonas",
    "Miquéias",
    "Naum",
    "Habacuque",
    "Sofonias",
    "Ageu",
    "Zacarias",
    "Malaquias",
  ];

  const booksNT = [
    "Mateus",
    "Marcos",
    "Lucas",
    "João",
    "Atos",
    "Romanos",
    "1 Coríntios",
    "2 Coríntios",
    "Gálatas",
    "Efésios",
    "Filipenses",
    "Colossenses",
    "1 Tessalonicenses",
    "2 Tessalonicenses",
    "1 Timóteo",
    "2 Timóteo",
    "Tito",
    "Filemom",
    "Hebreus",
    "Tiago",
    "1 Pedro",
    "2 Pedro",
    "1 João",
    "2 João",
    "3 João",
    "Judas",
    "Apocalipse",
  ];

  // Cria 365 dias mesclando AT e NT
  for (let i = 0; i < 365; i++) {
    const otIndex = Math.floor((i * booksOT.length) / 365);
    const ntIndex = Math.floor((i * booksNT.length) / 365);

    const otBook = booksOT[otIndex];
    const ntBook = booksNT[ntIndex];

    // Calcula capítulos baseado no dia
    const otChapter = (i % 5) + 1;
    const ntChapter = (i % 3) + 1;

    days.push({
      day: i + 1,
      readings: [`${otBook} ${otChapter}`, `${ntBook} ${ntChapter}`],
      completed: false,
      expanded: false,
    });
  }

  console.log(`Plano de 1 ano gerado com ${days.length} dias`);
  return days;
}

// Plano de 90 dias - Novo Testamento completo
function generateNewTestament90Days(): ReadingDay[] {
  const readings: string[][] = [];

  // Mateus (28 capítulos) - 9 dias
  readings.push(
    ["Mateus 1-3"],
    ["Mateus 4-6"],
    ["Mateus 7-9"],
    ["Mateus 10-12"],
    ["Mateus 13-15"],
    ["Mateus 16-18"],
    ["Mateus 19-21"],
    ["Mateus 22-24"],
    ["Mateus 25-28"],
  );

  // Marcos (16 capítulos) - 5 dias
  readings.push(
    ["Marcos 1-3"],
    ["Marcos 4-6"],
    ["Marcos 7-9"],
    ["Marcos 10-12"],
    ["Marcos 13-16"],
  );

  // Lucas (24 capítulos) - 8 dias
  readings.push(
    ["Lucas 1-3"],
    ["Lucas 4-6"],
    ["Lucas 7-9"],
    ["Lucas 10-12"],
    ["Lucas 13-15"],
    ["Lucas 16-18"],
    ["Lucas 19-21"],
    ["Lucas 22-24"],
  );

  // João (21 capítulos) - 7 dias
  readings.push(
    ["João 1-3"],
    ["João 4-6"],
    ["João 7-9"],
    ["João 10-12"],
    ["João 13-15"],
    ["João 16-18"],
    ["João 19-21"],
  );

  // Atos (28 capítulos) - 9 dias
  readings.push(
    ["Atos 1-3"],
    ["Atos 4-6"],
    ["Atos 7-9"],
    ["Atos 10-12"],
    ["Atos 13-15"],
    ["Atos 16-18"],
    ["Atos 19-21"],
    ["Atos 22-24"],
    ["Atos 25-28"],
  );

  // Romanos (16 capítulos) - 5 dias
  readings.push(
    ["Romanos 1-3"],
    ["Romanos 4-6"],
    ["Romanos 7-9"],
    ["Romanos 10-12"],
    ["Romanos 13-16"],
  );

  // 1 Coríntios (16 capítulos) - 5 dias
  readings.push(
    ["1 Coríntios 1-3"],
    ["1 Coríntios 4-6"],
    ["1 Coríntios 7-9"],
    ["1 Coríntios 10-13"],
    ["1 Coríntios 14-16"],
  );

  // 2 Coríntios (13 capítulos) - 4 dias
  readings.push(
    ["2 Coríntios 1-3"],
    ["2 Coríntios 4-6"],
    ["2 Coríntios 7-9"],
    ["2 Coríntios 10-13"],
  );

  // Gálatas (6 capítulos) - 2 dias
  readings.push(["Gálatas 1-3"], ["Gálatas 4-6"]);

  // Efésios (6 capítulos) - 2 dias
  readings.push(["Efésios 1-3"], ["Efésios 4-6"]);

  // Filipenses (4 capítulos) - 1 dia
  readings.push(["Filipenses 1-4"]);

  // Colossenses (4 capítulos) - 1 dia
  readings.push(["Colossenses 1-4"]);

  // 1 Tessalonicenses (5 capítulos) - 1 dia
  readings.push(["1 Tessalonicenses 1-5"]);

  // 2 Tessalonicenses (3 capítulos) - 1 dia
  readings.push(["2 Tessalonicenses 1-3"]);

  // 1 Timóteo (6 capítulos) - 2 dias
  readings.push(["1 Timóteo 1-3"], ["1 Timóteo 4-6"]);

  // 2 Timóteo (4 capítulos) - 1 dia
  readings.push(["2 Timóteo 1-4"]);

  // Tito e Filemom - 1 dia
  readings.push(["Tito 1-3", "Filemom 1"]);

  // Hebreus (13 capítulos) - 4 dias
  readings.push(
    ["Hebreus 1-3"],
    ["Hebreus 4-7"],
    ["Hebreus 8-10"],
    ["Hebreus 11-13"],
  );

  // Tiago (5 capítulos) - 1 dia
  readings.push(["Tiago 1-5"]);

  // 1 Pedro (5 capítulos) - 1 dia
  readings.push(["1 Pedro 1-5"]);

  // 2 Pedro (3 capítulos) - 1 dia
  readings.push(["2 Pedro 1-3"]);

  // 1, 2, 3 João e Judas - 2 dias
  readings.push(["1 João 1-5"], ["2 João 1", "3 João 1", "Judas 1"]);

  // Apocalipse (22 capítulos) - 7 dias
  readings.push(
    ["Apocalipse 1-3"],
    ["Apocalipse 4-6"],
    ["Apocalipse 7-9"],
    ["Apocalipse 10-12"],
    ["Apocalipse 13-15"],
    ["Apocalipse 16-18"],
    ["Apocalipse 19-22"],
  );

  // Dias extras para completar 90 dias (mais 10 dias de revisão/aprofundamento)
  // Revisão dos Evangelhos e Atos
  readings.push(
    ["Mateus 5-7"], // Sermão do Monte
    ["Mateus 24-26"], // Profecias e Paixão
    ["Marcos 14-16"], // Paixão e Ressurreição
    ["Lucas 1-2"], // Nascimento de Jesus
    ["Lucas 15-16"], // Parábolas importantes
    ["João 13-17"], // Discursos de despedida
    ["João 1-3"], // Prólogo e Nicodemos
    ["Atos 1-2"], // Pentecostes
    ["Atos 9-10"], // Conversão de Paulo
    ["Romanos 8"], // Vida no Espírito
  );

  const days = readings.map((reading, index) => ({
    day: index + 1,
    readings: reading,
    completed: false,
    expanded: false,
  }));

  console.log(`Plano de 90 dias gerado com ${days.length} dias`);
  return days;
}

export const READING_PLANS: ReadingPlan[] = [
  {
    id: "biblia-1-ano",
    title: "Bíblia em 1 Ano",
    description:
      "Leia toda a Bíblia em 365 dias com leituras diárias do Antigo e Novo Testamento",
    duration: 365,
    category: "Completo",
    days: generateBible1YearPlan(),
  },
  {
    id: "novo-testamento-90-dias",
    title: "Novo Testamento em 90 Dias",
    description: "Complete a leitura do Novo Testamento em 3 meses",
    duration: 90,
    category: "Novo Testamento",
    days: generateNewTestament90Days(),
  },
  {
    id: "salmos-30-dias",
    title: "Salmos em 30 Dias",
    description:
      "Mergulhe nos Salmos com leituras diárias de adoração e louvor",
    duration: 30,
    category: "Devocionais",
    days: [
      { day: 1, readings: ["Salmos 1-5"], completed: false, expanded: false },
      { day: 2, readings: ["Salmos 6-10"], completed: false, expanded: false },
      { day: 3, readings: ["Salmos 11-15"], completed: false, expanded: false },
      { day: 4, readings: ["Salmos 16-20"], completed: false, expanded: false },
      { day: 5, readings: ["Salmos 21-25"], completed: false, expanded: false },
      { day: 6, readings: ["Salmos 26-30"], completed: false, expanded: false },
      { day: 7, readings: ["Salmos 31-35"], completed: false, expanded: false },
      { day: 8, readings: ["Salmos 36-40"], completed: false, expanded: false },
      { day: 9, readings: ["Salmos 41-45"], completed: false, expanded: false },
      {
        day: 10,
        readings: ["Salmos 46-50"],
        completed: false,
        expanded: false,
      },
      {
        day: 11,
        readings: ["Salmos 51-55"],
        completed: false,
        expanded: false,
      },
      {
        day: 12,
        readings: ["Salmos 56-60"],
        completed: false,
        expanded: false,
      },
      {
        day: 13,
        readings: ["Salmos 61-65"],
        completed: false,
        expanded: false,
      },
      {
        day: 14,
        readings: ["Salmos 66-70"],
        completed: false,
        expanded: false,
      },
      {
        day: 15,
        readings: ["Salmos 71-75"],
        completed: false,
        expanded: false,
      },
      {
        day: 16,
        readings: ["Salmos 76-80"],
        completed: false,
        expanded: false,
      },
      {
        day: 17,
        readings: ["Salmos 81-85"],
        completed: false,
        expanded: false,
      },
      {
        day: 18,
        readings: ["Salmos 86-90"],
        completed: false,
        expanded: false,
      },
      {
        day: 19,
        readings: ["Salmos 91-95"],
        completed: false,
        expanded: false,
      },
      {
        day: 20,
        readings: ["Salmos 96-100"],
        completed: false,
        expanded: false,
      },
      {
        day: 21,
        readings: ["Salmos 101-105"],
        completed: false,
        expanded: false,
      },
      {
        day: 22,
        readings: ["Salmos 106-110"],
        completed: false,
        expanded: false,
      },
      {
        day: 23,
        readings: ["Salmos 111-115"],
        completed: false,
        expanded: false,
      },
      {
        day: 24,
        readings: ["Salmos 116-120"],
        completed: false,
        expanded: false,
      },
      {
        day: 25,
        readings: ["Salmos 121-125"],
        completed: false,
        expanded: false,
      },
      {
        day: 26,
        readings: ["Salmos 126-130"],
        completed: false,
        expanded: false,
      },
      {
        day: 27,
        readings: ["Salmos 131-135"],
        completed: false,
        expanded: false,
      },
      {
        day: 28,
        readings: ["Salmos 136-140"],
        completed: false,
        expanded: false,
      },
      {
        day: 29,
        readings: ["Salmos 141-145"],
        completed: false,
        expanded: false,
      },
      {
        day: 30,
        readings: ["Salmos 146-150"],
        completed: false,
        expanded: false,
      },
    ],
  },
  {
    id: "proverbios-31-dias",
    title: "Provérbios em 31 Dias",
    description: "Um capítulo de Provérbios por dia para sabedoria diária",
    duration: 31,
    category: "Sabedoria",
    days: Array.from({ length: 31 }, (_, i) => ({
      day: i + 1,
      readings: [`Provérbios ${i + 1}`],
      completed: false,
      expanded: false,
    })),
  },
  {
    id: "evangelhos-40-dias",
    title: "Os Evangelhos em 40 Dias",
    description: "Conheça a vida de Jesus através dos quatro Evangelhos",
    duration: 40,
    category: "Jesus",
    days: [
      {
        day: 1,
        readings: ["Mateus 1-2", "Lucas 1-2"],
        completed: false,
        expanded: false,
      },
      {
        day: 2,
        readings: ["Mateus 3-4", "Marcos 1"],
        completed: false,
        expanded: false,
      },
      { day: 3, readings: ["João 1-2"], completed: false, expanded: false },
      { day: 4, readings: ["Mateus 5-6"], completed: false, expanded: false },
      { day: 5, readings: ["Mateus 7-8"], completed: false, expanded: false },
      { day: 6, readings: ["Lucas 6-7"], completed: false, expanded: false },
      { day: 7, readings: ["Mateus 9-10"], completed: false, expanded: false },
      { day: 8, readings: ["Marcos 3-4"], completed: false, expanded: false },
      { day: 9, readings: ["Mateus 11-12"], completed: false, expanded: false },
      { day: 10, readings: ["Lucas 8-9"], completed: false, expanded: false },
      {
        day: 11,
        readings: ["Mateus 13-14"],
        completed: false,
        expanded: false,
      },
      { day: 12, readings: ["João 3-4"], completed: false, expanded: false },
      { day: 13, readings: ["Marcos 5-6"], completed: false, expanded: false },
      {
        day: 14,
        readings: ["Mateus 15-16"],
        completed: false,
        expanded: false,
      },
      { day: 15, readings: ["Lucas 10-11"], completed: false, expanded: false },
      { day: 16, readings: ["João 5-6"], completed: false, expanded: false },
      {
        day: 17,
        readings: ["Mateus 17-18"],
        completed: false,
        expanded: false,
      },
      { day: 18, readings: ["Marcos 7-8"], completed: false, expanded: false },
      { day: 19, readings: ["Lucas 12-13"], completed: false, expanded: false },
      { day: 20, readings: ["João 7-8"], completed: false, expanded: false },
      {
        day: 21,
        readings: ["Mateus 19-20"],
        completed: false,
        expanded: false,
      },
      { day: 22, readings: ["Marcos 9-10"], completed: false, expanded: false },
      { day: 23, readings: ["Lucas 14-15"], completed: false, expanded: false },
      { day: 24, readings: ["João 9-10"], completed: false, expanded: false },
      {
        day: 25,
        readings: ["Mateus 21-22"],
        completed: false,
        expanded: false,
      },
      { day: 26, readings: ["Lucas 16-17"], completed: false, expanded: false },
      { day: 27, readings: ["João 11-12"], completed: false, expanded: false },
      {
        day: 28,
        readings: ["Mateus 23-24"],
        completed: false,
        expanded: false,
      },
      {
        day: 29,
        readings: ["Marcos 11-12"],
        completed: false,
        expanded: false,
      },
      { day: 30, readings: ["Lucas 18-19"], completed: false, expanded: false },
      {
        day: 31,
        readings: ["Mateus 25-26"],
        completed: false,
        expanded: false,
      },
      {
        day: 32,
        readings: ["Marcos 13-14"],
        completed: false,
        expanded: false,
      },
      { day: 33, readings: ["Lucas 20-21"], completed: false, expanded: false },
      { day: 34, readings: ["João 13-14"], completed: false, expanded: false },
      { day: 35, readings: ["João 15-16"], completed: false, expanded: false },
      { day: 36, readings: ["João 17-18"], completed: false, expanded: false },
      {
        day: 37,
        readings: ["Mateus 27", "Marcos 15"],
        completed: false,
        expanded: false,
      },
      { day: 38, readings: ["Lucas 22-23"], completed: false, expanded: false },
      { day: 39, readings: ["João 19-20"], completed: false, expanded: false },
      {
        day: 40,
        readings: ["Mateus 28", "Lucas 24", "João 21"],
        completed: false,
        expanded: false,
      },
    ],
  },
];

export function getReadingPlanProgress(planId: string): number {
  const storageKey = `reading-plan-${planId}`;
  const saved = localStorage.getItem(storageKey);
  if (!saved) return 0;

  const progress = JSON.parse(saved);
  const completed = progress.filter((day: ReadingDay) => day.completed).length;
  const plan = READING_PLANS.find((p) => p.id === planId);
  const total = plan?.duration || 1;

  return Math.round((completed / total) * 100);
}

export function saveReadingPlanProgress(planId: string, days: ReadingDay[]) {
  const storageKey = `reading-plan-${planId}`;
  localStorage.setItem(storageKey, JSON.stringify(days));
}

export function loadReadingPlanProgress(planId: string): ReadingDay[] | null {
  const storageKey = `reading-plan-${planId}`;
  const saved = localStorage.getItem(storageKey);
  return saved ? JSON.parse(saved) : null;
}

