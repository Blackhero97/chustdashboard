import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Card from "../../components/Card";
import { useLanguage } from "../../context/LanguageContext";
import {
  MdEmergency,
  MdArrowBack,
  MdPeople,
  MdNotifications,
  MdWarning,
  MdPhone,
  MdLocationOn,
  MdTimer,
  MdSpeed,
  MdLocalFireDepartment,
} from "react-icons/md";

const EmergencyModule = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");

  // Real-time ma'lumotlar
  const moduleData = {
    staff: 10,
    recentIncidents: [
      {
        id: 1,
        type: "Yong'in",
        location: "Chilonzor MFY",
        date: "2025-10-28",
        time: "14:30",
        priority: "high",
        status: "resolved",
      },
      {
        id: 2,
        type: "Suv toshqini",
        location: "Markaz tumani",
        date: "2025-10-27",
        time: "09:15",
        priority: "medium",
        status: "resolved",
      },
      {
        id: 3,
        type: "Gaz sizishi",
        location: "Navoi ko'chasi",
        date: "2025-10-26",
        time: "16:45",
        priority: "critical",
        status: "resolved",
      },
    ],
    alerts: [
      {
        id: 1,
        type: "Ob-havo ogohlantirishsi",
        message: "Kuchli shamol kutilmoqda",
        priority: "medium",
        time: "2 soat oldin",
      },
      {
        id: 2,
        type: "Texnik ogohlantirish",
        message: "Elektr uzilishi ehtimoli",
        priority: "low",
        time: "5 soat oldin",
      },
    ],
    responseTime: 8.5, // daqiqa
    activeTeams: [
      {
        id: 1,
        name: "Yong'in xizmati",
        location: "Patrul №1",
        members: 4,
        status: "ready",
      },
      {
        id: 2,
        name: "Tibbiy yordam",
        location: "Shifoxona",
        members: 3,
        status: "busy",
      },
      {
        id: 3,
        name: "Avariya guruhi",
        location: "Navoi ko'chasi",
        members: 5,
        status: "active",
      },
    ],
    emergencyContacts: [
      {
        name: "Favqulodda vaziyatlar bo'limi",
        phone: "101",
        head: "Karimov S.A.",
        type: "main",
      },
      {
        name: "Yong'in xizmati",
        phone: "998 62 226-45-90",
        head: "Rahmonov B.K.",
        type: "fire",
      },
      {
        name: "Tibbiy yordam",
        phone: "103",
        head: "Toshmatova N.M.",
        type: "medical",
      },
      { name: "Militsiya", phone: "102", head: "Yusupov A.R.", type: "police" },
    ],
    monthlyStats: [
      { month: "Yanvar", incidents: 5 },
      { month: "Fevral", incidents: 3 },
      { month: "Mart", incidents: 7 },
      { month: "Aprel", incidents: 4 },
      { month: "May", incidents: 6 },
      { month: "Iyun", incidents: 2 },
    ],
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "critical":
        return "text-red-600 bg-red-100 border-red-200";
      case "high":
        return "text-orange-600 bg-orange-100 border-orange-200";
      case "medium":
        return "text-yellow-600 bg-yellow-100 border-yellow-200";
      case "low":
        return "text-green-600 bg-green-100 border-green-200";
      default:
        return "text-gray-600 bg-gray-100 border-gray-200";
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "ready":
        return "text-green-600 bg-green-100";
      case "active":
        return "text-blue-600 bg-blue-100";
      case "busy":
        return "text-orange-600 bg-orange-100";
      case "resolved":
        return "text-green-600 bg-green-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case "ready":
        return "Tayyor";
      case "active":
        return "Faol";
      case "busy":
        return "Band";
      case "resolved":
        return "Hal qilingan";
      default:
        return "Noma'lum";
    }
  };

  const tabs = [
    { id: "overview", label: "Umumiy holat", icon: MdEmergency },
    { id: "incidents", label: "Oxirgi voqealar", icon: MdWarning },
    { id: "teams", label: "Faol guruhlar", icon: MdPeople },
    { id: "contacts", label: "Favqulodda aloqa", icon: MdPhone },
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
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center">
                  <MdEmergency className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-slate-900">
                    Favqulodda vaziyatlar bo'limi
                  </h1>
                  <p className="text-slate-600">
                    Favqulodda vaziyatlarni boshqarish tizimi
                  </p>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-green-600">
                {moduleData.responseTime}m
              </div>
              <div className="text-sm text-slate-600">
                O'rtacha reaksiya vaqti
              </div>
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
          <Card className="bg-gradient-to-br from-red-500 to-red-600 text-white">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold">{moduleData.staff}</div>
                <div className="text-red-100">Xodimlar soni</div>
              </div>
              <MdPeople className="w-8 h-8 text-red-200" />
            </div>
          </Card>

          <Card className="bg-gradient-to-br from-orange-500 to-orange-600 text-white">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold">
                  {moduleData.recentIncidents.length}
                </div>
                <div className="text-orange-100">So'nggi voqealar</div>
              </div>
              <MdWarning className="w-8 h-8 text-orange-200" />
            </div>
          </Card>

          <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold">
                  {moduleData.responseTime}
                </div>
                <div className="text-blue-100">Reaksiya vaqti (daq.)</div>
              </div>
              <MdSpeed className="w-8 h-8 text-blue-200" />
            </div>
          </Card>

          <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold">
                  {moduleData.activeTeams.length}
                </div>
                <div className="text-green-100">Harakatdagi guruhlar</div>
              </div>
              <MdLocalFireDepartment className="w-8 h-8 text-green-200" />
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
                    ? "bg-white text-red-600 shadow-sm"
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
              {/* Alertlar */}
              <Card>
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <MdNotifications className="w-5 h-5 mr-2 text-orange-500" />
                  Faol alertlar
                </h3>
                <div className="space-y-3">
                  {moduleData.alerts.map((alert) => (
                    <div
                      key={alert.id}
                      className={`p-3 rounded-lg border-l-4 ${getPriorityColor(
                        alert.priority
                      )}`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium text-sm">
                          {alert.type}
                        </span>
                        <span className="text-xs text-slate-500">
                          {alert.time}
                        </span>
                      </div>
                      <p className="text-sm text-slate-600">{alert.message}</p>
                    </div>
                  ))}
                </div>
              </Card>

              {/* 30 kunlik statistika */}
              <Card>
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <MdTimer className="w-5 h-5 mr-2 text-blue-500" />6 oylik
                  hodisalar statistikasi
                </h3>
                <div className="space-y-2">
                  {moduleData.monthlyStats.map((stat, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between py-2"
                    >
                      <span className="text-sm text-slate-600">
                        {stat.month}
                      </span>
                      <div className="flex items-center space-x-2">
                        <div className="w-20 bg-slate-200 rounded-full h-2">
                          <div
                            className="bg-red-500 h-2 rounded-full"
                            style={{ width: `${(stat.incidents / 10) * 100}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-medium w-8">
                          {stat.incidents}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          )}

          {activeTab === "incidents" && (
            <div className="space-y-6">
              <Card>
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <MdWarning className="w-5 h-5 mr-2 text-orange-500" />
                  So'nggi voqealar
                </h3>
                <div className="space-y-3">
                  {moduleData.recentIncidents.map((incident) => (
                    <div
                      key={incident.id}
                      className="p-4 bg-slate-50 rounded-lg border-l-4 border-red-300"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(
                              incident.priority
                            )}`}
                          >
                            {incident.priority === "critical"
                              ? "Kritik"
                              : incident.priority === "high"
                              ? "Yuqori"
                              : "O'rta"}
                          </span>
                          <span className="font-medium text-slate-900">
                            {incident.type}
                          </span>
                        </div>
                        <span
                          className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(
                            incident.status
                          )}`}
                        >
                          {getStatusText(incident.status)}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <div className="text-slate-600 flex items-center">
                          <MdLocationOn className="w-4 h-4 mr-1" />
                          {incident.location}
                        </div>
                        <div className="text-slate-500">
                          {incident.date} - {incident.time}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          )}

          {activeTab === "teams" && (
            <div className="space-y-6">
              <Card>
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <MdPeople className="w-5 h-5 mr-2 text-blue-500" />
                  Harakatdagi guruhlar (GPS joylashuv)
                </h3>
                <div className="space-y-4">
                  {moduleData.activeTeams.map((team) => (
                    <div key={team.id} className="p-4 bg-slate-50 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-slate-900">
                          {team.name}
                        </h4>
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                            team.status
                          )}`}
                        >
                          {getStatusText(team.status)}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <div className="text-slate-600 flex items-center">
                          <MdLocationOn className="w-4 h-4 mr-1" />
                          {team.location}
                        </div>
                        <div className="text-slate-600">
                          <MdPeople className="w-4 h-4 inline mr-1" />
                          {team.members} nafar
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          )}

          {activeTab === "contacts" && (
            <div className="space-y-6">
              <Card>
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <MdPhone className="w-5 h-5 mr-2 text-red-500" />
                  Favqulodda aloqa raqamlari
                </h3>
                <div className="space-y-4">
                  {moduleData.emergencyContacts.map((contact, index) => (
                    <div
                      key={index}
                      className={`p-4 border rounded-lg ${
                        contact.type === "main"
                          ? "border-red-200 bg-red-50"
                          : "border-slate-200"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <h4 className="font-semibold text-slate-900">
                            {contact.name}
                          </h4>
                          {contact.type === "main" && (
                            <span className="px-2 py-1 bg-red-100 text-red-600 text-xs rounded-full font-medium">
                              Asosiy
                            </span>
                          )}
                        </div>
                        <a
                          href={`tel:${contact.phone}`}
                          className="flex items-center space-x-1 text-red-600 hover:text-red-700 transition-colors font-bold text-lg"
                        >
                          <MdPhone className="w-5 h-5" />
                          <span>{contact.phone}</span>
                        </a>
                      </div>
                      <div className="text-sm text-slate-600">
                        Rahbar:{" "}
                        <span className="font-medium">{contact.head}</span>
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

export default EmergencyModule;
