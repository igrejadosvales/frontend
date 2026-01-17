"use client";

import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { getCategoryDistribution } from "@/lib/mock-dashboard-data";

ChartJS.register(ArcElement, Tooltip, Legend);

const categoryColors = [
  "#8b5cf6", // Louvor - purple
  "#ec4899", // Crianças - pink
  "#3b82f6", // Jovens - blue
  "#f59e0b", // Mídia - orange
  "#10b981", // Recepção - green
  "#6366f1", // Outros - indigo
];

export default function CategoryDistributionChart() {
  const data = getCategoryDistribution();

  const chartData = {
    labels: data.map((item) => item.category),
    datasets: [
      {
        data: data.map((item) => item.count),
        backgroundColor: categoryColors,
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
          padding: 20,
          font: {
            size: 13,
            weight: 500,
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
        Distribuição por Categoria
      </h2>
      <div className="h-[350px] flex items-center justify-center">
        <Doughnut data={chartData} options={options} />
      </div>
    </div>
  );
}
