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
  MdPark,
  MdCleaningServices,
  MdExpandMore,
  MdExpandLess,
  MdApps,
} from "react-icons/md";
import { useLanguage } from "../context/LanguageContext";
import { useAuth } from "../context/AuthContext";
import { getCurrentTime } from "../utils";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const { t, currentLanguage, changeLanguage } = useLanguage();
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [currentTime, setCurrentTime] = useState(getCurrentTime());
  const [modulesDropdownOpen, setModulesDropdownOpen] = useState(false);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleLogout = () => {
    logout();
    toast.success("Tizimdan muvaffaqiyatli chiqdingiz");
    navigate("/login");
  };

  const dashboardModules = [
    {
      path: "/modules/drinking-water",
      icon: MdWater,
      label: "Ichimlik suvi",
      subLabel: "Suv ta'minoti monitoring",
    },
    {
      path: "/modules/heating-system",
      icon: MdLocalFireDepartment,
      label: "Issiqlik manbai",
      subLabel: "Issiqlik ta'minoti tizimi",
    },
    {
      path: "/modules/gas-system",
      icon: MdLocalGasStation,
      label: "Gaz ta'minoti",
      subLabel: "Gaz tizimi monitoring",
    },
    {
      path: "/modules/electric-network",
      icon: MdElectricBolt,
      label: "Elektroset",
      subLabel: "Elektr tarmoqlari",
    },
    {
      path: "/modules/emergency",
      icon: MdEmergency,
      label: "Favqulodda vaziyatlar",
      subLabel: "Favqulodda holat boshqaruvi",
    },
    {
      path: "/modules/education",
      icon: MdBusiness,
      label: "XTB va MTB",
      subLabel: "Ta'lim tizimi monitoring",
    },
    {
      path: "/modules/urban-development",
      icon: MdPark,
      label: "Obodonlashtirish",
      subLabel: "Shahar tozaligi va ko'kalamzor",
    },
    {
      path: "/modules/clean-area",
      icon: MdCleaningServices,
      label: "Toza hudud",
      subLabel: "Chiqindi yig'ish tizimi",
    },
    {
      path: "/modules/transport",
      icon: MdDirectionsBus,
      label: "Transport",
      subLabel: "Jamoat transporti monitoring",
    },
    {
      path: "/modules/bsk",
      icon: MdLocationCity,
      label: "BSK",
      subLabel: "Sanitariya nazorati",
    },
    {
      path: "/modules/health",
      icon: MdEmergency,
      label: "SSB",
      subLabel: "Sog'liqni saqlash",
    },
    {
      path: "/modules/road-management",
      icon: MdBuild,
      label: "Yo'l boshqaruvi",
      subLabel: "Yo'llar va infratuzilma",
    },
    {
      path: "/modules/landscaping",
      icon: MdPark,
      label: "Ko'kalamzorlashtirish",
      subLabel: "Bog'lar va yashil maydonlar",
    },
  ];

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
    // Dashboard modules
    "/modules/drinking-water",
    "/modules/heating-system",
    "/modules/gas-system",
    "/modules/electric-network",
    "/modules/emergency",
    "/modules/education",
    "/modules/urban-development",
    "/modules/clean-area",
    "/modules/transport",
    "/modules/bsk",
    "/modules/health",
    "/modules/road-management",
    "/modules/landscaping",
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
            <img
              src="/logo.png"
              alt="Chust Smart City Logo"
              className="w-10 h-10 object-contain"
            />
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
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
              <MdSettings
                className="w-4 h-4 text-white animate-spin"
                style={{ animationDuration: "3s" }}
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium text-orange-700 leading-tight">
                Texnik ishlar olib borilmoqda
              </p>
              <p className="text-xs text-slate-500">Dashboard</p>
            </div>
          </div>
          <div className="mt-3 pt-3 border-t border-slate-200">
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-600">Sana:</span>
              <span className="font-medium text-slate-800">02.07.2025</span>
            </div>
            <div className="flex items-center justify-between text-xs mt-1">
              <span className="text-slate-600">Vaqt:</span>
              <span className="font-medium text-slate-800">{currentTime}</span>
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

          {/* Dashboard Modules Section */}
          <div className="mt-6 px-2">
            {/* Modules Dropdown Header */}
            <button
              onClick={() => setModulesDropdownOpen(!modulesDropdownOpen)}
              className="w-full flex items-center justify-between px-3 py-3 rounded-lg text-sm transition-colors text-slate-700 hover:text-slate-900 hover:bg-gradient-to-r hover:from-blue-50 hover:to-green-50"
            >
              <div className="flex items-center space-x-3">
                <MdApps className="w-5 h-5 flex-shrink-0" />
                <div className="flex-1 min-w-0 text-left">
                  <p className="font-medium truncate">🧩 Dashboard Modullari</p>
                  <p className="text-xs text-slate-500 truncate">
                    {dashboardModules.length} ta modul
                  </p>
                </div>
              </div>
              {modulesDropdownOpen ? (
                <MdExpandLess className="w-5 h-5 flex-shrink-0" />
              ) : (
                <MdExpandMore className="w-5 h-5 flex-shrink-0" />
              )}
            </button>

            {/* Dropdown Content */}
            <AnimatePresence>
              {modulesDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="mt-2 ml-4 border-l-2 border-slate-200 pl-4"
                >
                  <nav className="space-y-1">
                    {dashboardModules.map((item) => {
                      const Icon = item.icon;
                      const isActive = location.pathname === item.path;

                      return (
                        <Link
                          key={item.path}
                          to={item.path}
                          onClick={() => setIsOpen(false)}
                          className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                            isActive
                              ? "bg-gradient-to-r from-blue-600 to-green-600 text-white shadow-md"
                              : "text-slate-700 hover:text-slate-900 hover:bg-gradient-to-r hover:from-blue-50 hover:to-green-50"
                          }`}
                        >
                          <Icon className="w-4 h-4 flex-shrink-0" />
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
                </motion.div>
              )}
            </AnimatePresence>
          </div>

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
          <div className="flex bg-blue-50 rounded-lg p-1 mb-4">
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

          {/* User Info & Logout */}
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-3">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-green-600 rounded-full flex items-center justify-center">
                <MdPerson className="text-white text-xl" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-800 truncate">
                  Admin: Hasanboy
                </p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg hover:from-red-600 hover:to-red-700 transition-all shadow-sm hover:shadow-md"
            >
              <MdLogout className="text-lg" />
              <span className="text-sm font-medium">Chiqish</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
