import VolunteerFlow from "@/components/volunteers/VolunteerFlow";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Voluntariado | Igreja dos Vales",
  description:
    "Faça parte do time de voluntários da Igreja dos Vales e use seus dons para servir ao Reino de Deus",
};

export default function VoluntariosPage() {
  return <VolunteerFlow />;
}
