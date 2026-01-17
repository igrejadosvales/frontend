import { volunteerAreas } from "./mock-volunteers";

export interface VolunteerRegistration {
  id: string;
  name: string;
  email: string;
  registrationDate: string;
  selectedAreas: string[];
  status: "active" | "pending" | "training";
  wantsNewArea: boolean;
  requestedNewArea?: string;
}

export interface DashboardStats {
  totalVolunteers: number;
  activeVolunteers: number;
  pendingVolunteers: number;
  newAreaRequests: number;
  monthlyGrowth: number;
}

export interface AreaStats {
  areaId: string;
  areaName: string;
  volunteerCount: number;
  category: string;
}

export interface CategoryStats {
  category: string;
  count: number;
  percentage: number;
}

export interface MonthlyGrowth {
  month: string;
  volunteers: number;
}

// Mock volunteer registrations
export const mockVolunteerRegistrations: VolunteerRegistration[] = [
  {
    id: "1",
    name: "Maria Silva",
    email: "maria@example.com",
    registrationDate: "2025-12-15",
    selectedAreas: ["next", "recepcao"],
    status: "active",
    wantsNewArea: false,
  },
  {
    id: "2",
    name: "João Santos",
    email: "joao@example.com",
    registrationDate: "2025-12-10",
    selectedAreas: ["midia"],
    status: "active",
    wantsNewArea: false,
  },
  {
    id: "3",
    name: "Ana Costa",
    email: "ana@example.com",
    registrationDate: "2025-12-05",
    selectedAreas: ["recepcao"],
    status: "active",
    wantsNewArea: false,
  },
  {
    id: "4",
    name: "Pedro Oliveira",
    email: "pedro@example.com",
    registrationDate: "2025-11-28",
    selectedAreas: ["louvor"],
    status: "active",
    wantsNewArea: true,
    requestedNewArea: "midia",
  },
  {
    id: "5",
    name: "Carla Mendes",
    email: "carla@example.com",
    registrationDate: "2025-11-20",
    selectedAreas: ["next"],
    status: "training",
    wantsNewArea: false,
  },
  {
    id: "6",
    name: "Lucas Ferreira",
    email: "lucas@example.com",
    registrationDate: "2025-11-15",
    selectedAreas: ["hangout", "outside"],
    status: "active",
    wantsNewArea: false,
  },
  {
    id: "7",
    name: "Juliana Rocha",
    email: "juliana@example.com",
    registrationDate: "2025-11-10",
    selectedAreas: ["intercessao"],
    status: "active",
    wantsNewArea: true,
    requestedNewArea: "louvor",
  },
  {
    id: "8",
    name: "Rafael Lima",
    email: "rafael@example.com",
    registrationDate: "2025-11-05",
    selectedAreas: ["diaconos"],
    status: "active",
    wantsNewArea: false,
  },
  {
    id: "9",
    name: "Beatriz Alves",
    email: "beatriz@example.com",
    registrationDate: "2025-10-30",
    selectedAreas: ["louvor", "recepcao"],
    status: "active",
    wantsNewArea: false,
  },
  {
    id: "10",
    name: "Gabriel Souza",
    email: "gabriel@example.com",
    registrationDate: "2025-10-25",
    selectedAreas: ["midia"],
    status: "active",
    wantsNewArea: true,
    requestedNewArea: "louvor",
  },
  {
    id: "11",
    name: "Fernanda Castro",
    email: "fernanda@example.com",
    registrationDate: "2025-10-20",
    selectedAreas: ["next"],
    status: "active",
    wantsNewArea: false,
  },
  {
    id: "12",
    name: "Thiago Barbosa",
    email: "thiago@example.com",
    registrationDate: "2025-10-15",
    selectedAreas: ["hangout"],
    status: "pending",
    wantsNewArea: false,
  },
  {
    id: "13",
    name: "Camila Dias",
    email: "camila@example.com",
    registrationDate: "2025-10-10",
    selectedAreas: ["recepcao"],
    status: "active",
    wantsNewArea: true,
    requestedNewArea: "next",
  },
  {
    id: "14",
    name: "Bruno Martins",
    email: "bruno@example.com",
    registrationDate: "2025-10-05",
    selectedAreas: ["outside"],
    status: "active",
    wantsNewArea: false,
  },
  {
    id: "15",
    name: "Larissa Gomes",
    email: "larissa@example.com",
    registrationDate: "2025-09-28",
    selectedAreas: ["intercessao", "recepcao"],
    status: "active",
    wantsNewArea: false,
  },
  {
    id: "16",
    name: "Felipe Araújo",
    email: "felipe@example.com",
    registrationDate: "2025-09-20",
    selectedAreas: ["louvor"],
    status: "active",
    wantsNewArea: true,
    requestedNewArea: "midia",
  },
  {
    id: "17",
    name: "Amanda Ribeiro",
    email: "amanda@example.com",
    registrationDate: "2025-09-15",
    selectedAreas: ["next"],
    status: "training",
    wantsNewArea: false,
  },
  {
    id: "18",
    name: "Rodrigo Cardoso",
    email: "rodrigo@example.com",
    registrationDate: "2025-09-10",
    selectedAreas: ["midia"],
    status: "active",
    wantsNewArea: false,
  },
  {
    id: "19",
    name: "Patricia Nunes",
    email: "patricia@example.com",
    registrationDate: "2025-09-05",
    selectedAreas: ["diaconos"],
    status: "active",
    wantsNewArea: true,
    requestedNewArea: "intercessao",
  },
  {
    id: "20",
    name: "Marcelo Teixeira",
    email: "marcelo@example.com",
    registrationDate: "2025-08-30",
    selectedAreas: ["hangout"],
    status: "active",
    wantsNewArea: false,
  },
  {
    id: "21",
    name: "Renata Pinto",
    email: "renata@example.com",
    registrationDate: "2025-08-25",
    selectedAreas: ["recepcao"],
    status: "active",
    wantsNewArea: false,
  },
  {
    id: "22",
    name: "Diego Moreira",
    email: "diego@example.com",
    registrationDate: "2025-08-20",
    selectedAreas: ["louvor", "midia"],
    status: "active",
    wantsNewArea: false,
  },
  {
    id: "23",
    name: "Vanessa Correia",
    email: "vanessa@example.com",
    registrationDate: "2025-08-15",
    selectedAreas: ["next"],
    status: "pending",
    wantsNewArea: true,
    requestedNewArea: "hangout",
  },
  {
    id: "24",
    name: "André Pereira",
    email: "andre@example.com",
    registrationDate: "2025-08-10",
    selectedAreas: ["outside"],
    status: "active",
    wantsNewArea: false,
  },
  {
    id: "25",
    name: "Tatiana Freitas",
    email: "tatiana@example.com",
    registrationDate: "2025-08-05",
    selectedAreas: ["intercessao"],
    status: "active",
    wantsNewArea: false,
  },
];

