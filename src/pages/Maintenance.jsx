import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import { useLanguage } from "../context/LanguageContext";
// Premium iconlar
import { MdBuild, MdPhone, MdEmail, MdMessage, MdHome } from "react-icons/md";

const Maintenance = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="p-12">
            {/* Animated Icon */}
            <motion.div
              animate={{
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-8xl mb-8"
            >
              <MdBuild className="text-orange-600" />
            </motion.div>

            <h1 className="text-4xl font-bold text-slate-900 mb-4">
              {t("maintenance.title")}
            </h1>

            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              {t("maintenance.message")}
            </p>

            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between text-sm text-slate-600 mb-2">
                <span>Ta'mirlash jarayoni</span>
                <span>75%</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "75%" }}
                  transition={{ duration: 2, ease: "easeOut" }}
                  className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full"
                />
              </div>
            </div>

            {/* Estimated Time */}
            <div className="bg-slate-50 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Tugash vaqti
              </h3>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary-600">02</div>
                  <div className="text-sm text-slate-600">Soat</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary-600">30</div>
                  <div className="text-sm text-slate-600">Daqiqa</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary-600">15</div>
                  <div className="text-sm text-slate-600">Soniya</div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-primary-50 border border-primary-200 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-primary-800 mb-3">
                Favqulodda holatlarda bog'laning
              </h3>
              <div className="space-y-2">
                <p className="text-primary-700">
                  <MdPhone className="inline mr-2" />
                  +998 69 542 12 34
                </p>
                <p className="text-primary-700">
                  <MdEmail className="inline mr-2" />
                  support@chust.gov.uz
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/"
                className="btn-primary inline-flex items-center justify-center"
              >
                <MdHome className="w-5 h-5 mr-2" />
                {t("maintenance.backHome")}
              </Link>

              <button
                onClick={() => window.location.reload()}
                className="btn-primary bg-transparent border border-primary-500 text-primary-600 hover:bg-primary-50 inline-flex items-center justify-center"
              >
                🔄 Sahifani yangilash
              </button>
            </div>

            {/* Social Links */}
            <div className="mt-8 pt-8 border-t border-slate-200">
              <p className="text-sm text-slate-600 mb-4">
                Yangiliklar uchun ijtimoiy tarmoqlarda kuzating:
              </p>
              <div className="flex justify-center space-x-4">
                <a
                  href="#"
                  className="text-slate-400 hover:text-primary-600 transition-colors"
                >
                  📘 Facebook
                </a>
                <a
                  href="#"
                  className="text-slate-400 hover:text-primary-600 transition-colors"
                >
                  <MdMessage className="inline mr-2" />
                  Telegram
                </a>
                <a
                  href="#"
                  className="text-slate-400 hover:text-primary-600 transition-colors"
                >
                  📸 Instagram
                </a>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Background Animation */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-primary-200 rounded-full opacity-20"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              animate={{
                y: [null, Math.random() * window.innerHeight],
                x: [null, Math.random() * window.innerWidth],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Maintenance;
