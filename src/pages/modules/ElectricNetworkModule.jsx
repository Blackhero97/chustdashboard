import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Card from "../../components/Card";
import { useLanguage } from "../../context/LanguageContext";
import {
  MdElectricBolt,
  MdArrowBack,
  MdPeople,
  MdPowerOff,
  MdWarning,
  MdPhone,
  MdLocationOn,
  MdTrendingUp,
  MdBuild,
  MdTimer,
  MdNotifications,
} from "react-icons/md";

const ElectricNetworkModule = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");

  // Real-time ma'lumotlar
  const moduleData = {
    totalObjects: 157,
    staff: 64,
    onlineZones: 142,
    offlineZones: 15,
    powerConsumption: {
      daily: 2850, // kWh
      monthly: 85500, // kWh
    },
    recentOutages: [
      {
        id: 1,
        location: "Chilonzor MFY",
        startTime: "14:20",
        duration: "2h 15m",
        reason: "Transformator nosozligi",
        status: "resolved",
      },
      {
        id: 2,
        location: "Markaz tumani",
        startTime: "09:45",
        duration: "45m",
        reason: "Profilaktik ishlar",
        status: "resolved",
      },
      {
        id: 3,
        location: "Navoi ko'chasi",
        startTime: "16:30",
        duration: "1h 30m",
        reason: "Quvvat liniyasi uzilishi",
        status: "investigating",
      },
    ],
    transformerNetwork: [
      {
        id: "T001",
        name: "Transformator №1",
        location: "Markaz",
        status: "online",
        load: 85,
        lastMaintenance: "2025-09-15",
      },
      {
        id: "T002",
        name: "Transformator №2",
        location: "Chilonzor",
        status: "maintenance",
        load: 0,
        lastMaintenance: "2025-10-20",
      },
      {
        id: "T003",
        name: "Transformator №3",
        location: "Navoi ko'chasi",
        status: "fault",
        load: 0,
        lastMaintenance: "2025-08-10",
      },
      {
        id: "T004",
        name: "Transformator №4",
        location: "Oybek MFY",
        status: "online",
        load: 92,
        lastMaintenance: "2025-10-01",
      },
    ],
    workSchedule: [
      {
        id: 1,
        object: "Transformator №2",
        date: "2025-11-02",
        type: "Profilaktika",
        duration: "4 soat",
        responsible: "Elektrik xizmati",
      },
      {
        id: 2,
        object: "Elektr liniya A-5",
        date: "2025-11-05",
        type: "Kapital ta'mir",
        duration: "8 soat",
        responsible: "Ta'mir guruhi",
      },
      {
        id: 3,
        object: "Transformator №7",
        date: "2025-11-08",
        type: "Diagnostika",
        duration: "2 soat",
        responsible: "Texnik nazorat",
      },
    ],
    autoAlerts: [
      {
        id: 1,
        type: "Transformator nosozligi",
        location: "Transformator №3",
        time: "15:45",
        priority: "critical",
        status: "active",
      },
      {
        id: 2,
        type: "Yuklanish yuqori",
        location: "Transformator №4",
        time: "13:20",
        priority: "warning",
        status: "monitoring",
      },
      {
        id: 3,
        type: "Kuchlanish pasayishi",
        location: "Elektr liniya B-2",
        time: "11:10",
        priority: "medium",
        status: "resolved",
      },
    ],
    serviceOrganizations: [
      {
        name: "Elektr tarmoqlari boshqarmasi",
        phone: "+998 62 226-45-80",
        head: "Rahmonov A.K.",
        emergency: true,
      },
      {
        name: "Transformator xizmati",
        phone: "+998 62 226-45-81",
        head: "Karimova L.M.",
        emergency: true,
      },
      {
        name: "Elektr ta'mirlash guruhi",
        phone: "+998 62 226-45-82",
        head: "Yusupov B.R.",
        emergency: true,
      },
      {
        name: "Texnik nazorat bo'limi",
        phone: "+998 62 226-45-83",
        head: "Toshmatova N.S.",
        emergency: false,
      },
    ],
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "online":
        return "text-green-600 bg-green-100";
      case "offline":
        return "text-red-600 bg-red-100";
      case "maintenance":
        return "text-yellow-600 bg-yellow-100";
      case "fault":
        return "text-red-600 bg-red-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case "online":
        return "Onlayn";
      case "offline":
        return "Oflayn";
      case "maintenance":
        return "Tamirda";
      case "fault":
        return "Nosoz";
      case "resolved":
        return "Hal qilingan";
      case "investigating":
        return "Tekshirilmoqda";
      case "active":
        return "Faol";
      case "monitoring":
        return "Kuzatilmoqda";
      default:
        return "Noma'lum";
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "critical":
        return "text-red-600 bg-red-100 border-red-200";
      case "warning":
        return "text-orange-600 bg-orange-100 border-orange-200";
      case "medium":
        return "text-yellow-600 bg-yellow-100 border-yellow-200";
      default:
        return "text-gray-600 bg-gray-100 border-gray-200";
    }
  };

  const tabs = [
    { id: "overview", label: "Umumiy holat", icon: MdElectricBolt },
    { id: "outages", label: "O'chirishlar", icon: MdPowerOff },
    { id: "maintenance", label: "Ish rejalari", icon: MdBuild },
    { id: "alerts", label: "Avtomatik alertlar", icon: MdNotifications },
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
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center">
                  <MdElectricBolt className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-slate-900">
                    Elektroset
                  </h1>
                  <p className="text-slate-600">Elektr tarmoqlari boshqaruvi</p>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-green-600">
                {moduleData.onlineZones}/{moduleData.totalObjects}
              </div>
              <div className="text-sm text-slate-600">Onlayn zonalar</div>
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
          <Card className="bg-gradient-to-br from-yellow-500 to-yellow-600 text-white">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold">
                  {moduleData.totalObjects}
                </div>
                <div className="text-yellow-100">Jami obyektlar</div>
              </div>
              <MdElectricBolt className="w-8 h-8 text-yellow-200" />
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

          <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold">
                  {moduleData.powerConsumption.daily}
                </div>
                <div className="text-green-100">Kunlik iste'mol (kWh)</div>
              </div>
              <MdTrendingUp className="w-8 h-8 text-green-200" />
            </div>
          </Card>

          <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold">
                  {moduleData.offlineZones}
                </div>
                <div className="text-purple-100">Oflayn zonalar</div>
              </div>
              <MdPowerOff className="w-8 h-8 text-purple-200" />
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
                    ? "bg-white text-yellow-600 shadow-sm"
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
              {/* Elektr ta'minoti holati */}
              <Card>
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <MdElectricBolt className="w-5 h-5 mr-2 text-yellow-500" />
                  Elektr ta'minoti holati
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                      <span className="font-medium">Onlayn zonalar</span>
                    </div>
                    <span className="text-green-600 font-bold">
                      {moduleData.onlineZones}
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                      <span className="font-medium">Oflayn zonalar</span>
                    </div>
                    <span className="text-red-600 font-bold">
                      {moduleData.offlineZones}
                    </span>
                  </div>
                  <div className="mt-4 p-4 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600 mb-1">
                        {Math.round(
                          (moduleData.onlineZones / moduleData.totalObjects) *
                            100
                        )}
                        %
                      </div>
                      <div className="text-sm text-slate-600">
                        Ta'minot darajasi
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Energiya iste'moli */}
              <Card>
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <MdTrendingUp className="w-5 h-5 mr-2 text-green-500" />
                  Energiya iste'moli
                </h3>
                <div className="space-y-4">
                  <div className="p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg">
                    <div className="text-center mb-2">
                      <div className="text-3xl font-bold text-green-600">
                        {moduleData.powerConsumption.daily}
                      </div>
                      <div className="text-sm text-slate-600">Kunlik (kWh)</div>
                    </div>
                  </div>
                  <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600">
                        {moduleData.powerConsumption.monthly}
                      </div>
                      <div className="text-sm text-slate-600">Oylik (kWh)</div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Transformator tarmog'i */}
              <Card className="lg:col-span-2">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <MdLocationOn className="w-5 h-5 mr-2 text-orange-500" />
                  Transformator va liniyalar tarmog'i
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {moduleData.transformerNetwork.map((transformer) => (
                    <div
                      key={transformer.id}
                      className="p-4 bg-slate-50 rounded-lg border-l-4 border-slate-300"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold">{transformer.name}</h4>
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                            transformer.status
                          )}`}
                        >
                          {getStatusText(transformer.status)}
                        </span>
                      </div>
                      <div className="text-sm text-slate-600 mb-2">
                        <MdLocationOn className="w-4 h-4 inline mr-1" />
                        {transformer.location}
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-600">Yuklanish:</span>
                        <span
                          className={`font-medium ${
                            transformer.load > 90
                              ? "text-red-600"
                              : transformer.load > 70
                              ? "text-yellow-600"
                              : "text-green-600"
                          }`}
                        >
                          {transformer.load}%
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-sm mt-1">
                        <span className="text-slate-600">So'nggi ta'mir:</span>
                        <span className="font-medium">
                          {transformer.lastMaintenance}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          )}

          {activeTab === "outages" && (
            <div className="space-y-6">
              <Card>
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <MdPowerOff className="w-5 h-5 mr-2 text-red-500" />
                  So'nggi o'chirishlar statistikasi
                </h3>
                <div className="space-y-3">
                  {moduleData.recentOutages.map((outage) => (
                    <div
                      key={outage.id}
                      className="p-4 bg-slate-50 rounded-lg border-l-4 border-red-300"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium ${
                              outage.status === "resolved"
                                ? "bg-green-100 text-green-600"
                                : "bg-yellow-100 text-yellow-600"
                            }`}
                          >
                            {getStatusText(outage.status)}
                          </span>
                          <span className="font-medium text-slate-900">
                            {outage.location}
                          </span>
                        </div>
                        <span className="text-sm text-slate-500">
                          {outage.startTime}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <div className="text-slate-600">
                          <span className="font-medium">Sabab:</span>{" "}
                          {outage.reason}
                        </div>
                        <div className="text-slate-600">
                          <MdTimer className="w-4 h-4 inline mr-1" />
                          <span className="font-medium">{outage.duration}</span>
                        </div>
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
                  Ta'mir va profilaktika jadvali
                </h3>
                <div className="space-y-3">
                  {moduleData.workSchedule.map((work) => (
                    <div key={work.id} className="p-4 bg-slate-50 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <h4 className="font-semibold text-slate-900">
                            {work.object}
                          </h4>
                          <p className="text-sm text-slate-600">{work.type}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-medium text-blue-600">
                            {work.date}
                          </div>
                          <div className="text-xs text-slate-500">
                            {work.duration}
                          </div>
                        </div>
                      </div>
                      <div className="text-sm text-slate-600">
                        <span className="font-medium">Mas'ul:</span>{" "}
                        {work.responsible}
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
                  <MdNotifications className="w-5 h-5 mr-2 text-orange-500" />
                  Avtomatik ogohlantirishlar
                </h3>
                <div className="space-y-3">
                  {moduleData.autoAlerts.map((alert) => (
                    <div
                      key={alert.id}
                      className={`p-4 rounded-lg border-l-4 ${getPriorityColor(
                        alert.priority
                      )}`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <div
                            className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(
                              alert.priority
                            )}`}
                          >
                            {alert.priority === "critical"
                              ? "Kritik"
                              : alert.priority === "warning"
                              ? "Ogohlantirish"
                              : "O'rta"}
                          </div>
                          <span className="font-medium text-slate-900">
                            {alert.type}
                          </span>
                        </div>
                        <span className="text-sm text-slate-500">
                          {alert.time}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-slate-600 flex items-center">
                          <MdLocationOn className="w-4 h-4 mr-1" />
                          {alert.location}
                        </div>
                        <div
                          className={`px-2 py-1 rounded text-xs font-medium ${
                            alert.status === "active"
                              ? "bg-red-100 text-red-600"
                              : alert.status === "monitoring"
                              ? "bg-yellow-100 text-yellow-600"
                              : "bg-green-100 text-green-600"
                          }`}
                        >
                          {getStatusText(alert.status)}
                        </div>
                      </div>
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
                  <MdPeople className="w-5 h-5 mr-2 text-yellow-500" />
                  Xizmat ko'rsatuvchi tashkilotlar
                </h3>
                <div className="space-y-4">
                  {moduleData.serviceOrganizations.map((org, index) => (
                    <div
                      key={index}
                      className={`p-4 border rounded-lg ${
                        org.emergency
                          ? "border-yellow-200 bg-yellow-50"
                          : "border-slate-200"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <h4 className="font-semibold text-slate-900">
                            {org.name}
                          </h4>
                          {org.emergency && (
                            <span className="px-2 py-1 bg-yellow-100 text-yellow-600 text-xs rounded-full font-medium">
                              24/7
                            </span>
                          )}
                        </div>
                        <a
                          href={`tel:${org.phone}`}
                          className="flex items-center space-x-1 text-yellow-600 hover:text-yellow-700 transition-colors"
                        >
                          <MdPhone className="w-4 h-4" />
                          <span className="text-sm font-medium">
                            {org.phone}
                          </span>
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

export default ElectricNetworkModule;
