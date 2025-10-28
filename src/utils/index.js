import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function formatNumber(num) {
  return new Intl.NumberFormat("uz-UZ").format(num);
}

export function formatDate(date) {
  return new Intl.DateTimeFormat("uz-UZ", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(date));
}

export function getCurrentTime() {
  return new Date().toLocaleTimeString("uz-UZ", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
}

export function getStatusColor(status) {
  switch (status) {
    case "active":
      return "status-success";
    case "maintenance":
      return "status-warning";
    case "inactive":
      return "status-danger";
    default:
      return "status-success";
  }
}

export function getStatusText(status, language = "uz") {
  const statusTexts = {
    uz: {
      active: "Faol",
      maintenance: "Ta'mirlash",
      inactive: "Nofaol",
    },
    ru: {
      active: "Активно",
      maintenance: "Обслуживание",
      inactive: "Неактивно",
    },
  };

  return statusTexts[language][status] || status;
}
