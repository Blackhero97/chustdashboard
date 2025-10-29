import React, { useState } from "react";
import { motion } from "framer-motion";
import Card from "../components/Card";
import { useLanguage } from "../context/LanguageContext";
import { toast } from "react-toastify";
// Premium iconlar
import {
  MdLocationOn,
  MdMap,
  MdTimeline,
  MdBarChart,
  MdSettings,
} from "react-icons/md";

const MapView = () => {
  const { t } = useLanguage();
  const [selectedDate, setSelectedDate] = useState("2025-07-02");

  // Stats data from attachment
  const stats = [
    { label: "Jami", value: 81, color: "bg-blue-500", icon: MdBarChart },
    { label: "Tozalangan", value: 8, color: "bg-green-500", icon: MdTimeline },
    {
      label: "Tozalanmagan",
      value: 73,
      color: "bg-red-500",
      icon: MdLocationOn,
    },
    { label: "Ko'cha soni", value: 0, color: "bg-gray-500", icon: MdMap },
    { label: "CHYSH", value: 81, color: "bg-blue-500", icon: MdBarChart },
    {
      label: "Jami transport",
      value: 13,
      color: "bg-purple-500",
      icon: MdTimeline,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-slate-900">
                Grafik belgilash
              </h1>
              <p className="text-slate-600 mt-1">
                Tozalanmagan/tozalangan chiqindi yig'ish shoxobchalari
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-slate-600">Oy tanlang:</span>
              <select
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="2025-07-02">2025-yil iyul</option>
                <option value="2025-06-02">2025-yil iyun</option>
                <option value="2025-05-02">2025-yil may</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Statistics Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="text-center bg-white border-slate-200 shadow-sm">
                <div
                  className={`w-12 h-12 ${stat.color} rounded-lg mx-auto mb-3 flex items-center justify-center`}
                >
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-slate-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-600">{stat.label}</div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Card className="bg-white border-slate-200 shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-slate-900">
                Chust shahar xaritasi
              </h2>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-green-500 rounded"></div>
                  <span className="text-sm text-slate-600">Tozalangan</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-red-500 rounded"></div>
                  <span className="text-sm text-slate-600">Tozalanmagan</span>
                </div>
              </div>
            </div>

            {/* Yandex Map Embed */}
            <div className="relative overflow-hidden rounded-lg border border-slate-200">
              <a
                href="https://yandex.uz/maps/189938/chust/?utm_medium=mapframe&utm_source=maps"
                className="text-slate-400 text-xs absolute top-0 left-0 z-10 bg-white px-2 py-1"
              >
                Чуст
              </a>
              <a
                href="https://yandex.uz/maps/geo/771299745/?ll=71.237147%2C41.001861&utm_medium=mapframe&utm_source=maps&z=13"
                className="text-slate-400 text-xs absolute top-4 left-0 z-10 bg-white px-2 py-1"
              >
                Чуст — Яндекс Карты
              </a>
              <iframe
                src="https://yandex.uz/map-widget/v1/?ll=71.237147%2C41.001861&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgk3NzEyOTk3NDUSJk_Ku3piZWtpc3RvbiwgTmFtYW5nYW4gdmlsb3lhdGksIENodXN0IgoN7nOOQhV1AiRC&z=13"
                width="100%"
                height="500"
                frameBorder="0"
                allowFullScreen={true}
                className="relative"
                title="Chust shahar xaritasi"
              />
            </div>

            {/* Map Controls */}
            <div className="mt-6 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => toast.info("Texnik jarayonda...")}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Maršrutni ko'rsatish
                </button>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded" />
                  <span className="text-sm text-slate-600">
                    Barcha CHYSH larni ko'rsatish
                  </span>
                </label>
              </div>
              <div className="text-sm text-slate-500">
                Vaqt oralig'i: 06:06 - 23:59
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Transport Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8"
        >
          <Card className="bg-blue-600 text-white">
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">
                Transport Ma'lumotlari
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <div className="text-2xl font-bold">64 km/soat</div>
                  <div className="text-blue-100">Yuqori tezlik</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">61.633 m</div>
                  <div className="text-blue-100">Masofa</div>
                </div>
                <div>
                  <div className="text-sm">
                    <div>Birinchi xabar: 2025-07-02 00:02</div>
                    <div>Oxirgi xabar: 2025-07-02 15:23</div>
                    <div>Poligonga bordi: 0</div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default MapView;
