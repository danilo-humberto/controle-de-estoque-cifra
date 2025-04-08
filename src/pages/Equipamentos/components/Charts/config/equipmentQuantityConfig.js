// src/pages/Equipamentos/configs/equipmentChartConfig.js

export const chartPizzaConfig = {
  visitors: { label: "Visitors" },
  Celular: { label: "Celular" },
  Notebooks: { label: "Notebooks" },
  Tablet: { label: "Tablet" },
  Impressora: { label: "Impressora" },
  Desktop: { label: "Desktop" },
  Acessórios: { label: "Acessórios" },
};

export const generatePieData = (filtrarEquipamento) => [
  {
    browser: "Celular",
    visitors: filtrarEquipamento("Celular"),
    fill: "#4169E1",
  },
  {
    browser: "Notebooks",
    visitors: filtrarEquipamento("Notebook"),
    fill: "#1E90FF",
  },
  {
    browser: "Tablet",
    visitors: filtrarEquipamento("Tablet"),
    fill: "#00BFFF",
  },
  {
    browser: "Impressora",
    visitors: filtrarEquipamento("Impressora"),
    fill: "#191970",
  },
  {
    browser: "Desktop",
    visitors: filtrarEquipamento("Desktop"),
    fill: "#6A5ACD",
  },
  {
    browser: "Acessórios",
    visitors: filtrarEquipamento("Acessórios"),
    fill: "#ADD8E6",
  },
];
