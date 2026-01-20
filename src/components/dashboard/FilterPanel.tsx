"use client";

import { useState } from "react";
import { Filter, X } from "lucide-react";
import { volunteerAreas } from "@/lib/mock-volunteers";

export interface DashboardFilters {
  dateRange: "all" | "week" | "month" | "quarter" | "year";
  areas: string[];
  status: ("active" | "pending" | "training")[];
}

interface FilterPanelProps {
  filters: DashboardFilters;
  onFiltersChange: (filters: DashboardFilters) => void;
}

export default function FilterPanel({
  filters,
  onFiltersChange,
}: FilterPanelProps) {
  const [isOpen, setIsOpen] = useState(false);

  const dateRanges = [
    { value: "all", label: "Todos os períodos" },
    { value: "week", label: "Última semana" },
    { value: "month", label: "Último mês" },
    { value: "quarter", label: "Último trimestre" },
    { value: "year", label: "Último ano" },
  ];

  const statuses = [
    { value: "active", label: "Ativo" },
    { value: "pending", label: "Pendente" },
    { value: "training", label: "Treinamento" },
  ];

  const handleDateRangeChange = (value: string) => {
    onFiltersChange({
      ...filters,
      dateRange: value as DashboardFilters["dateRange"],
    });
  };

  const handleAreaToggle = (areaId: string) => {
    const newAreas = filters.areas.includes(areaId)
      ? filters.areas.filter((id) => id !== areaId)
      : [...filters.areas, areaId];
    onFiltersChange({ ...filters, areas: newAreas });
  };

  const handleStatusToggle = (status: "active" | "pending" | "training") => {
    const newStatus = filters.status.includes(status)
      ? filters.status.filter((s) => s !== status)
      : [...filters.status, status];
    onFiltersChange({ ...filters, status: newStatus });
  };

  const clearFilters = () => {
    onFiltersChange({
      dateRange: "all",
      areas: [],
      status: [],
    });
  };

  const hasActiveFilters =
    filters.dateRange !== "all" ||
    filters.areas.length > 0 ||
    filters.status.length > 0;

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <Filter className="w-5 h-5 text-gray-700" />
          <h2 className="text-lg font-bold text-gray-900">Filtros</h2>
          {hasActiveFilters && (
            <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
              Ativos
            </span>
          )}
        </div>
        <div className="flex items-center gap-2">
          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="w-4 h-4" />
              Limpar
            </button>
          )}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
          >
            {isOpen ? "Ocultar" : "Mostrar"} Filtros
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-gray-200">
          {/* Date Range Filter */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Período
            </label>
            <div className="space-y-2">
              {dateRanges.map((range) => (
                <label
                  key={range.value}
                  className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors"
                >
                  <input
                    type="radio"
                    name="dateRange"
                    value={range.value}
                    checked={filters.dateRange === range.value}
                    onChange={(e) => handleDateRangeChange(e.target.value)}
                    className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-700">{range.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Areas Filter */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Áreas ({filters.areas.length} selecionadas)
            </label>
            <div className="space-y-2 max-h-60 overflow-y-auto">
              {volunteerAreas.map((area) => (
                <label
                  key={area.id}
                  className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors"
                >
                  <input
                    type="checkbox"
                    checked={filters.areas.includes(area.id)}
                    onChange={() => handleAreaToggle(area.id)}
                    className="w-4 h-4 text-blue-600 focus:ring-blue-500 rounded"
                  />
                  <span className="text-sm text-gray-700">
                    {area.icon} {area.name}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Status Filter */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Status ({filters.status.length} selecionados)
            </label>
            <div className="space-y-2">
              {statuses.map((status) => (
                <label
                  key={status.value}
                  className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors"
                >
                  <input
                    type="checkbox"
                    checked={filters.status.includes(
                      status.value as "active" | "pending" | "training"
                    )}
                    onChange={() =>
                      handleStatusToggle(
                        status.value as "active" | "pending" | "training"
                      )
                    }
                    className="w-4 h-4 text-blue-600 focus:ring-blue-500 rounded"
                  />
                  <span className="text-sm text-gray-700">{status.label}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
