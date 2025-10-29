import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Card from "../../components/Card";
import { useLanguage } from "../../context/LanguageContext";
import {
  MdCleaningServices,
  MdArrowBack,
  MdPeople,
  MdDelete,
  MdDirectionsCar,
  MdPhone,
  MdLocationOn,
  MdGpsFixed,
  MdBarChart,
  MdWarning,
} from "react-icons/md";

const CleanAreaModule = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");

  // Real-time ma'lumotlar
  const moduleData = {
    totalObjects: 441,
    staff: 66,
    cleanedToday: 285,
    wasteContainers: [
      {
        id: 1,
        location: "Markaz tumani",
        total: 45,
        full: 8,
        empty: 37,
        status: "normal",
      },
      {
        id: 2,
        location: "Chilonzor MFY",
        total: 32,
        full: 15,
        empty: 17,
        status: "attention",
      },
      {
        id: 3,
        location: "Navoi ko'chasi",
        total: 28,
        full: 3,
        empty: 25,
        status: "normal",
      },
      {
        id: 4,
        location: "Oybek MFY",
        total: 38,
        full: 22,
        empty: 16,
        status: "critical",
      },
    ],
    vehicles: [
      {
        id: 1,
        number: "01-A-123",
        location: "Markaz tumani",
        speed: 25,
        fuel: 85,
        status: "active",
        driver: "Karimov A.",
      },
      {
        id: 2,
        number: "01-B-456",
        location: "Chilonzor MFY",
        speed: 0,
        fuel: 45,
        status: "loading",
        driver: "Yusupov B.",
      },
      {
        id: 3,
        number: "01-C-789",
        location: "Navoi ko'chasi",
        speed: 30,
        fuel: 72,
        status: "active",
        driver: "Rahimov S.",
      },
      {
        id: 4,
        number: "01-D-012",
        location: "Depot",
        speed: 0,
        fuel: 95,
        status: "standby",
        driver: "Toshmatov K.",
      },
    ],
    weeklyStats: [
      { day: "Dushanba", collected: 42 },
      { day: "Seshanba", collected: 38 },
      { day: "Chorshanba", collected: 45 },
      { day: "Payshanba", collected: 41 },
      { day: "Juma", collected: 48 },
      { day: "Shanba", collected: 52 },
      { day: "Yakshanba", collected: 35 },
    ],
    dirtyAreas: [
      {
        id: 1,
        name: "Bozor atrofi",
        level: 85,
        lastCleaned: "2 kun oldin",
        priority: "high",
      },
      {
        id: 2,
        name: "Avtovokzal",
        level: 72,
        lastCleaned: "1 kun oldin",
        priority: "high",
      },
      {
        id: 3,
        name: "Park yaqini",
        level: 68,
        lastCleaned: "3 kun oldin",
        priority: "medium",
      },
      {
        id: 4,
        name: "Maktab hovlisi",
        level: 45,
        lastCleaned: "Bugun",
        priority: "low",
      },
      {
        id: 5,
        name: "Shifoxona atrofi",
        level: 38,
        lastCleaned: "Bugun",
        priority: "low",
      },
    ],
    dispatcherContacts: [
      {
        name: "Asosiy dispatcher",
        phone: "+998 62 226-45-95",
        shift: "24/7",
        type: "main",
      },
      {
        name: "Kunduzgi smena",
        phone: "+998 62 226-45-96",
        shift: "06:00-18:00",
        type: "day",
      },
      {
        name: "Tungi smena",
        phone: "+998 62 226-45-97",
        shift: "18:00-06:00",
        type: "night",
      },
      {
        name: "Dam olish kunlari",
        phone: "+998 62 226-45-98",
        shift: "Shanba-Yakshanba",
        type: "weekend",
      },
    ],
  };

  const getContainerStatus = (status) => {
    switch (status) {
      case "normal":
        return { color: "text-green-600 bg-green-100", text: "Normal" };
      case "attention":
        return { color: "text-yellow-600 bg-yellow-100", text: "Diqqat" };
      case "critical":
        return { color: "text-red-600 bg-red-100", text: "Kritik" };
      default:
        return { color: "text-gray-600 bg-gray-100", text: "Noma'lum" };
    }
  };

  const getVehicleStatus = (status) => {
    switch (status) {
      case "active":
        return { color: "text-green-600 bg-green-100", text: "Yo'lda" };
      case "loading":
        return { color: "text-blue-600 bg-blue-100", text: "Yuklanyapti" };
      case "standby":
        return { color: "text-gray-600 bg-gray-100", text: "Kutish" };
      default:
        return { color: "text-gray-600 bg-gray-100", text: "Noma'lum" };
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high":
        return "border-red-300 bg-red-50";
      case "medium":
        return "border-yellow-300 bg-yellow-50";
      case "low":
        return "border-green-300 bg-green-50";
      default:
        return "border-gray-300 bg-gray-50";
    }
  };

  const tabs = [
    { id: "overview", label: "Umumiy holat", icon: MdCleaningServices },
    { id: "containers", label: "Chiqindi qutilari", icon: MdDelete },
    { id: "vehicles", label: "Mashinalar GPS", icon: MdGpsFixed },
    { id: "stats", label: "Haftalik grafik", icon: MdBarChart },
    { id: "dirty", label: "Eng iflos hududlar", icon: MdWarning },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="p-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => navigate(-1)}
                className="p-2 hover:bg-slate-200 rounded-lg transition-colors"
              >
                <MdArrowBack className="w-6 h-6" />
              </button>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <MdCleaningServices className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-slate-900">
                    Toza hudud
                  </h1>
                  <p className="text-slate-600">
                    Chiqindilarni tozalash va olib chiqish tizimi
                  </p>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-blue-600">
                {moduleData.cleanedToday}/{moduleData.totalObjects}
              </div>
              <div className="text-sm text-slate-600">Bugun tozalangan</div>
            </div>
          </div>
        </motion.div>

        {/* KPI Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold">
                  {moduleData.totalObjects}
                </div>
                <div className="text-blue-100">Obyektlar soni</div>
              </div>
              <MdCleaningServices className="w-8 h-8 text-blue-200" />
            </div>
          </Card>

          <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold">{moduleData.staff}</div>
                <div className="text-green-100">Xodimlar soni</div>
              </div>
              <MdPeople className="w-8 h-8 text-green-200" />
            </div>
          </Card>

          <Card className="bg-gradient-to-br from-orange-500 to-orange-600 text-white">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold">
                  {moduleData.cleanedToday}
                </div>
                <div className="text-orange-100">Bugun tozalangan</div>
              </div>
              <MdDelete className="w-8 h-8 text-orange-200" />
            </div>
          </Card>

          <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold">
                  {moduleData.vehicles.length}
                </div>
                <div className="text-purple-100">Faol mashinalar</div>
              </div>
              <MdDirectionsCar className="w-8 h-8 text-purple-200" />
            </div>
          </Card>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-6"
        >
          <div className="flex space-x-1 bg-slate-200 rounded-lg p-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all ${
                  activeTab === tab.id
                    ? "bg-white text-blue-600 shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === "overview" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Bugungi tozalash statistikasi */}
              <Card>
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <MdCleaningServices className="w-5 h-5 mr-2 text-blue-500" />
                  Bugungi tozalash statistikasi
                </h3>
                <div className="space-y-4">
                  <div className="p-4 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-blue-600 mb-2">
                        {moduleData.cleanedToday}
                      </div>
                      <div className="text-sm text-slate-600">
                        Tozalangan joylar soni
                      </div>
                    </div>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-4">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-green-500 h-4 rounded-full transition-all duration-500"
                      style={{
                        width: `${
                          (moduleData.cleanedToday / moduleData.totalObjects) *
                          100
                        }%`,
                      }}
                    ></div>
                  </div>
                  <div className="text-center text-sm text-slate-600">
                    {Math.round(
                      (moduleData.cleanedToday / moduleData.totalObjects) * 100
                    )}
                    % bajarildi
                  </div>
                </div>
              </Card>

              {/* Dispatcher aloqa raqamlari */}
              <Card>
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <MdPhone className="w-5 h-5 mr-2 text-green-500" />
                  Dispatcher aloqa raqamlari
                </h3>
                <div className="space-y-3">
                  {moduleData.dispatcherContacts.map((contact, index) => (
                    <div
                      key={index}
                      className={`p-3 border rounded-lg ${
                        contact.type === "main"
                          ? "border-green-200 bg-green-50"
                          : "border-slate-200"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center space-x-2">
                          <span className="font-medium text-slate-900">
                            {contact.name}
                          </span>
                          {contact.type === "main" && (
                            <span className="px-2 py-1 bg-green-100 text-green-600 text-xs rounded-full font-medium">
                              Asosiy
                            </span>
                          )}
                        </div>
                        <a
                          href={`tel:${contact.phone}`}
                          className="flex items-center space-x-1 text-green-600 hover:text-green-700 transition-colors font-medium"
                        >
                          <MdPhone className="w-4 h-4" />
                          <span className="text-sm">{contact.phone}</span>
                        </a>
                      </div>
                      <div className="text-xs text-slate-600">
                        Ish vaqti:{" "}
                        <span className="font-medium">{contact.shift}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          )}

          {activeTab === "containers" && (
            <div className="space-y-6">
              <Card>
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <MdDelete className="w-5 h-5 mr-2 text-orange-500" />
                  Chiqindi qutilari holati
                </h3>
                <div className="space-y-4">
                  {moduleData.wasteContainers.map((container) => {
                    const statusInfo = getContainerStatus(container.status);
                    return (
                      <div
                        key={container.id}
                        className="p-4 bg-slate-50 rounded-lg"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-semibold text-slate-900 flex items-center">
                            <MdLocationOn className="w-4 h-4 mr-1" />
                            {container.location}
                          </h4>
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-medium ${statusInfo.color}`}
                          >
                            {statusInfo.text}
                          </span>
                        </div>
                        <div className="grid grid-cols-3 gap-4 text-center">
                          <div className="p-3 bg-blue-50 rounded-lg">
                            <div className="text-2xl font-bold text-blue-600">
                              {container.total}
                            </div>
                            <div className="text-xs text-slate-600">Jami</div>
                          </div>
                          <div className="p-3 bg-red-50 rounded-lg">
                            <div className="text-2xl font-bold text-red-600">
                              {container.full}
                            </div>
                            <div className="text-xs text-slate-600">
                              To'lgan
                            </div>
                          </div>
                          <div className="p-3 bg-green-50 rounded-lg">
                            <div className="text-2xl font-bold text-green-600">
                              {container.empty}
                            </div>
                            <div className="text-xs text-slate-600">Bo'sh</div>
                          </div>
                        </div>
                        <div className="mt-3 w-full bg-slate-200 rounded-full h-2">
                          <div
                            className="bg-red-500 h-2 rounded-full"
                            style={{
                              width: `${
                                (container.full / container.total) * 100
                              }%`,
                            }}
                          ></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Card>
            </div>
          )}

          {activeTab === "vehicles" && (
            <div className="space-y-6">
              <Card>
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <MdGpsFixed className="w-5 h-5 mr-2 text-blue-500" />
                  Mashinalar harakati (GPS real-time)
                </h3>
                <div className="space-y-4">
                  {moduleData.vehicles.map((vehicle) => {
                    const statusInfo = getVehicleStatus(vehicle.status);
                    return (
                      <div
                        key={vehicle.id}
                        className="p-4 bg-slate-50 rounded-lg border border-slate-200"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center space-x-3">
                            <div className="p-2 bg-blue-100 rounded-lg">
                              <MdDirectionsCar className="w-5 h-5 text-blue-600" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-slate-900">
                                {vehicle.number}
                              </h4>
                              <div className="text-sm text-slate-600">
                                {vehicle.driver}
                              </div>
                            </div>
                          </div>
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-medium ${statusInfo.color}`}
                          >
                            {statusInfo.text}
                          </span>
                        </div>
                        <div className="grid grid-cols-3 gap-4 text-sm">
                          <div className="text-slate-600">
                            <MdLocationOn className="w-4 h-4 inline mr-1" />
                            <span className="font-medium">Joylashuv:</span>{" "}
                            {vehicle.location}
                          </div>
                          <div className="text-slate-600">
                            <MdGpsFixed className="w-4 h-4 inline mr-1" />
                            <span className="font-medium">Tezlik:</span>{" "}
                            {vehicle.speed} km/h
                          </div>
                          <div className="text-slate-600">
                            <span className="font-medium">Yoqilg'i:</span>{" "}
                            {vehicle.fuel}%
                          </div>
                        </div>
                        <div className="mt-3 w-full bg-slate-200 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full ${
                              vehicle.fuel > 50
                                ? "bg-green-500"
                                : vehicle.fuel > 25
                                ? "bg-yellow-500"
                                : "bg-red-500"
                            }`}
                            style={{ width: `${vehicle.fuel}%` }}
                          ></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Card>
            </div>
          )}

          {activeTab === "stats" && (
            <div className="space-y-6">
              <Card>
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <MdBarChart className="w-5 h-5 mr-2 text-green-500" />
                  Chiqindi yig'ish soni (haftalik)
                </h3>
                <div className="space-y-3">
                  {moduleData.weeklyStats.map((stat, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between py-3 px-4 bg-slate-50 rounded-lg"
                    >
                      <span className="font-medium text-slate-900">
                        {stat.day}
                      </span>
                      <div className="flex items-center space-x-3">
                        <div className="w-32 bg-slate-200 rounded-full h-3">
                          <div
                            className="bg-green-500 h-3 rounded-full"
                            style={{ width: `${(stat.collected / 60) * 100}%` }}
                          ></div>
                        </div>
                        <span className="font-bold text-green-600 w-12">
                          {stat.collected}t
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600 mb-1">
                      {moduleData.weeklyStats.reduce(
                        (sum, day) => sum + day.collected,
                        0
                      )}{" "}
                      tonna
                    </div>
                    <div className="text-sm text-slate-600">Haftalik jami</div>
                  </div>
                </div>
              </Card>
            </div>
          )}

          {activeTab === "dirty" && (
            <div className="space-y-6">
              <Card>
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <MdWarning className="w-5 h-5 mr-2 text-red-500" />
                  Eng iflos hududlar (TOP 5)
                </h3>
                <div className="space-y-4">
                  {moduleData.dirtyAreas.map((area, index) => (
                    <div
                      key={area.id}
                      className={`p-4 rounded-lg border-l-4 ${getPriorityColor(
                        area.priority
                      )}`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <div className="text-2xl font-bold text-slate-700">
                            #{index + 1}
                          </div>
                          <h4 className="font-semibold text-slate-900">
                            {area.name}
                          </h4>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-red-600">
                            {area.level}%
                          </div>
                          <div className="text-xs text-slate-500">
                            Ifloslik darajasi
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <div className="text-slate-600">
                          <span className="font-medium">So'nggi tozalash:</span>{" "}
                          {area.lastCleaned}
                        </div>
                        <div
                          className={`px-2 py-1 rounded text-xs font-medium ${
                            area.priority === "high"
                              ? "bg-red-100 text-red-600"
                              : area.priority === "medium"
                              ? "bg-yellow-100 text-yellow-600"
                              : "bg-green-100 text-green-600"
                          }`}
                        >
                          {area.priority === "high"
                            ? "Yuqori"
                            : area.priority === "medium"
                            ? "O'rta"
                            : "Past"}{" "}
                          ustuvorlik
                        </div>
                      </div>
                      <div className="mt-3 w-full bg-slate-200 rounded-full h-3">
                        <div
                          className={`h-3 rounded-full ${
                            area.level > 70
                              ? "bg-red-500"
                              : area.level > 40
                              ? "bg-yellow-500"
                              : "bg-green-500"
                          }`}
                          style={{ width: `${area.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default CleanAreaModule;
