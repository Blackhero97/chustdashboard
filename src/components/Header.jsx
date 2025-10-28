import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Bars3Icon,
  XMarkIcon,
  HomeIcon,
  InformationCircleIcon,
  CogIcon,
  ChartBarIcon,
  DevicePhoneMobileIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import { useLanguage } from "../context/LanguageContext";
import { getCurrentTime } from "../utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(getCurrentTime());
  const { t, currentLanguage, changeLanguage } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const navigationItems = [
    { path: "/", icon: HomeIcon, label: t("nav.home") },
    { path: "/about", icon: InformationCircleIcon, label: t("nav.about") },
    { path: "/services", icon: CogIcon, label: t("nav.services") },
    { path: "/statistics", icon: ChartBarIcon, label: t("nav.statistics") },
    {
      path: "/mobile-app",
      icon: DevicePhoneMobileIcon,
      label: t("nav.mobileApp"),
    },
    { path: "/contact", icon: EnvelopeIcon, label: t("nav.contact") },
  ];

  return (
    <header className="bg-white shadow-lg border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Title */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">🏛️</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-slate-900">
                {t("home.title")}
              </h1>
              <p className="text-sm text-slate-600">{t("home.subtitle")}</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-primary-500 text-white"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Time and Language Switcher */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:block text-sm text-slate-600">
              <div className="font-medium">{currentTime}</div>
            </div>

            {/* Language Switcher */}
            <div className="flex bg-slate-100 rounded-lg p-1">
              <button
                onClick={() => changeLanguage("uz")}
                className={`px-3 py-1 text-sm font-medium rounded transition-colors ${
                  currentLanguage === "uz"
                    ? "bg-white text-slate-900 shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                O'z
              </button>
              <button
                onClick={() => changeLanguage("ru")}
                className={`px-3 py-1 text-sm font-medium rounded transition-colors ${
                  currentLanguage === "ru"
                    ? "bg-white text-slate-900 shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Ру
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100"
            >
              {isMenuOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-slate-200 py-4"
          >
            <nav className="space-y-2">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;

                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-primary-500 text-white"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;
