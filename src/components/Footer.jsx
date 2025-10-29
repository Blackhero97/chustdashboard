import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md";

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-slate-800 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">🏛️</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">{t("home.title")}</h3>
                <p className="text-slate-400 text-sm">{t("home.subtitle")}</p>
              </div>
            </div>
            <p className="text-slate-300 mb-4 max-w-md">
              {t("home.description")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Tez havolalar</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  {t("nav.home")}
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  {t("nav.about")}
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  {t("nav.services")}
                </Link>
              </li>
              <li>
                <Link
                  to="/statistics"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  {t("nav.statistics")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t("contact.title")}</h4>
            <div className="space-y-2 text-slate-300">
              <p className="flex items-center space-x-2">
                <MdLocationOn className="w-5 h-5" />
                <span>Chust sh., Namangan viloyati</span>
              </p>
              <p className="flex items-center space-x-2">
                <MdPhone className="w-5 h-5" />
                <span>+998 69 542 XX XX</span>
              </p>
              <p className="flex items-center space-x-2">
                <MdEmail className="w-5 h-5" />
                <span>info@chust.gov.uz</span>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © {currentYear} Chust Aqlli Shahar Tizimi. Barcha huquqlar
            himoyalangan.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="#"
              className="text-slate-400 hover:text-white transition-colors"
            >
              Maxfiylik siyosati
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-white transition-colors"
            >
              Foydalanish shartlari
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
