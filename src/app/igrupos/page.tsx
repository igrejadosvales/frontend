import SmallGroupsSearch from "@/components/groups/SmallGroupsSearch"

export const metadata = {
  title: "Encontre um Pequeno Grupo - Igreja dos Vales",
  description: "Encontre um pequeno grupo perto de você e participe da nossa comunidade.",
}

export default function PequenosGruposPage() {
  return (
    <main className="w-full h-full bg-background">
      <SmallGroupsSearch />
    </main>
  )
}
