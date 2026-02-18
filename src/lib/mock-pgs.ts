import { supabase } from "./supabase";

export interface SmallGroup {
  id: string;
  name: string;
  leader: string;
  supervisor?: string;
  phone?: string;
  day: string;
  time: string;
  address: string;
  neighborhood?: string;
  region?: string; // Gravataí, Cachoeirinha, Porto Alegre, Online
  coordinates: [number, number] | null; // [latitude, longitude]
  description?: string;
  type?: string;
  local?: string;
}

interface GroupDB {
  id: string;
  local: string | null;
  leader: string | null;
  supervisor: string | null;
  phone: string | null;
  day: string | null;
  hour: string | null;
  address: string | null;
  latitude: number | null;
  longitude: number | null;
  type: string | null;
}

export async function getSmallGroups(): Promise<SmallGroup[]> {
  const { data, error } = await supabase.from("igrupos").select("*");

  if (error) {
    console.error("Error fetching groups:", error);
    return [];
  }

  const mappedGroups = ((data as unknown as GroupDB[]) || []).map((item) => {
    return {
      id: item.id,
      name: item.local || "Pequeno Grupo",
      leader: item.leader || "Sem líder",
      supervisor: item.supervisor || undefined,
      phone: item.phone || undefined,
      day: item.day || "Indefinido",
      time: item.hour || "",
      address: item.address || "",
      coordinates:
        item.latitude && item.longitude
          ? ([item.latitude, item.longitude] as [number, number])
          : null,
      type: item.type || undefined,
      local: item.local || undefined,
    };
  });

  return mappedGroups;
}

export const SMALL_GROUPS: SmallGroup[] = [];
