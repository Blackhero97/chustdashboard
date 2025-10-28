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
  MdRefresh,
  MdRoute,
  MdLocalShipping,
  MdSpeed,
  MdSchedule,
  MdAccessTime,
  MdTimer,
} from "react-icons/md";

const ChustMapSystem = () => {
  const { t } = useLanguage();
  const [selectedDate, setSelectedDate] = useState("2025-07-02");
  const [selectedTime, setSelectedTime] = useState("06:06 - 23:59");

  // System stats exactly from attachment
  const systemStats = [
    {
      label: "Jami",
      value: 81,
      color: "bg-blue-500",
      icon: MdBarChart,
      bgColor: "bg-blue-50",
      textColor: "text-blue-900",
    },
    {
      label: "Tozalangan",
      value: 8,
      color: "bg-green-500",
      icon: MdTimeline,
      bgColor: "bg-green-50",
      textColor: "text-green-900",
    },
    {
      label: "Tozalanmagan",
      value: 73,
      color: "bg-red-500",
      icon: MdLocationOn,
      bgColor: "bg-red-50",
      textColor: "text-red-900",
    },
    {
      label: "Ko'cha soni",
      value: 0,
      color: "bg-gray-500",
      icon: MdMap,
      bgColor: "bg-gray-50",
      textColor: "text-gray-900",
    },
    {
      label: "CHYSH",
      value: 81,
      color: "bg-blue-500",
      icon: MdBarChart,
      bgColor: "bg-blue-50",
      textColor: "text-blue-900",
    },
    {
      label: "Jami transport",
      value: 13,
      color: "bg-purple-500",
      icon: MdLocalShipping,
      bgColor: "bg-purple-50",
      textColor: "text-purple-900",
    },
  ];

  const transportInfo = {
    speed: "64 km/soat",
    distance: "61.633 m",
    firstMessage: "2025-07-02 00:02",
    lastMessage: "2025-07-02 15:23",
    polygonVisits: 0,
  };

  const handleControlClick = (action) => {
    toast.info(`${action} funksiyasi ishga tushirildi`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header with Green Theme like attachment */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <MdLocationOn className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-lg md:text-xl font-bold">
                  Chust aqlli shahar
                </h1>
                <p className="text-green-100 text-xs md:text-sm">
                  Tozalanmagan/tozalangan chiqindi yig'ish shoxobchalari
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right text-xs md:text-sm">
                <div>02.07.2025</div>
                <div>15:24:17</div>
              </div>
              <div className="text-xs md:text-sm">
                <div>A1Tech</div>
                <div>Super Admin</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-6">
        {/* Control Panel */}
        <div className="mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0 mb-4">
            <button
              onClick={() => handleControlClick("Grafik belgilash")}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Grafik belgilash
            </button>
            <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
              {/* Calendar Days - Current Week */}
              <div className="flex space-x-1 overflow-x-auto pb-2 sm:pb-0">
                {Array.from({ length: 7 }, (_, i) => {
                  const day = i + 1;
                  return (
                    <button
                      key={day}
                      onClick={() => handleControlClick(`${day} kun`)}
                      className={`w-8 h-8 text-xs rounded flex-shrink-0 ${
                        day === 2
                          ? "bg-yellow-500 text-white"
                          : day === 3
                          ? "bg-green-600 text-white"
                          : "bg-white border hover:bg-gray-50"
                      }`}
                    >
                      {day}
                    </button>
                  );
                })}
                <span className="text-gray-400 px-2 flex-shrink-0">...</span>
                {/* Show some more days */}
                {[28, 29, 30, 31].map((day) => (
                  <button
                    key={day}
                    onClick={() => handleControlClick(`${day} kun`)}
                    className="w-8 h-8 text-xs rounded bg-white border hover:bg-gray-50 flex-shrink-0"
                  >
                    {day}
                  </button>
                ))}
              </div>
              <select
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg text-sm w-full sm:w-auto"
              >
                <option value="2025-07-02">2025-yil iyul</option>
                <option value="2025-06-02">2025-yil iyun</option>
              </select>
            </div>
          </div>
        </div>

        {/* Statistics Cards Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-3 md:gap-4 mb-6">
          {systemStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className={`${stat.bgColor} border-gray-200 text-center`}>
                <div
                  className={`w-10 h-10 ${stat.color} rounded-lg mx-auto mb-2 flex items-center justify-center`}
                >
                  <stat.icon className="w-5 h-5 text-white" />
                </div>
                <div className={`text-2xl font-bold ${stat.textColor} mb-1`}>
                  {stat.value}
                </div>
                <div className="text-xs text-gray-600">{stat.label}</div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-4 md:gap-6">
          {/* Left Panel - Controls */}
          <div className="xl:col-span-1 order-2 xl:order-1">
            <Card className="bg-white border-gray-200 mb-4">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Jadval
                  </label>
                  <input
                    type="text"
                    value="01 764 WKA"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                    onChange={() => {}}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Xanta
                  </label>
                  <div className="text-sm text-gray-600">
                    Barcha CHYSH larni ko'shtish
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Vaqt oralig'i</span>
                    <span className="text-blue-600 flex items-center space-x-1">
                      <MdAccessTime className="w-4 h-4" />
                      <span>06:06</span>
                      <MdTimer className="w-4 h-4" />
                      <span>23:59</span>
                      <MdAccessTime className="w-4 h-4" />
                      <span>Qacha</span>
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => handleControlClick("Maršrutni ko'rsatish")}
                  className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm flex items-center justify-center space-x-2"
                >
                  <MdRefresh className="w-5 h-5" />
                  <span>Marshrutni ko'rsatish</span>
                </button>

                <div className="mt-4">
                  <label className="flex items-center space-x-2 text-sm">
                    <input type="checkbox" className="rounded" />
                    <span>Toxlagan joylarini ko'rsatish</span>
                  </label>
                </div>
              </div>
            </Card>
          </div>

          {/* Center - Map Area */}
          <div className="xl:col-span-2 order-1 xl:order-2">
            <Card className="bg-white border-gray-200">
              <div className="relative overflow-hidden rounded-lg">
                <a
                  href="https://yandex.uz/maps/189938/chust/?utm_medium=mapframe&utm_source=maps"
                  style={{
                    color: "#eee",
                    fontSize: "12px",
                    position: "absolute",
                    top: "0px",
                  }}
                  className="z-10"
                >
                  Чуст
                </a>
                <a
                  href="https://yandex.uz/maps/geo/771299745/?ll=71.237147%2C41.001861&utm_medium=mapframe&utm_source=maps&z=13"
                  style={{
                    color: "#eee",
                    fontSize: "12px",
                    position: "absolute",
                    top: "14px",
                  }}
                  className="z-10"
                >
                  Чуст — Яндекс Карты
                </a>
                <iframe
                  src="https://yandex.uz/map-widget/v1/?ll=71.237147%2C41.001861&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgk3NzEyOTk3NDUSJk_Ku3piZWtpc3RvbiwgTmFtYW5nYW4gdmlsb3lhdGksIENodXN0IgoN7nOOQhV1AiRC&z=13"
                  width="100%"
                  height="350"
                  className="sm:h-96 md:h-[450px] xl:h-[500px]"
                  frameBorder="1"
                  allowFullScreen={true}
                  style={{ position: "relative" }}
                  title="Chust shahar xaritasi - Asosiy tizim"
                />
              </div>
            </Card>
          </div>

          {/* Right Panel - Transport Info */}
          <div className="xl:col-span-1 order-3">
            <Card className="bg-blue-600 text-white">
              <div className="text-center">
                <div className="mb-4">
                  <MdLocalShipping className="w-8 h-8 mx-auto mb-2" />
                  <h3 className="text-lg font-semibold">
                    Transport Ma'lumotlari
                  </h3>
                </div>

                <div className="space-y-3 text-sm">
                  <div>
                    <div className="flex items-center justify-center space-x-2">
                      <MdSpeed className="w-4 h-4" />
                      <span>Yuqori tezlik:</span>
                    </div>
                    <div className="text-xl font-bold">
                      {transportInfo.speed}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-center space-x-2">
                      <MdRoute className="w-4 h-4" />
                      <span>Masofa:</span>
                    </div>
                    <div className="text-lg font-semibold">
                      {transportInfo.distance}
                    </div>
                  </div>

                  <div className="pt-2 border-t border-blue-400">
                    <div className="text-xs space-y-1">
                      <div>Birinchi xabar: {transportInfo.firstMessage}</div>
                      <div>Oxirgi xabar: {transportInfo.lastMessage}</div>
                      <div>Poligonga bordi: {transportInfo.polygonVisits}</div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 text-right">
                  <div className="text-xs">O'rtacha tezlik 1TV uchun</div>
                  <div className="text-sm font-bold">Ko'cha/CHYSH</div>
                  <div className="text-lg font-bold">0.0 / 6.2</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChustMapSystem;
