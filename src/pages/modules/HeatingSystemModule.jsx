import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Card from "../../components/Card";
import { useLanguage } from "../../context/LanguageContext";
import {
  MdLocalFireDepartment,
  MdArrowBack,
  MdPeople,
  MdThermostat,
  MdWarning,
  MdPhone,
  MdLocationOn,
  MdBuild,
  MdSchedule,
  MdNotifications,
} from "react-icons/md";

const HeatingSystemModule = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");

  // Real-time ma'lumotlar
  const moduleData = {
    totalObjects: 39,
    staff: 27,
    activeBoilers: 35,
    stoppedBoilers: 4,
    avgTemperature: 68, // °C
    lastMaintenance: "2025-10-15",
    plannedRepairs: [
      {
        id: 1,
        object: "Qozonxona №3",
        date: "2025-11-01",
        type: "Profilaktika",
        priority: "medium",
      },
      {
        id: 2,
        object: "Qozonxona №7",
        date: "2025-11-03",
        type: "Kapital ta'mir",
        priority: "high",
      },
      {
        id: 3,
        object: "Qozonxona №12",
        date: "2025-11-05",
        type: "Diagnostika",
        priority: "low",
      },
    ],
    emergencyAlerts: [
      {
        id: 1,
        type: "Harorat pasayishi",
        location: "Chilonzor MFY",
        time: "13:45",
        status: "active",
      },
      {
        id: 2,
        type: "Bosim pastligi",
        location: "Navoi ko'chasi",
        time: "11:20",
        status: "resolved",
      },
    ],
    connectedAreas: [
      { name: "Markaz tumani", coverage: 85, population: 12500 },
      { name: "Chilonzor MFY", coverage: 92, population: 8300 },
      { name: "Navoi ko'chasi", coverage: 78, population: 6200 },
      { name: "Mustaqillik MFY", coverage: 94, population: 9800 },
    ],
    temperatureData: [
      { time: "00:00", temp: 65 },
      { time: "04:00", temp: 70 },
      { time: "08:00", temp: 75 },
      { time: "12:00", temp: 68 },
      { time: "16:00", temp: 72 },
      { time: "20:00", temp: 69 },
    ],
    responsibleOrgs: [
      {
        name: "Issiqlik tarmog'i boshqarmasi",
        phone: "+998 62 226-45-71",
        head: "Yusupov R.A.",
      },
      {
        name: "Qozonxona xizmati",
        phone: "+998 62 226-45-72",
        head: "Karimova S.B.",
      },
      {
        name: "Avariya-ta'mir guruhi",
        phone: "+998 62 226-45-73",
        head: "Toshmatov O.K.",
      },
    ],
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high":
        return "text-red-600 bg-red-100";
      case "medium":
        return "text-orange-600 bg-orange-100";
      case "low":
        return "text-green-600 bg-green-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "active":
        return "text-red-600 bg-red-100";
      case "resolved":
        return "text-green-600 bg-green-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  const tabs = [
    { id: "overview", label: "Umumiy holat", icon: MdThermostat },
    { id: "maintenance", label: "Ta'mir rejalari", icon: MdBuild },
    { id: "alerts", label: "Ogohlantirishlar", icon: MdNotifications },
    { id: "staff", label: "Xodimlar", icon: MdPeople },
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
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                  <MdLocalFireDepartment className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-slate-900">
                    Issiqlik manbai
                  </h1>
                  <p className="text-slate-600">
                    Issiqlik ta'minoti tizimlari monitoring
                  </p>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-green-600">
                {moduleData.activeBoilers}/{moduleData.totalObjects}
              </div>
              <div className="text-sm text-slate-600">Faol qozonxonalar</div>
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
          <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold">
                  {moduleData.totalObjects}
                </div>
                <div className="text-green-100">Jami obyektlar</div>
              </div>
              <MdLocalFireDepartment className="w-8 h-8 text-green-200" />
            </div>
          </Card>

          <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold">{moduleData.staff}</div>
                <div className="text-blue-100">Xodimlar soni</div>
              </div>
              <MdPeople className="w-8 h-8 text-blue-200" />
            </div>
          </Card>

          <Card className="bg-gradient-to-br from-orange-500 to-orange-600 text-white">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold">
                  {moduleData.avgTemperature}°
                </div>
                <div className="text-orange-100">O'rtacha harorat</div>
              </div>
              <MdThermostat className="w-8 h-8 text-orange-200" />
            </div>
          </Card>

          <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold">
                  {moduleData.connectedAreas.length}
                </div>
                <div className="text-purple-100">Bog'langan hududlar</div>
              </div>
              <MdLocationOn className="w-8 h-8 text-purple-200" />
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
                    ? "bg-white text-green-600 shadow-sm"
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
              {/* Qozonxonalar holati */}
              <Card>
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <MdLocalFireDepartment className="w-5 h-5 mr-2 text-green-500" />
                  Qozonxonalar holati
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                      <span className="font-medium">Faol</span>
                    </div>
                    <span className="text-green-600 font-bold">
                      {moduleData.activeBoilers}
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                      <span className="font-medium">To'xtagan</span>
                    </div>
                    <span className="text-red-600 font-bold">
                      {moduleData.stoppedBoilers}
                    </span>
                  </div>
                </div>
              </Card>

              {/* Harorat grafigi */}
              <Card>
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <MdThermostat className="w-5 h-5 mr-2 text-orange-500" />
                  Harorat grafigi (24 soat)
                </h3>
                <div className="space-y-2">
                  {moduleData.temperatureData.map((point, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between py-2"
                    >
                      <span className="text-sm text-slate-600">
                        {point.time}
                      </span>
                      <div className="flex items-center space-x-2">
                        <div className="w-20 bg-slate-200 rounded-full h-2">
                          <div
                            className="bg-orange-500 h-2 rounded-full"
                            style={{ width: `${(point.temp / 100) * 100}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-medium w-12">
                          {point.temp}°C
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Bog'langan hududlar */}
              <Card className="lg:col-span-2">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <MdLocationOn className="w-5 h-5 mr-2 text-blue-500" />
                  Bog'langan hududlar
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {moduleData.connectedAreas.map((area, index) => (
                    <div key={index} className="p-4 bg-slate-50 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold">{area.name}</h4>
                        <span className="text-lg font-bold text-green-600">
                          {area.coverage}%
                        </span>
                      </div>
                      <div className="text-sm text-slate-600 mb-2">
                        Aholi soni:{" "}
                        <span className="font-medium">
                          {area.population.toLocaleString()}
                        </span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <div
                          className="bg-green-500 h-2 rounded-full"
                          style={{ width: `${area.coverage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          )}

          {activeTab === "maintenance" && (
            <div className="space-y-6">
              <Card>
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <MdBuild className="w-5 h-5 mr-2 text-blue-500" />
                  Yaqin 7 kunda rejalashtirilgan ta'mir ishlari
                </h3>
                <div className="space-y-3">
                  {moduleData.plannedRepairs.map((repair) => (
                    <div
                      key={repair.id}
                      className="flex items-center justify-between p-4 bg-slate-50 rounded-lg"
                    >
                      <div className="flex items-center space-x-3">
                        <div
                          className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(
                            repair.priority
                          )}`}
                        >
                          {repair.priority === "high"
                            ? "Yuqori"
                            : repair.priority === "medium"
                            ? "O'rta"
                            : "Past"}
                        </div>
                        <div>
                          <div className="font-medium">{repair.object}</div>
                          <div className="text-sm text-slate-600">
                            {repair.type}
                          </div>
                        </div>
                      </div>
                      <div className="text-sm text-slate-500 flex items-center">
                        <MdSchedule className="w-4 h-4 mr-1" />
                        {repair.date}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          )}

          {activeTab === "alerts" && (
            <div className="space-y-6">
              <Card>
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <MdNotifications className="w-5 h-5 mr-2 text-red-500" />
                  Favqulodda vaziyat alertlari
                </h3>
                <div className="space-y-3">
                  {moduleData.emergencyAlerts.map((alert) => (
                    <div
                      key={alert.id}
                      className="flex items-center justify-between p-4 bg-slate-50 rounded-lg"
                    >
                      <div className="flex items-center space-x-3">
                        <div
                          className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                            alert.status
                          )}`}
                        >
                          {alert.status === "active" ? "Faol" : "Hal qilingan"}
                        </div>
                        <div>
                          <div className="font-medium">{alert.type}</div>
                          <div className="text-sm text-slate-600 flex items-center">
                            <MdLocationOn className="w-4 h-4 mr-1" />
                            {alert.location}
                          </div>
                        </div>
                      </div>
                      <div className="text-sm text-slate-500">{alert.time}</div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          )}

          {activeTab === "staff" && (
            <div className="space-y-6">
              <Card>
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <MdPeople className="w-5 h-5 mr-2 text-green-500" />
                  Mas'ul tashkilotlar
                </h3>
                <div className="space-y-4">
                  {moduleData.responsibleOrgs.map((org, index) => (
                    <div
                      key={index}
                      className="p-4 border border-slate-200 rounded-lg"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-slate-900">
                          {org.name}
                        </h4>
                        <a
                          href={`tel:${org.phone}`}
                          className="flex items-center space-x-1 text-green-600 hover:text-green-700 transition-colors"
                        >
                          <MdPhone className="w-4 h-4" />
                          <span className="text-sm">{org.phone}</span>
                        </a>
                      </div>
                      <div className="text-sm text-slate-600">
                        Rahbar: <span className="font-medium">{org.head}</span>
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

export default HeatingSystemModule;
