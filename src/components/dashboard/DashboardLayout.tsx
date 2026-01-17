"use client";

import { useState } from "react";
import { Users, UserCheck, UserPlus, TrendingUp, RefreshCw } from "lucide-react";
import StatsCard from "./StatsCard";
import VolunteersByAreaChart from "./VolunteersByAreaChart";
import CategoryDistributionChart from "./CategoryDistributionChart";
import VolunteerGrowthChart from "./VolunteerGrowthChart";
import NewAreaRequestsChart from "./NewAreaRequestsChart";
import RecentVolunteers from "./RecentVolunteers";
import StatusDistributionChart from "./StatusDistributionChart";
import EngagementChart from "./EngagementChart";
import FilterPanel, { DashboardFilters } from "./FilterPanel";
import ExportPanel from "./ExportPanel";
import AlertsPanel from "./AlertsPanel";
import MobileNav from "./MobileNav";
import LoadingIndicator from "./LoadingIndicator";
import { getDashboardStats } from "@/lib/mock-dashboard-data";
import { useAutoRefresh } from "@/hooks/useAutoRefresh";

export default function DashboardLayout() {
  const stats = getDashboardStats();
  const { lastUpdate, isRefreshing, manualRefresh } = useAutoRefresh(60000); // Auto-refresh every 60 seconds

  const [filters, setFilters] = useState<DashboardFilters>({
    dateRange: "all",
    areas: [],
    status: [],
  });

  const formatLastUpdate = (date: Date) => {
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffSecs = Math.floor(diffMs / 1000);
    const diffMins = Math.floor(diffSecs / 60);

    if (diffSecs < 60) return "Agora mesmo";
    if (diffMins === 1) return "1 minuto atrás";
    if (diffMins < 60) return `${diffMins} minutos atrás`;

    return date.toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100">
      {/* Loading Indicator */}
      <LoadingIndicator isLoading={isRefreshing} />

      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Dashboard de Voluntários
              </h1>
              <p className="text-gray-600 mt-2">
                Acompanhe as estatísticas e métricas do voluntariado em tempo real
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-sm text-gray-500">Última atualização</p>
                <p className="text-sm font-semibold text-gray-900">
                  {formatLastUpdate(lastUpdate)}
                </p>
              </div>
              <button
                onClick={manualRefresh}
                disabled={isRefreshing}
                className={`flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-all shadow-md hover:shadow-lg ${isRefreshing ? "opacity-50 cursor-not-allowed" : ""
                  }`}
              >
                <RefreshCw
                  className={`w-4 h-4 ${isRefreshing ? "animate-spin" : ""}`}
                />
                Atualizar
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Export Panel */}
        <ExportPanel />

        {/* Alerts Panel */}
        <AlertsPanel />

        {/* Filter Panel */}
        <FilterPanel filters={filters} onFiltersChange={setFilters} />

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatsCard
            title="Total de Voluntários"
            value={stats.totalVolunteers}
            icon={Users}
            color="blue"
          />
          <StatsCard
            title="Voluntários Ativos"
            value={stats.activeVolunteers}
            icon={UserCheck}
            color="green"
          />
          <StatsCard
            title="Solicitações de Novas Áreas"
            value={stats.newAreaRequests}
            icon={UserPlus}
            color="purple"
          />
          <StatsCard
            title="Crescimento Mensal"
            value={`${stats.monthlyGrowth > 0 ? "+" : ""}${stats.monthlyGrowth}%`}
            icon={TrendingUp}
            trend={{
              value: stats.monthlyGrowth,
              isPositive: stats.monthlyGrowth >= 0,
            }}
            color="orange"
          />
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Volunteers by Area */}
          <div className="lg:col-span-2">
            <VolunteersByAreaChart />
          </div>

          {/* Category Distribution */}
          <CategoryDistributionChart />

          {/* Status Distribution */}
          <StatusDistributionChart />

          {/* Volunteer Growth */}
          <VolunteerGrowthChart />

          {/* Engagement Chart */}
          <EngagementChart />

          {/* New Area Requests */}
          <div className="lg:col-span-2">
            <NewAreaRequestsChart />
          </div>
        </div>

        {/* Recent Volunteers Table */}
        <div className="mb-8">
          <RecentVolunteers />
        </div>
      </div>

      {/* Mobile Navigation */}
      <MobileNav />
    </div>
  );
}