// Calculate dashboard statistics
export function getDashboardStats(): DashboardStats {
  const total = mockVolunteerRegistrations.length;
  const active = mockVolunteerRegistrations.filter(
    (v) => v.status === "active"
  ).length;
  const pending = mockVolunteerRegistrations.filter(
    (v) => v.status === "pending"
  ).length;
  const newAreaRequests = mockVolunteerRegistrations.filter(
    (v) => v.wantsNewArea
  ).length;

  // Calculate monthly growth (comparing last month to previous month)
  const lastMonth = new Date();
  lastMonth.setMonth(lastMonth.getMonth() - 1);
  const previousMonth = new Date();
  previousMonth.setMonth(previousMonth.getMonth() - 2);

  const lastMonthCount = mockVolunteerRegistrations.filter((v) => {
    const regDate = new Date(v.registrationDate);
    return regDate >= lastMonth;
  }).length;

  const previousMonthCount = mockVolunteerRegistrations.filter((v) => {
    const regDate = new Date(v.registrationDate);
    return regDate >= previousMonth && regDate < lastMonth;
  }).length;

  const monthlyGrowth =
    previousMonthCount > 0
      ? ((lastMonthCount - previousMonthCount) / previousMonthCount) * 100
      : 0;

  return {
    totalVolunteers: total,
    activeVolunteers: active,
    pendingVolunteers: pending,
    newAreaRequests,
    monthlyGrowth: Math.round(monthlyGrowth),
  };
}

