import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { toast } from "react-toastify";
// Premium iconlar
import {
  MdDashboard,
  MdAnalytics,
  MdDirectionsBus,
  MdBuild,
  MdAssessment,
  MdLocationCity,
  MdEmergency,
  MdHistory,
  MdSettings,
  MdBusiness,
  MdCategory,
  MdDeleteOutline,
  MdCorporateFare,
  MdAccessTime,
  MdPerson,
  MdWater,
  MdElectricBolt,
  MdLocalFireDepartment,
  MdLocalGasStation,
  MdLogout,
} from "react-icons/md";
import { useLanguage } from "../context/LanguageContext";
import { useAuth } from "../context/AuthContext";
import { getCurrentTime } from "../utils";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const { t, currentLanguage, changeLanguage } = useLanguage();
  const location = useLocation();
  const [currentTime, setCurrentTime] = useState(getCurrentTime());

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const navigationItems = [
    {
      path: "/",
      icon: MdDashboard,
      label: "Hudud",
      subLabel: "Asosiy dashboard",
    },
    {
      path: "/chust-map",
      icon: MdAnalytics,
      label: "Chiqindi qutlari lozalash - grafigi",
      subLabel: "Statistika va hisobotlar",
    },
    {
      path: "/calls-monitoring",
      icon: MdDirectionsBus,
      label: "Chaqiruv yozib olish",
      subLabel: "Transport monitoring",
    },
    {
      path: "/utilities",
      icon: MdBuild,
      label: "Kommunal chaqiruvlar",
      subLabel: "Kommunal xizmatlar",
    },
    {
      path: "/reports",
      icon: MdAssessment,
      label: "Nazorat 24",
      subLabel: "Hisobotlar",
    },
    {
      path: "/services",
      icon: MdLocationCity,
      label: "Shahar Passporti",
      subLabel: "Xizmatlar",
    },
    {
      path: "/statistics",
      icon: MdAnalytics,
      label: "Chust aqlli tizim",
      subLabel: "Chust xarita tizimi",
    },
    {
      path: "/emergency",
      icon: MdEmergency,
      label: "Hududlar taqsimoti",
      subLabel: "Favqulodda vaziyatlar",
    },
    {
      path: "/history",
      icon: MdHistory,
      label: "Hisobobatlar",
      subLabel: "Tarix",
    },
  ];

  const bottomMenuItems = [
    {
      path: "/users",
      icon: MdSettings,
      label: "Sozlamalar",
      subLabel: "Foydalanuvchilar",
    },
    {
      path: "/buildings",
      icon: MdBusiness,
      label: "Tashkilotlar",
      subLabel: "Binolar",
    },
    {
      path: "/objects",
      icon: MdCategory,
      label: "Obyekt turi",
      subLabel: "Obyektlar",
    },
    {
      path: "/trash",
      icon: MdDeleteOutline,
      label: "Chaqiruv turi",
      subLabel: "Chiqindilar",
    },
    {
      path: "/organizations",
      icon: MdCorporateFare,
      label: "Tashkilotlar",
      subLabel: "Korxonalar",
    },
  ];

  // Available pages that have content
  const availablePages = [
    "/",
    "/statistics",
    "/utilities",
    "/chust-map",
    "/calls-monitoring",
  ];

  const handleNavClick = (path, e) => {
    if (!availablePages.includes(path)) {
      e.preventDefault();
      toast.warning(
        "⚠️ Bu bo'lim hali ishlab chiqilmoqda. Texnik jarayonda...",
        {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        }
      );
      return;
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 lg:hidden z-40"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <div
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } fixed left-0 top-0 h-screen w-80 bg-white text-slate-900 z-50 lg:translate-x-0 lg:fixed lg:block overflow-y-auto transition-transform duration-300 shadow-xl border-r border-slate-200`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-slate-200">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
              <MdLocationCity className="text-white text-xl" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-blue-600">
                Chust aqlli shahar
              </h1>
              <p className="text-xs text-slate-600">Smart City</p>
            </div>
          </div>

          {/* Mobile close button */}
          <button
            onClick={() => setIsOpen(false)}
            className="lg:hidden p-2 rounded-lg hover:bg-slate-100 text-slate-600"
          >
            <XMarkIcon className="w-6 h-6" />
          </button>
        </div>

        {/* User info */}
        <div className="p-4 border-b border-slate-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <MdPerson className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-900">AiTech</p>
                <p className="text-xs text-slate-600">Super Admin</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs text-slate-600">02.07.2025</p>
              <p className="text-xs text-slate-700">{currentTime}</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto">
          <nav className="p-2 space-y-1">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={(e) => handleNavClick(item.path, e)}
                  className={`flex items-center space-x-3 px-3 py-3 rounded-lg text-sm transition-colors ${
                    isActive
                      ? "bg-blue-600 text-white shadow-sm"
                      : "text-slate-700 hover:text-slate-900 hover:bg-blue-50"
                  }`}
                >
                  <Icon className="w-5 h-5 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="font-medium truncate">{item.label}</p>
                    <p
                      className={`text-xs truncate ${
                        isActive ? "text-blue-100" : "text-slate-500"
                      }`}
                    >
                      {item.subLabel}
                    </p>
                  </div>
                </Link>
              );
            })}
          </nav>

          {/* Bottom menu */}
          <div className="mt-8 border-t border-slate-200 pt-4">
            <nav className="p-2 space-y-1">
              {bottomMenuItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;

                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={(e) => handleNavClick(item.path, e)}
                    className={`flex items-center space-x-3 px-3 py-3 rounded-lg text-sm transition-colors ${
                      isActive
                        ? "bg-blue-600 text-white shadow-sm"
                        : "text-slate-700 hover:text-slate-900 hover:bg-blue-50"
                    }`}
                  >
                    <Icon className="w-5 h-5 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="font-medium truncate">{item.label}</p>
                      <p className="text-xs text-slate-500 truncate">
                        {item.subLabel}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Language switcher */}
        <div className="p-4 border-t border-slate-200">
          <div className="flex bg-blue-50 rounded-lg p-1">
            <button
              onClick={() => changeLanguage("uz")}
              className={`flex-1 px-3 py-2 text-sm font-medium rounded transition-colors ${
                currentLanguage === "uz"
                  ? "bg-blue-600 text-white shadow-sm"
                  : "text-blue-700 hover:text-blue-900 hover:bg-blue-100"
              }`}
            >
              O'zbek
            </button>
            <button
              onClick={() => changeLanguage("ru")}
              className={`flex-1 px-3 py-2 text-sm font-medium rounded transition-colors ${
                currentLanguage === "ru"
                  ? "bg-blue-600 text-white shadow-sm"
                  : "text-blue-700 hover:text-blue-900 hover:bg-blue-100"
              }`}
            >
              Русский
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
