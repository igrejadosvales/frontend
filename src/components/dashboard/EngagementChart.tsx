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
import { mockVolunteerRegistrations } from "@/lib/mock-dashboard-data";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function EngagementChart() {
  // Calculate volunteers by number of areas they serve
  const engagementData = mockVolunteerRegistrations.reduce(
    (acc, volunteer) => {
      const areaCount = volunteer.selectedAreas.length;
      if (areaCount === 1) acc.single++;
      else if (areaCount === 2) acc.double++;
      else if (areaCount >= 3) acc.multiple++;
      return acc;
    },
    { single: 0, double: 0, multiple: 0 }
  );

  const chartData = {
    labels: ["1 Área", "2 Áreas", "3+ Áreas"],
    datasets: [
      {
        label: "Voluntários",
        data: [engagementData.single, engagementData.double, engagementData.multiple],
        backgroundColor: ["#60a5fa", "#3b82f6", "#2563eb"],
        borderRadius: 8,
        barThickness: 60,
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
          weight: "bold",
        },
        bodyFont: {
          size: 13,
        },
        borderColor: "rgba(255, 255, 255, 0.1)",
        borderWidth: 1,
        callbacks: {
          label: function (context: any) {
            const total = context.dataset.data.reduce(
              (a: number, b: number) => a + b,
              0
            );
            const percentage = ((context.parsed.y / total) * 100).toFixed(1);
            return `${context.parsed.y} voluntários (${percentage}%)`;
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
        Nível de Engajamento
      </h2>
      <p className="text-sm text-gray-600 mb-6">
        Quantidade de áreas em que cada voluntário serve
      </p>
      <div className="h-[300px]">
        <Bar data={chartData} options={options} />
      </div>
    </div>
  );
}
