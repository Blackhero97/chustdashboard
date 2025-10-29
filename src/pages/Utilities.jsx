import React, { useState } from "react";
import { motion } from "framer-motion";
import Card from "../components/Card";
import { useLanguage } from "../context/LanguageContext";
import { toast } from "react-toastify";
// Premium iconlar
import {
  MdBuild,
  MdWater,
  MdElectricBolt,
  MdLocalGasStation,
  MdLocalFireDepartment,
  MdWifi,
  MdPhone,
  MdRecycling,
  MdHome,
  MdSettings,
  MdNotifications,
  MdReport,
} from "react-icons/md";

const Utilities = () => {
  const { t } = useLanguage();
  const [selectedUtility, setSelectedUtility] = useState(null);

  const utilities = [
    {
      id: 1,
      title: "Suv ta'minoti",
      description: "Ichimlik suvi va kanalizatsiya tizimi",
      icon: MdWater,
      color: "from-blue-500 to-blue-600",
      status: "active",
      requests: 12,
    },
    {
      id: 2,
      title: "Elektr ta'minoti",
      description: "Elektr energiyasi va tarmoq xizmatlari",
      icon: MdElectricBolt,
      color: "from-yellow-500 to-yellow-600",
      status: "active",
      requests: 8,
    },
    {
      id: 3,
      title: "Gaz ta'minoti",
      description: "Tabiiy gaz va gaz jihozlari xizmati",
      icon: MdLocalGasStation,
      color: "from-orange-500 to-orange-600",
      status: "maintenance",
      requests: 3,
    },
    {
      id: 4,
      title: "Issiqlik ta'minoti",
      description: "Markazlashtirilgan isitish tizimi",
      icon: MdLocalFireDepartment,
      color: "from-red-500 to-red-600",
      status: "active",
      requests: 5,
    },
    {
      id: 5,
      title: "Internet va aloqa",
      description: "Internet, telefon va kabel televizori",
      icon: MdWifi,
      color: "from-purple-500 to-purple-600",
      status: "active",
      requests: 15,
    },
    {
      id: 6,
      title: "Chiqindi utilizatsiyasi",
      description: "Maishiy chiqindilarni yig'ish va qayta ishlash",
      icon: MdRecycling,
      color: "from-green-500 to-green-600",
      status: "active",
      requests: 7,
    },
  ];

  const handleServiceClick = (utility, action) => {
    toast.warning(
      `⚠️ ${action} funksiyasi hali ishlab chiqilmoqda. Jarayonda, uzur!`,
      {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      }
    );
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "active":
        return "text-green-600";
      case "maintenance":
        return "text-yellow-600";
      case "inactive":
        return "text-red-600";
      default:
        return "text-gray-600";
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case "active":
        return "Faol";
      case "maintenance":
        return "Ta'mirlash";
      case "inactive":
        return "Nofaol";
      default:
        return "Nomalum";
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">
                Shahar xizmatlari
              </h1>
              <p className="text-blue-100 mt-2 text-sm md:text-base">
                Zamonaviy texnologiyalar yordamida shahar xizmatlarini
                boshqarish va monitoring qilish
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() =>
                  handleServiceClick(null, "Yangi chaqiruv yaratish")
                }
                className="w-full md:w-auto px-4 py-2 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium"
              >
                <MdReport className="w-5 h-5 inline mr-2" />
                Yangi chaqiruv
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-blue-50 border-blue-200">
            <div className="flex items-center">
              <div className="p-3 bg-blue-600 rounded-lg">
                <MdReport className="w-6 h-6 text-white" />
              </div>
              <div className="ml-4">
                <div className="text-2xl font-bold text-blue-900">50</div>
                <div className="text-blue-700 text-sm">Jami chaqiruvlar</div>
              </div>
            </div>
          </Card>

          <Card className="bg-green-50 border-green-200">
            <div className="flex items-center">
              <div className="p-3 bg-green-600 rounded-lg">
                <MdNotifications className="w-6 h-6 text-white" />
              </div>
              <div className="ml-4">
                <div className="text-2xl font-bold text-green-900">42</div>
                <div className="text-green-700 text-sm">Hal qilingan</div>
              </div>
            </div>
          </Card>

          <Card className="bg-yellow-50 border-yellow-200">
            <div className="flex items-center">
              <div className="p-3 bg-yellow-600 rounded-lg">
                <MdSettings className="w-6 h-6 text-white" />
              </div>
              <div className="ml-4">
                <div className="text-2xl font-bold text-yellow-900">8</div>
                <div className="text-yellow-700 text-sm">Jarayonda</div>
              </div>
            </div>
          </Card>

          <Card className="bg-purple-50 border-purple-200">
            <div className="flex items-center">
              <div className="p-3 bg-purple-600 rounded-lg">
                <MdHome className="w-6 h-6 text-white" />
              </div>
              <div className="ml-4">
                <div className="text-2xl font-bold text-purple-900">6</div>
                <div className="text-purple-700 text-sm">Xizmatlar</div>
              </div>
            </div>
          </Card>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {utilities.map((utility, index) => (
            <motion.div
              key={utility.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-white border-slate-200 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${utility.color} rounded-xl flex items-center justify-center`}
                  >
                    <utility.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-right">
                    <div
                      className={`text-sm font-medium ${getStatusColor(
                        utility.status
                      )}`}
                    >
                      {getStatusText(utility.status)}
                    </div>
                    <div className="text-xs text-slate-500">
                      {utility.requests} chaqiruv
                    </div>
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {utility.title}
                </h3>
                <p className="text-slate-600 text-sm mb-6">
                  {utility.description}
                </p>

                <div className="space-y-2">
                  <button
                    onClick={() =>
                      handleServiceClick(utility, "Chaqiruv yuborish")
                    }
                    className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  >
                    Chaqiruv yuborish
                  </button>
                  <button
                    onClick={() => handleServiceClick(utility, "Holat ko'rish")}
                    className="w-full py-2 px-4 bg-slate-200 text-slate-700 rounded-lg hover:bg-slate-300 transition-colors font-medium"
                  >
                    Holat ko'rish
                  </button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Emergency Contact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12"
        >
          <Card className="bg-gradient-to-r from-red-600 to-red-700 text-white">
            <div className="text-center">
              <MdPhone className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Favqulodda vaziyatlar</h3>
              <p className="text-red-100 mb-4">
                Shoshilinch hollarda quyidagi raqamlarga murojaat qiling
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <button
                  onClick={() => handleServiceClick(null, "103 ga qo'ng'iroq")}
                  className="py-3 px-6 bg-white/20 rounded-lg hover:bg-white/30 transition-colors"
                >
                  <div className="font-bold text-lg">103</div>
                  <div className="text-sm">Favqulodda vaziyatlar</div>
                </button>
                <button
                  onClick={() => handleServiceClick(null, "104 ga qo'ng'iroq")}
                  className="py-3 px-6 bg-white/20 rounded-lg hover:bg-white/30 transition-colors"
                >
                  <div className="font-bold text-lg">104</div>
                  <div className="text-sm">Gaz xizmati</div>
                </button>
                <button
                  onClick={() => handleServiceClick(null, "105 ga qo'ng'iroq")}
                  className="py-3 px-6 bg-white/20 rounded-lg hover:bg-white/30 transition-colors"
                >
                  <div className="font-bold text-lg">105</div>
                  <div className="text-sm">Kommunal xizmatlar</div>
                </button>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Utilities;
