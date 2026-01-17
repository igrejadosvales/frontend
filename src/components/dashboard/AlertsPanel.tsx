"use client";

import { Bell, AlertCircle, TrendingUp, Users, UserPlus } from "lucide-react";
import { getDashboardStats, getNewAreaRequests } from "@/lib/mock-dashboard-data";

interface Alert {
  id: string;
  type: "info" | "warning" | "success";
  icon: any;
  title: string;
  message: string;
  timestamp: string;
}

export default function AlertsPanel() {
  const stats = getDashboardStats();
  const newAreaRequests = getNewAreaRequests();

  const generateAlerts = (): Alert[] => {
    const alerts: Alert[] = [];

    // Alert for high growth
    if (stats.monthlyGrowth > 10) {
      alerts.push({
        id: "growth-high",
        type: "success",
        icon: TrendingUp,
        title: "Crescimento Acelerado",
        message: `O número de voluntários cresceu ${stats.monthlyGrowth}% no último mês!`,
        timestamp: "Hoje",
      });
    }

    // Alert for pending volunteers
    if (stats.pendingVolunteers > 0) {
      alerts.push({
        id: "pending-volunteers",
        type: "warning",
        icon: Users,
        title: "Voluntários Pendentes",
        message: `Existem ${stats.pendingVolunteers} voluntários aguardando aprovação.`,
        timestamp: "Hoje",
      });
    }

    // Alert for new area requests
    if (stats.newAreaRequests > 5) {
      alerts.push({
        id: "new-area-requests",
        type: "info",
        icon: UserPlus,
        title: "Solicitações de Novas Áreas",
        message: `${stats.newAreaRequests} voluntários querem servir em áreas adicionais.`,
        timestamp: "Hoje",
      });
    }

    // Alert for popular area
    if (newAreaRequests.length > 0) {
      const topRequest = newAreaRequests[0];
      if (topRequest.count >= 3) {
        alerts.push({
          id: "popular-area",
          type: "info",
          icon: AlertCircle,
          title: "Área em Alta Demanda",
          message: `${topRequest.count} voluntários querem servir em ${topRequest.area}.`,
          timestamp: "Hoje",
        });
      }
    }

    // Alert for low growth
    if (stats.monthlyGrowth < 0) {
      alerts.push({
        id: "growth-low",
        type: "warning",
        icon: TrendingUp,
        title: "Atenção ao Crescimento",
        message: `O número de voluntários diminuiu ${Math.abs(stats.monthlyGrowth)}% no último mês.`,
        timestamp: "Hoje",
      });
    }

    return alerts;
  };

  const alerts = generateAlerts();

  const typeColors = {
    info: {
      bg: "bg-blue-50",
      border: "border-blue-200",
      icon: "text-blue-600",
      title: "text-blue-900",
    },
    warning: {
      bg: "bg-yellow-50",
      border: "border-yellow-200",
      icon: "text-yellow-600",
      title: "text-yellow-900",
    },
    success: {
      bg: "bg-green-50",
      border: "border-green-200",
      icon: "text-green-600",
      title: "text-green-900",
    },
  };

  if (alerts.length === 0) {
    return null;
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
      <div className="flex items-center gap-3 mb-4">
        <Bell className="w-5 h-5 text-gray-700" />
        <h2 className="text-lg font-bold text-gray-900">
          Alertas e Notificações
        </h2>
        <span className="px-3 py-1 bg-red-100 text-red-700 text-xs font-semibold rounded-full">
          {alerts.length}
        </span>
      </div>

      <div className="space-y-3">
        {alerts.map((alert) => {
          const colors = typeColors[alert.type];
          const Icon = alert.icon;

          return (
            <div
              key={alert.id}
              className={`${colors.bg} ${colors.border} border-l-4 p-4 rounded-lg transition-all hover:shadow-md`}
            >
              <div className="flex items-start gap-3">
                <div className={`${colors.icon} mt-0.5`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className={`font-semibold text-sm ${colors.title}`}>
                      {alert.title}
                    </h3>
                    <span className="text-xs text-gray-500">
                      {alert.timestamp}
                    </span>
                  </div>
                  <p className="text-sm text-gray-700">{alert.message}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
