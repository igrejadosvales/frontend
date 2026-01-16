export interface SmallGroup {
  id: string;
  name: string;
  leader: string;
  day: "Segunda" | "Terça" | "Quarta" | "Quinta" | "Sexta" | "Sábado" | "Domingo";
  time: string;
  address: string;
  coordinates: [number, number]; // [latitude, longitude]
  description?: string;
  neighborhood: string;
}

export const SMALL_GROUPS: SmallGroup[] = [
  {
    id: "1",
    name: "PG Jovem Vida",
    leader: "Lucas e Mariana",
    day: "Sexta",
    time: "20:00",
    address: "Rua Anápio Gomes, 123",
    neighborhood: "Centro",
    coordinates: [-29.9425, -50.9950],
    description: "Um grupo focado em jovens universitários e recém-formados.",
  },
  {
    id: "2",
    name: "PG Família Feliz",
    leader: "Roberto e Ana",
    day: "Quarta",
    time: "19:30",
    address: "Av. Ely Corrêa, 500",
    neighborhood: "Parque dos Anjos",
    coordinates: [-29.9320, -50.9750],
    description: "Voltado para casais e famílias com crianças.",
  },
  {
    id: "3",
    name: "PG Mulheres de Fé",
    leader: "Patrícia",
    day: "Quinta",
    time: "15:00",
    address: "Av. Alexandrino de Alencar, 800",
    neighborhood: "Morada do Vale I",
    coordinates: [-29.9150, -51.0250],
    description: "Estudo bíblico e comunhão para mulheres.",
  },
  {
    id: "4",
    name: "PG Conexão",
    leader: "Felipe",
    day: "Terça",
    time: "20:30",
    address: "Rua Ary Tubbs, 200",
    neighborhood: "Cohab A",
    coordinates: [-29.9520, -51.0120],
    description: "Grupo dinâmico com foco em missões urbanas.",
  },
  {
    id: "5",
    name: "PG Melhor Idade",
    leader: "Dona Maria",
    day: "Quarta",
    time: "16:00",
    address: "Rua Itacolomi, 400",
    neighborhood: "São Vicente",
    coordinates: [-29.9610, -51.0320],
    description: "Comunhão e oração para a melhor idade.",
  },
];
