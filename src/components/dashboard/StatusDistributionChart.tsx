"use client";

import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { mockVolunteerRegistrations } from "@/lib/mock-dashboard-data";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function StatusDistributionChart() {
  const statusCounts = {
    active: mockVolunteerRegistrations.filter((v) => v.status === "active")
      .length,
    pending: mockVolunteerRegistrations.filter((v) => v.status === "pending")
      .length,
    training: mockVolunteerRegistrations.filter((v) => v.status === "training")
      .length,
  };

  const chartData = {
    labels: ["Ativos", "Pendentes", "Em Treinamento"],
    datasets: [
      {
        data: [statusCounts.active, statusCounts.pending, statusCounts.training],
        backgroundColor: ["#10b981", "#f59e0b", "#3b82f6"],
        borderColor: "#ffffff",
        borderWidth: 3,
        hoverOffset: 10,
      },
    ],
  };

  const options: any = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom" as const,
        labels: {
          padding: 15,
          font: {
            size: 12,
          },
          usePointStyle: true,
          pointStyle: "circle",
        },
      },
      tooltip: {
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        padding: 12,
        titleFont: {
          size: 14,
          weight: "bold",
        },
        bodyFont: {
          size: 13,
        },
        borderColor: "rgba(255, 255, 255, 0.1)",
        borderWidth: 1,
        callbacks: {
          label: function (context: any) {
            const label = context.label || "";
            const value = context.parsed || 0;
            const total = context.dataset.data.reduce(
              (a: number, b: number) => a + b,
              0
            );
            const percentage = ((value / total) * 100).toFixed(1);
            return `${label}: ${value} (${percentage}%)`;
          },
        },
      },
    },
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-6">
        Distribuição por Status
      </h2>
      <div className="h-[300px] flex items-center justify-center">
        <Pie data={chartData} options={options} />
      </div>
    </div>
  );
}
