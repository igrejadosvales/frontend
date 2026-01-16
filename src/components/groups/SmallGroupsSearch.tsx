"use client"

import { useState, useMemo } from "react"
import dynamic from "next/dynamic"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { SMALL_GROUPS, SmallGroup } from "@/lib/mock-pgs"
import { cn } from "@/lib/utils"

// Dynamically import the map component to avoid SSR issues with Leaflet
const GroupMap = dynamic(() => import("@/components/groups/GroupMap"), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full bg-muted flex items-center justify-center">
      <p className="text-muted-foreground">Carregando mapa...</p>
    </div>
  ),
})

const DAYS = ["Todos", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"]

export default function SmallGroupsSearch() {
  const [search, setSearch] = useState("")
  const [selectedDay, setSelectedDay] = useState("Todos")
  const [selectedGroup, setSelectedGroup] = useState<SmallGroup | null>(null)

  const filteredGroups = useMemo(() => {
    return SMALL_GROUPS.filter((group) => {
      const matchesSearch = 
        group.name.toLowerCase().includes(search.toLowerCase()) ||
        group.neighborhood.toLowerCase().includes(search.toLowerCase()) ||
        group.leader.toLowerCase().includes(search.toLowerCase())
      
      const matchesDay = selectedDay === "Todos" || group.day === selectedDay

      return matchesSearch && matchesDay
    })
  }, [search, selectedDay])

  return (
    <div className="flex flex-col md:flex-row h-[calc(100vh-64px)] overflow-hidden">
      {/* Sidebar */}
      <div className="w-full md:w-96 border-r bg-background flex flex-col h-full z-10">
        <div className="p-4 border-b space-y-4">
          <h2 className="text-xl font-bold">Pequenos Grupos</h2>
          
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar por nome ou bairro..."
              className="pl-8"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {DAYS.map((day) => (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={cn(
                  "px-3 py-1 rounded-full text-xs font-medium border transition-colors",
                  selectedDay === day
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-background hover:bg-muted"
                )}
              >
                {day}
              </button>
            ))}
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          {filteredGroups.length > 0 ? (
            <div className="divide-y">
              {filteredGroups.map((group) => (
                <div
                  key={group.id}
                  className={cn(
                    "p-4 cursor-pointer transition-colors hover:bg-muted/50",
                    selectedGroup?.id === group.id && "bg-muted"
                  )}
                  onClick={() => setSelectedGroup(group)}
                >
                  <h3 className="font-semibold">{group.name}</h3>
                  <p className="text-sm text-muted-foreground">{group.neighborhood}</p>
                  <div className="mt-2 flex items-center justify-between text-xs">
                    <span className="text-primary font-medium">{group.day} às {group.time}</span>
                    <span className="text-muted-foreground">Líder: {group.leader}</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-8 text-center text-muted-foreground">
              Nenhum grupo encontrado com esses filtros.
            </div>
          )}
        </div>
      </div>

      {/* Map Area */}
      <div className="flex-1 h-full relative">
        <GroupMap groups={filteredGroups} selectedGroup={selectedGroup} />
      </div>
    </div>
  )
}
