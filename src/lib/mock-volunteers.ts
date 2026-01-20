export interface VolunteerArea {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: "louvor" | "criancas" | "jovens" | "midia" | "recepcao" | "outros";
  requiredSkills?: string[];
  commitment: string;
}

export interface VolunteerFormData {
  name: string;
  email: string;
  phone: string;
  birthDate: string;
  education: "fundamental" | "medio" | "superior" | "pos-graduacao";
  selectedAreas?: string[];
}

export interface Feedback {
  id: string;
  volunteerName: string;
  area: string;
  rating: number;
  comment: string;
  date: string;
}

export const volunteerAreas: VolunteerArea[] = [
  {
    id: "next",
    name: "Next (Crianças)",
    description:
      "Ministério infantil que cuida e ensina as crianças durante os cultos",
    icon: "🧒",
    category: "criancas",
    requiredSkills: ["Paciência", "Amor por crianças", "Criatividade"],
    commitment: "Domingos pela manhã, escalas rotativas",
  },
  {
    id: "hangout",
    name: "Hangout (Jovens)",
    description:
      "Ministério de jovens focado em conectar e discipular a próxima geração",
    icon: "🎮",
    category: "jovens",
    requiredSkills: ["Comunicação", "Liderança", "Empatia"],
    commitment: "Sextas à noite e domingos",
  },
  {
    id: "outside",
    name: "Outside (Evangelismo)",
    description: "Ministério focado em alcançar pessoas fora da igreja",
    icon: "🌍",
    category: "outros",
    requiredSkills: ["Comunicação", "Coragem", "Amor pelas almas"],
    commitment: "Sábados pela manhã",
  },
  {
    id: "diaconos",
    name: "Diáconos",
    description: "Serviço prático de apoio à igreja e aos necessitados",
    icon: "🤝",
    category: "outros",
    requiredSkills: ["Disponibilidade", "Coração servo", "Organização"],
    commitment: "Domingos e eventos especiais",
  },
  {
    id: "louvor",
    name: "Louvor e Adoração",
    description: "Ministério de música que conduz a congregação em adoração",
    icon: "🎵",
    category: "louvor",
    requiredSkills: ["Musicalidade", "Dedicação", "Compromisso com ensaios"],
    commitment: "Ensaios semanais + domingos",
  },
  {
    id: "midia",
    name: "Mídia e Comunicação",
    description: "Transmissão online, áudio, vídeo e redes sociais",
    icon: "🎥",
    category: "midia",
    requiredSkills: [
      "Conhecimento técnico",
      "Atenção aos detalhes",
      "Criatividade",
    ],
    commitment: "Domingos e produção de conteúdo",
  },
  {
    id: "recepcao",
    name: "Recepção",
    description: "Acolhimento de visitantes e membros nos cultos",
    icon: "👋",
    category: "recepcao",
    requiredSkills: ["Simpatia", "Comunicação", "Organização"],
    commitment: "Domingos, escalas rotativas",
  },
  {
    id: "intercessao",
    name: "Intercessão",
    description: "Ministério de oração pela igreja e necessidades",
    icon: "🙏",
    category: "outros",
    requiredSkills: ["Vida de oração", "Compromisso", "Sigilo"],
    commitment: "Encontros semanais de oração",
  },
];

export const mockFeedbacks: Feedback[] = [
  {
    id: "1",
    volunteerName: "Maria Silva",
    area: "Next (Crianças)",
    rating: 5,
    comment:
      "Experiência maravilhosa! Ver o sorriso das crianças aprendendo sobre Jesus não tem preço.",
    date: "2025-12-15",
  },
  {
    id: "2",
    volunteerName: "João Santos",
    area: "Mídia e Comunicação",
    rating: 5,
    comment:
      "Poder usar meus conhecimentos técnicos para expandir o Reino tem sido incrível!",
    date: "2025-12-10",
  },
  {
    id: "3",
    volunteerName: "Ana Costa",
    area: "Recepção",
    rating: 4,
    comment: "Amo poder receber as pessoas e fazer com que se sintam em casa.",
    date: "2025-12-05",
  },
];

export const hangarResources = [
  {
    id: "1",
    title: "HANGAR - Introdução ao Voluntariado",
    type: "video",
    duration: "15:30",
    thumbnail: "/images/hangar-intro.jpg",
    url: "/videos/hangar-intro",
  },
  {
    id: "2",
    title: "Coração de Servo",
    type: "audio",
    duration: "25:45",
    thumbnail: "/images/hands3-coracao.jpg",
    url: "/audio/coracao-servo",
  },
  {
    id: "3",
    title: "Descobrindo seus Dons",
    type: "video",
    duration: "20:15",
    thumbnail: "/images/hands3-dons.jpg",
    url: "/videos/descobrindo-dons",
  },
];
