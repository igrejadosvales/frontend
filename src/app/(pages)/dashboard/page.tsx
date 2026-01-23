import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard de Voluntários | Igreja dos Vales",
  description:
    "Acompanhe as estatísticas e métricas do voluntariado da Igreja dos Vales em tempo real",
};

export default function VoluntariosDashboardPage() {
  return <DashboardLayout />;
}
