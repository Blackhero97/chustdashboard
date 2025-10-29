import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import { useLanguage } from "../context/LanguageContext";
// Premium iconlar
import { MdError, MdHome, MdArrowBack } from "react-icons/md";

const PageNotFound = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center">
      <div className="max-w-md mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="text-center bg-white shadow-lg">
            <motion.div
              animate={{
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-8xl mb-6"
            >
              <MdError className="mx-auto text-red-500" />
            </motion.div>

            <h1 className="text-4xl font-bold text-slate-900 mb-4">404</h1>
            <h2 className="text-xl font-semibold text-slate-700 mb-4">
              Sahifa topilmadi
            </h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Siz qidirayotgan sahifa mavjud emas yoki ko'chirilgan bo'lishi
              mumkin. Iltimos, URL manzilini tekshiring yoki bosh sahifaga
              qayting.
            </p>

            <div className="space-y-4">
              <Link
                to="/"
                className="inline-flex items-center justify-center space-x-2 w-full py-3 px-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                <MdHome className="w-5 h-5" />
                <span>Bosh sahifaga qaytish</span>
              </Link>

              <button
                onClick={() => window.history.back()}
                className="inline-flex items-center justify-center space-x-2 w-full py-3 px-6 bg-slate-200 text-slate-700 rounded-lg hover:bg-slate-300 transition-colors font-medium"
              >
                <MdArrowBack className="w-5 h-5" />
                <span>Orqaga qaytish</span>
              </button>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200">
              <p className="text-sm text-slate-500">
                Agar muammo davom etsa, bizga murojaat qiling:
              </p>
              <a
                href="mailto:support@chust.gov.uz"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                support@chust.gov.uz
              </a>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default PageNotFound;
