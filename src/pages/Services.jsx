import React, { useState } from "react";
import { motion } from "framer-motion";
import Card from "../components/Card";
import StatCard from "../components/StatCard";
import { useLanguage } from "../context/LanguageContext";
import { getStatusColor, getStatusText } from "../utils";
import servicesData from "../data/services.json";
// Premium iconlar
import {
  MdBuild,
  MdCheckCircle,
  MdWarning,
  MdSearch,
  MdDirectionsBus,
  MdLightbulb,
  MdSecurity,
  MdPhone,
  MdMedicalServices,
  MdSchool,
  MdPark,
  MdLocalGasStation,
  MdWifi,
} from "react-icons/md";

const Services = () => {
  const { t, currentLanguage } = useLanguage();
  const [filter, setFilter] = useState("all");

  const services = servicesData.services;

  const filteredServices = services.filter((service) => {
    if (filter === "all") return true;
    return service.status === filter;
  });

  const getServiceIcon = (iconString) => {
    const iconMap = {
      MdDirectionsBus: <MdDirectionsBus className="w-6 h-6 text-white" />,
      MdLightbulb: <MdLightbulb className="w-6 h-6 text-white" />,
      MdSecurity: <MdSecurity className="w-6 h-6 text-white" />,
      MdPhone: <MdPhone className="w-6 h-6 text-white" />,
      MdMedicalServices: <MdMedicalServices className="w-6 h-6 text-white" />,
      MdSchool: <MdSchool className="w-6 h-6 text-white" />,
      MdPark: <MdPark className="w-6 h-6 text-white" />,
      MdLocalGasStation: <MdLocalGasStation className="w-6 h-6 text-white" />,
      MdWifi: <MdWifi className="w-6 h-6 text-white" />,
      MdBuild: <MdBuild className="w-6 h-6 text-white" />,
    };
    return iconMap[iconString] || <MdBuild className="w-6 h-6 text-white" />;
  };

  const filterOptions = [
    { value: "all", label: t("services.allServices"), count: services.length },
    {
      value: "active",
      label: t("services.activeServices"),
      count: services.filter((s) => s.status === "active").length,
    },
    {
      value: "maintenance",
      label: t("services.maintenanceServices"),
      count: services.filter((s) => s.status === "maintenance").length,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 relative">
      {/* Simple Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-green-500/10"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl font-bold mb-4">{t("services.title")}</h1>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                Zamonaviy texnologiyalar yordamida shahar xizmatlarini
                boshqarish va monitoring qilish
              </p>
            </motion.div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Service Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {filterOptions.map((option, index) => (
              <motion.div
                key={option.value}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <StatCard
                  title={option.label}
                  value={option.count}
                  icon={
                    option.value === "all"
                      ? MdBuild
                      : option.value === "active"
                      ? MdCheckCircle
                      : MdWarning
                  }
                  className={
                    option.value === filter ? "ring-2 ring-primary-500" : ""
                  }
                  onClick={() => setFilter(option.value)}
                  hover={true}
                />
              </motion.div>
            ))}
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-2 mb-8">
            {filterOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => setFilter(option.value)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  filter === option.value
                    ? "bg-blue-600 text-white"
                    : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                {option.label} ({option.count})
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center text-2xl">
                      {getServiceIcon(service.icon)}
                    </div>
                    <span
                      className={`status-indicator ${getStatusColor(
                        service.status
                      )}`}
                    >
                      {getStatusText(service.status, currentLanguage)}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-slate-900 mb-3">
                    {service.title[currentLanguage]}
                  </h3>

                  <p className="text-slate-600 mb-6 flex-grow">
                    {service.description[currentLanguage]}
                  </p>

                  {/* Service Stats */}
                  <div className="border-t border-slate-200 pt-4 space-y-3">
                    {Object.entries(service.stats).map(([key, value]) => (
                      <div
                        key={key}
                        className="flex justify-between items-center"
                      >
                        <span className="text-sm text-slate-600 capitalize">
                          {key === "vehicles" && "Transport vositalari"}
                          {key === "routes" && "Yo'nalishlar"}
                          {key === "coverage" && "Qamrov"}
                          {key === "lights" && "Chiroqlar"}
                          {key === "energySaved" && "Tejangan energiya"}
                          {key === "cameras" && "Kameralar"}
                          {key === "incidents" && "Hodisalar"}
                          {key === "waterLines" && "Suv liniyalari"}
                          {key === "gasLines" && "Gaz liniyalari"}
                          {key === "powerLines" && "Elektr liniyalari"}
                          {key === "requests" && "Murojaatlar"}
                          {key === "processed" && "Qayta ishlangan"}
                          {key === "satisfaction" && "Qoniqish darajasi"}
                        </span>
                        <span className="font-semibold text-slate-900">
                          {value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Action Button */}
                  <div className="mt-6">
                    <button
                      className={`w-full py-2 px-4 rounded-lg font-medium transition-colors ${
                        service.status === "active"
                          ? "bg-blue-600 hover:bg-blue-700 text-white"
                          : "bg-slate-200 text-slate-600 cursor-not-allowed"
                      }`}
                      disabled={service.status !== "active"}
                    >
                      {service.status === "active"
                        ? "Batafsil ko'rish"
                        : "Ta'mirda"}
                    </button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Empty State */}
          {filteredServices.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-6xl mb-4">
                <MdSearch className="mx-auto text-slate-400" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Xizmatlar topilmadi
              </h3>
              <p className="text-slate-600">
                Tanlangan filtr bo'yicha xizmatlar mavjud emas
              </p>
            </motion.div>
          )}

          {/* Service Status Legend */}
          <div className="mt-12 bg-white rounded-xl p-6 border border-slate-200">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">
              Xizmat holatlari haqida ma'lumot
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center space-x-3">
                <span className="status-indicator status-success">Faol</span>
                <p className="text-sm text-slate-600">
                  Xizmat to'liq ishlamoqda va foydalanish mumkin
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <span className="status-indicator status-warning">
                  Ta'mirlash
                </span>
                <p className="text-sm text-slate-600">
                  Xizmat vaqtincha ta'mirlash jarayonida
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <span className="status-indicator status-danger">Nofaol</span>
                <p className="text-sm text-slate-600">
                  Xizmat vaqtincha ishlamayapti
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
