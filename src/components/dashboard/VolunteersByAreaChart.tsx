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
import { getVolunteersByArea } from "@/lib/mock-dashboard-data";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const categoryColors: Record<string, string> = {
  louvor: "#8b5cf6",
  criancas: "#ec4899",
  jovens: "#3b82f6",
  midia: "#f59e0b",
  recepcao: "#10b981",
  outros: "#6366f1",
};

export default function VolunteersByAreaChart() {
  const data = getVolunteersByArea();

  const chartData = {
    labels: data.map((item) => item.areaName),
    datasets: [
      {
        label: "Voluntários",
        data: data.map((item) => item.volunteerCount),
        backgroundColor: data.map(
          (item) => categoryColors[item.category] || "#6366f1"
        ),
        borderRadius: 8,
        barThickness: 30,
      },
    ],
  };

  const options: any = {
    indexAxis: "y" as const,
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
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
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        grid: {
          color: "rgba(0, 0, 0, 0.05)",
        },
        ticks: {
          font: {
            size: 12,
          },
        },
      },
      y: {
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
      <h2 className="text-xl font-bold text-gray-900 mb-6">
        Voluntários por Área
      </h2>
      <div className="h-[400px]">
        <Bar data={chartData} options={options} />
      </div>
    </div>
  );
}
