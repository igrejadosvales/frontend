"use client";

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { getNewAreaRequests } from "@/lib/mock-dashboard-data";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function NewAreaRequestsChart() {
  const data = getNewAreaRequests();

  const chartData = {
    labels: data.map((item) => item.area),
    datasets: [
      {
        label: "Solicitações",
        data: data.map((item) => item.count),
        backgroundColor: data.map((_, index) => {
          const colors = [
            "#ef4444",
            "#f59e0b",
            "#eab308",
            "#84cc16",
            "#22c55e",
          ];
          return colors[Math.min(index, colors.length - 1)];
        }),
        borderRadius: 8,
        barThickness: 40,
      },
    ],
  };

  const options: any = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        padding: 12,
        titleFont: {
          size: 14,
          weight: "bold" as const,
        },
        bodyFont: {
          size: 13,
        },
        borderColor: "rgba(255, 255, 255, 0.1)",
        borderWidth: 1,
        callbacks: {
          label: function (context: any) {
            return `Solicitações: ${context.parsed.y}`;
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: "rgba(0, 0, 0, 0.05)",
        },
        ticks: {
          font: {
            size: 12,
          },
          stepSize: 1,
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 12,
          },
        },
      },
    },
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-2">
        Solicitações de Novas Áreas
      </h2>
      <p className="text-sm text-gray-600 mb-6">
        Voluntários querendo servir em áreas adicionais
      </p>
      <div className="h-[300px]">
        <Bar data={chartData} options={options} />
      </div>
    </div>
  );
}
