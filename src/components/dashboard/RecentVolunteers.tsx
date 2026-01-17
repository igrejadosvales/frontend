"use client";

import { getRecentVolunteers } from "@/lib/mock-dashboard-data";
import { volunteerAreas } from "@/lib/mock-volunteers";

const statusColors = {
  active: "bg-green-100 text-green-700",
  pending: "bg-yellow-100 text-yellow-700",
  training: "bg-blue-100 text-blue-700",
};

const statusLabels = {
  active: "Ativo",
  pending: "Pendente",
  training: "Treinamento",
};

export default function RecentVolunteers() {
  const volunteers = getRecentVolunteers(10);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  const getAreaNames = (areaIds: string[]) => {
    return areaIds
      .map((id) => {
        const area = volunteerAreas.find((a) => a.id === id);
        return area ? area.name : id;
      })
      .join(", ");
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-6">
        Voluntários Recentes
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                Nome
              </th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                Áreas
              </th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                Data
              </th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {volunteers.map((volunteer) => (
              <tr
                key={volunteer.id}
                className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
              >
                <td className="py-4 px-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold text-sm">
                      {volunteer.name
                        .split(" ")
                        .map((n) => n[0])
                        .slice(0, 2)
                        .join("")}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">
                        {volunteer.name}
                      </p>
                      <p className="text-xs text-gray-500">{volunteer.email}</p>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <p className="text-sm text-gray-700 max-w-xs truncate">
                    {getAreaNames(volunteer.selectedAreas)}
                  </p>
                </td>
                <td className="py-4 px-4">
                  <p className="text-sm text-gray-600">
                    {formatDate(volunteer.registrationDate)}
                  </p>
                </td>
                <td className="py-4 px-4">
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${statusColors[volunteer.status]
                      }`}
                  >
                    {statusLabels[volunteer.status]}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