// Get volunteers per area
export function getVolunteersByArea(): AreaStats[] {
  const areaMap = new Map<string, number>();

  mockVolunteerRegistrations.forEach((volunteer) => {
    volunteer.selectedAreas.forEach((areaId) => {
      areaMap.set(areaId, (areaMap.get(areaId) || 0) + 1);
    });
  });

  return volunteerAreas.map((area) => ({
    areaId: area.id,
    areaName: area.name,
    volunteerCount: areaMap.get(area.id) || 0,
    category: area.category,
  }));
}

// Get category distribution
export function getCategoryDistribution(): CategoryStats[] {
  const categoryMap = new Map<string, number>();

  mockVolunteerRegistrations.forEach((volunteer) => {
    volunteer.selectedAreas.forEach((areaId) => {
      const area = volunteerAreas.find((a) => a.id === areaId);
      if (area) {
        categoryMap.set(
          area.category,
          (categoryMap.get(area.category) || 0) + 1
        );
      }
    });
  });

  const total = Array.from(categoryMap.values()).reduce(
    (sum, count) => sum + count,
    0
  );

  const categoryNames: Record<string, string> = {
    louvor: "Louvor",
    criancas: "Crianças",
    jovens: "Jovens",
    midia: "Mídia",
    recepcao: "Recepção",
    outros: "Outros",
  };

  return Array.from(categoryMap.entries()).map(([category, count]) => ({
    category: categoryNames[category] || category,
    count,
    percentage: Math.round((count / total) * 100),
  }));
}

// Get monthly growth data for the last 6 months
export function getMonthlyGrowthData(): MonthlyGrowth[] {
  const months = [
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
    "Janeiro",
  ];
  const monthlyData: MonthlyGrowth[] = [];

  for (let i = 5; i >= 0; i--) {
    const date = new Date();
    date.setMonth(date.getMonth() - i);
    const monthStart = new Date(date.getFullYear(), date.getMonth(), 1);
    const monthEnd = new Date(date.getFullYear(), date.getMonth() + 1, 0);

    const count = mockVolunteerRegistrations.filter((v) => {
      const regDate = new Date(v.registrationDate);
      return regDate >= monthStart && regDate <= monthEnd;
    }).length;

    monthlyData.push({
      month: months[5 - i],
      volunteers: count,
    });
  }

  return monthlyData;
}

// Get new area requests breakdown
export function getNewAreaRequests(): { area: string; count: number }[] {
  const requestMap = new Map<string, number>();

  mockVolunteerRegistrations
    .filter((v) => v.wantsNewArea && v.requestedNewArea)
    .forEach((volunteer) => {
      const areaId = volunteer.requestedNewArea!;
      const area = volunteerAreas.find((a) => a.id === areaId);
      if (area) {
        requestMap.set(area.name, (requestMap.get(area.name) || 0) + 1);
      }
    });

  return Array.from(requestMap.entries())
    .map(([area, count]) => ({ area, count }))
    .sort((a, b) => b.count - a.count);
}

// Get recent volunteers
export function getRecentVolunteers(limit: number = 10): VolunteerRegistration[] {
  return [...mockVolunteerRegistrations]
    .sort(
      (a, b) =>
        new Date(b.registrationDate).getTime() -
        new Date(a.registrationDate).getTime()
    )
    .slice(0, limit);
}
