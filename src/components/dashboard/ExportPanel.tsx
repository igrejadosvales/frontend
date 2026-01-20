"use client";

import { Download, FileText, FileSpreadsheet } from "lucide-react";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import * as XLSX from "xlsx";
import {
  getVolunteersByArea,
  getCategoryDistribution,
  getRecentVolunteers,
  getDashboardStats,
} from "@/lib/mock-dashboard-data";

export default function ExportPanel() {
  const exportToPDF = () => {
    const doc = new jsPDF();
    const stats = getDashboardStats();
    const volunteersByArea = getVolunteersByArea();
    const categoryDistribution = getCategoryDistribution();
    const recentVolunteers = getRecentVolunteers(20);

    // Title
    doc.setFontSize(20);
    doc.text("Dashboard de Voluntários", 14, 20);

    // Date
    doc.setFontSize(10);
    doc.text(
      `Gerado em: ${new Date().toLocaleDateString("pt-BR")}`,
      14,
      28
    );

    // Statistics
    doc.setFontSize(14);
    doc.text("Estatísticas Gerais", 14, 40);

    const statsData = [
      ["Total de Voluntários", stats.totalVolunteers.toString()],
      ["Voluntários Ativos", stats.activeVolunteers.toString()],
      ["Voluntários Pendentes", stats.pendingVolunteers.toString()],
      ["Solicitações de Novas Áreas", stats.newAreaRequests.toString()],
      ["Crescimento Mensal", `${stats.monthlyGrowth}%`],
    ];

    autoTable(doc, {
      startY: 45,
      head: [["Métrica", "Valor"]],
      body: statsData,
      theme: "grid",
      headStyles: { fillColor: [59, 130, 246] },
    });

    // Volunteers by Area
    doc.setFontSize(14);
    const finalY1 = (doc as any).lastAutoTable.finalY || 45;
    doc.text("Voluntários por Área", 14, finalY1 + 15);

    const areaData = volunteersByArea.map((area) => [
      area.areaName,
      area.volunteerCount.toString(),
    ]);

    autoTable(doc, {
      startY: finalY1 + 20,
      head: [["Área", "Voluntários"]],
      body: areaData,
      theme: "grid",
      headStyles: { fillColor: [59, 130, 246] },
    });

    // Category Distribution
    doc.setFontSize(14);
    const finalY2 = (doc as any).lastAutoTable.finalY || finalY1 + 20;
    doc.text("Distribuição por Categoria", 14, finalY2 + 15);

    const categoryData = categoryDistribution.map((cat) => [
      cat.category,
      cat.count.toString(),
      `${cat.percentage}%`,
    ]);

    autoTable(doc, {
      startY: finalY2 + 20,
      head: [["Categoria", "Voluntários", "Percentual"]],
      body: categoryData,
      theme: "grid",
      headStyles: { fillColor: [59, 130, 246] },
    });

    // Recent Volunteers
    doc.addPage();
    doc.setFontSize(14);
    doc.text("Voluntários Recentes", 14, 20);

    const volunteersData = recentVolunteers.map((v) => [
      v.name,
      v.email,
      v.selectedAreas.join(", "),
      new Date(v.registrationDate).toLocaleDateString("pt-BR"),
      v.status === "active"
        ? "Ativo"
        : v.status === "pending"
          ? "Pendente"
          : "Treinamento",
    ]);

    autoTable(doc, {
      startY: 25,
      head: [["Nome", "Email", "Áreas", "Data", "Status"]],
      body: volunteersData,
      theme: "grid",
      headStyles: { fillColor: [59, 130, 246] },
      styles: { fontSize: 8 },
    });

    // Save PDF
    doc.save(`dashboard-voluntarios-${new Date().toISOString().split("T")[0]}.pdf`);
  };

  const exportToExcel = () => {
    const stats = getDashboardStats();
    const volunteersByArea = getVolunteersByArea();
    const categoryDistribution = getCategoryDistribution();
    const recentVolunteers = getRecentVolunteers(50);

    // Create workbook
    const wb = XLSX.utils.book_new();

    // Statistics Sheet
    const statsData = [
      ["Métrica", "Valor"],
      ["Total de Voluntários", stats.totalVolunteers],
      ["Voluntários Ativos", stats.activeVolunteers],
      ["Voluntários Pendentes", stats.pendingVolunteers],
      ["Solicitações de Novas Áreas", stats.newAreaRequests],
      ["Crescimento Mensal", `${stats.monthlyGrowth}%`],
    ];
    const statsSheet = XLSX.utils.aoa_to_sheet(statsData);
    XLSX.utils.book_append_sheet(wb, statsSheet, "Estatísticas");

    // Volunteers by Area Sheet
    const areaData = [
      ["Área", "Voluntários", "Categoria"],
      ...volunteersByArea.map((area) => [
        area.areaName,
        area.volunteerCount,
        area.category,
      ]),
    ];
    const areaSheet = XLSX.utils.aoa_to_sheet(areaData);
    XLSX.utils.book_append_sheet(wb, areaSheet, "Por Área");

    // Category Distribution Sheet
    const categoryData = [
      ["Categoria", "Voluntários", "Percentual"],
      ...categoryDistribution.map((cat) => [
        cat.category,
        cat.count,
        `${cat.percentage}%`,
      ]),
    ];
    const categorySheet = XLSX.utils.aoa_to_sheet(categoryData);
    XLSX.utils.book_append_sheet(wb, categorySheet, "Por Categoria");

    // Recent Volunteers Sheet
    const volunteersData = [
      ["Nome", "Email", "Áreas", "Data de Registro", "Status", "Quer Nova Área"],
      ...recentVolunteers.map((v) => [
        v.name,
        v.email,
        v.selectedAreas.join(", "),
        new Date(v.registrationDate).toLocaleDateString("pt-BR"),
        v.status === "active"
          ? "Ativo"
          : v.status === "pending"
            ? "Pendente"
            : "Treinamento",
        v.wantsNewArea ? "Sim" : "Não",
      ]),
    ];
    const volunteersSheet = XLSX.utils.aoa_to_sheet(volunteersData);
    XLSX.utils.book_append_sheet(wb, volunteersSheet, "Voluntários");

    // Save Excel
    XLSX.writeFile(
      wb,
      `dashboard-voluntarios-${new Date().toISOString().split("T")[0]}.xlsx`
    );
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Download className="w-5 h-5 text-gray-700" />
          <div>
            <h2 className="text-lg font-bold text-gray-900">
              Exportar Dados
            </h2>
            <p className="text-sm text-gray-600">
              Baixe os dados do dashboard em diferentes formatos
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={exportToPDF}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-lg transition-colors shadow-md hover:shadow-lg"
          >
            <FileText className="w-4 h-4" />
            Exportar PDF
          </button>
          <button
            onClick={exportToExcel}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-green-600 hover:bg-green-700 rounded-lg transition-colors shadow-md hover:shadow-lg"
          >
            <FileSpreadsheet className="w-4 h-4" />
            Exportar Excel
          </button>
        </div>
      </div>
    </div>
  );
}
