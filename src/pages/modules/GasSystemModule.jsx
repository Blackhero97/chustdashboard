import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Card from "../../components/Card";
import { useLanguage } from "../../context/LanguageContext";
import {
  MdLocalGasStation,
  MdArrowBack,
  MdPeople,
  MdSpeed,
  MdWarning,
  MdPhone,
  MdLocationOn,
  MdTrendingUp,
  MdNotifications,
  MdTimer,
} from "react-icons/md";

const GasSystemModule = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");

  // Real-time ma'lumotlar
  const moduleData = {
    totalObjects: 31,
    staff: 55,
    currentPressure: 2.8, // bar
    normalPressureRange: [2.5, 3.2],
    emergencies: [
      {
        id: 1,
        type: "Gaz sizishi",
        location: "Amir Temur ko'chasi",
        time: "15:20",
        priority: "critical",
        status: "active",
      },
      {
        id: 2,
        type: "Bosim pastligi",
        location: "Chilonzor MFY",
        time: "12:35",
        priority: "high",
        status: "investigating",
      },
    ],
    last24HoursCalls: [
      {
        id: 1,
        type: "Gaz hidi",
        location: "Mustaqillik maydon",
        time: "14:15",
        resolved: true,
      },
      {
        id: 2,
        type: "Bosim o'zgarishi",
        location: "Navoi ko'chasi",
        time: "11:45",
        resolved: false,
      },
      {
        id: 3,
        type: "Quvur nosozligi",
        location: "Pushkin ko'chasi",
        time: "09:20",
        resolved: true,
      },
      {
        id: 4,
        type: "Gaz sizishi",
        location: "Oybek MFY",
        time: "07:50",
        resolved: false,
      },
    ],
    affectedAreas: [
      { name: "Markaz tumani", status: "normal", households: 2500 },
      { name: "Chilonzor MFY", status: "warning", households: 1800 },
      { name: "Navoi ko'chasi", status: "normal", households: 1200 },
      { name: "Amir Temur ko'chasi", status: "critical", households: 900 },
    ],
    gasTransmissionData: [
      { time: "00:00", flow: 85 },
      { time: "04:00", flow: 65 },
      { time: "08:00", flow: 95 },
      { time: "12:00", flow: 88 },
      { time: "16:00", flow: 92 },
      { time: "20:00", flow: 78 },
    ],
    serviceOrganizations: [
      {
        name: "Gaz ta'minoti boshqarmasi",
        phone: "+998 62 226-45-75",
        head: "Abdullayev M.R.",
        emergency: true,
      },
      {
        name: "Gaz xavfsizligi xizmati",
        phone: "+998 62 226-45-76",
        head: "Karimov B.S.",
        emergency: true,
      },
      {
        name: "Texnik nazorat bo'limi",
        phone: "+998 62 226-45-77",
        head: "Yusupova N.A.",
        emergency: false,
      },
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
      default:
        return "text-gray-600 bg-gray-100 border-gray-200";
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "critical":
        return "text-red-600 bg-red-100";
      case "warning":
        return "text-orange-600 bg-orange-100";
      case "normal":
        return "text-green-600 bg-green-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case "critical":
        return "Kritik";
      case "warning":
        return "Ogohlantirish";
      case "normal":
        return "Normal";
      default:
        return "Noma'lum";
    }
  };

  const tabs = [
    { id: "overview", label: "Umumiy holat", icon: MdSpeed },
    { id: "emergencies", label: "Avariya holatlari", icon: MdWarning },
    { id: "calls", label: "24 soatlik chaqiruvlar", icon: MdTimer },
    { id: "staff", label: "Xizmat tashkilotlari", icon: MdPeople },
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
                  <MdLocalGasStation className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-slate-900">
                    Gaz ta'minoti
                  </h1>
                  <p className="text-slate-600">
                    Shahar gaz ta'minoti tizimi monitoring
                  </p>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-red-600">
                {moduleData.currentPressure} bar
              </div>
              <div className="text-sm text-slate-600">Joriy bosim</div>
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
                <div className="text-3xl font-bold">
                  {moduleData.totalObjects}
                </div>
                <div className="text-red-100">Jami obyektlar</div>
              </div>
              <MdLocalGasStation className="w-8 h-8 text-red-200" />
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
                  {moduleData.currentPressure}
                </div>
                <div className="text-orange-100">Gaz bosimi (bar)</div>
              </div>
              <MdSpeed className="w-8 h-8 text-orange-200" />
            </div>
          </Card>

          <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold">
                  {moduleData.emergencies.length}
                </div>
                <div className="text-purple-100">Faol avariyalar</div>
              </div>
              <MdNotifications className="w-8 h-8 text-purple-200" />
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
              {/* Real-time bosim */}
              <Card>
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <MdSpeed className="w-5 h-5 mr-2 text-red-500" />
                  Real-time gaz bosimi
                </h3>
                <div className="text-center mb-4">
                  <div className="text-4xl font-bold text-red-600 mb-2">
                    {moduleData.currentPressure} bar
                  </div>
                  <div className="text-sm text-slate-600">
                    Normal diapazon: {moduleData.normalPressureRange[0]} -{" "}
                    {moduleData.normalPressureRange[1]} bar
                  </div>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-4 mb-2">
                  <div
                    className="bg-red-500 h-4 rounded-full transition-all duration-500"
                    style={{
                      width: `${
                        (moduleData.currentPressure /
                          moduleData.normalPressureRange[1]) *
                        100
                      }%`,
                    }}
                  ></div>
                </div>
                <div
                  className={`text-center p-2 rounded-lg ${
                    moduleData.currentPressure >=
                      moduleData.normalPressureRange[0] &&
                    moduleData.currentPressure <=
                      moduleData.normalPressureRange[1]
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {moduleData.currentPressure >=
                    moduleData.normalPressureRange[0] &&
                  moduleData.currentPressure <=
                    moduleData.normalPressureRange[1]
                    ? "Normal diapazon"
                    : "Diqqat talab qiladi!"}
                </div>
              </Card>

              {/* Gaz uzatish grafigi */}
              <Card>
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <MdTrendingUp className="w-5 h-5 mr-2 text-blue-500" />
                  Gaz uzatish (24 soat)
                </h3>
                <div className="space-y-2">
                  {moduleData.gasTransmissionData.map((point, index) => (
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
                            className="bg-blue-500 h-2 rounded-full"
                            style={{ width: `${point.flow}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-medium w-12">
                          {point.flow}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Ta'sirlangan hududlar */}
              <Card className="lg:col-span-2">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <MdLocationOn className="w-5 h-5 mr-2 text-orange-500" />
                  Xaritada ta'sirlangan joylar
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {moduleData.affectedAreas.map((area, index) => (
                    <div
                      key={index}
                      className="p-4 bg-slate-50 rounded-lg border-l-4 border-slate-300"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold">{area.name}</h4>
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                            area.status
                          )}`}
                        >
                          {getStatusText(area.status)}
                        </span>
                      </div>
                      <div className="text-sm text-slate-600">
                        Uy xo'jaliklari:{" "}
                        <span className="font-medium">
                          {area.households.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          )}

          {activeTab === "emergencies" && (
            <div className="space-y-6">
              <Card>
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <MdWarning className="w-5 h-5 mr-2 text-red-500" />
                  Avariya holatlari
                </h3>
                <div className="space-y-3">
                  {moduleData.emergencies.map((emergency) => (
                    <div
                      key={emergency.id}
                      className={`p-4 rounded-lg border-l-4 ${getPriorityColor(
                        emergency.priority
                      )}`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <div
                            className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(
                              emergency.priority
                            )}`}
                          >
                            {emergency.priority === "critical"
                              ? "Kritik"
                              : "Yuqori"}
                          </div>
                          <span className="font-medium text-red-700">
                            {emergency.type}
                          </span>
                        </div>
                        <span className="text-sm text-slate-500">
                          {emergency.time}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-slate-600 flex items-center">
                          <MdLocationOn className="w-4 h-4 mr-1" />
                          {emergency.location}
                        </div>
                        <div
                          className={`px-2 py-1 rounded text-xs font-medium ${
                            emergency.status === "active"
                              ? "bg-red-100 text-red-600"
                              : "bg-yellow-100 text-yellow-600"
                          }`}
                        >
                          {emergency.status === "active"
                            ? "Faol"
                            : "Tekshirilmoqda"}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          )}

          {activeTab === "calls" && (
            <div className="space-y-6">
              <Card>
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <MdTimer className="w-5 h-5 mr-2 text-blue-500" />
                  24 soatlik chaqiruvlar ro'yxati
                </h3>
                <div className="space-y-3">
                  {moduleData.last24HoursCalls.map((call) => (
                    <div
                      key={call.id}
                      className="flex items-center justify-between p-4 bg-slate-50 rounded-lg"
                    >
                      <div className="flex items-center space-x-3">
                        <div
                          className={`w-3 h-3 rounded-full ${
                            call.resolved ? "bg-green-500" : "bg-red-500"
                          }`}
                        ></div>
                        <div>
                          <div className="font-medium">{call.type}</div>
                          <div className="text-sm text-slate-600 flex items-center">
                            <MdLocationOn className="w-4 h-4 mr-1" />
                            {call.location}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-slate-500">
                          {call.time}
                        </div>
                        <div
                          className={`text-xs font-medium ${
                            call.resolved ? "text-green-600" : "text-red-600"
                          }`}
                        >
                          {call.resolved ? "Hal qilingan" : "Jarayonda"}
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
                  <MdPeople className="w-5 h-5 mr-2 text-red-500" />
                  Xizmat ko'rsatuvchi tashkilotlar
                </h3>
                <div className="space-y-4">
                  {moduleData.serviceOrganizations.map((org, index) => (
                    <div
                      key={index}
                      className={`p-4 border rounded-lg ${
                        org.emergency
                          ? "border-red-200 bg-red-50"
                          : "border-slate-200"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <h4 className="font-semibold text-slate-900">
                            {org.name}
                          </h4>
                          {org.emergency && (
                            <span className="px-2 py-1 bg-red-100 text-red-600 text-xs rounded-full font-medium">
                              Shoshilinch
                            </span>
                          )}
                        </div>
                        <a
                          href={`tel:${org.phone}`}
                          className="flex items-center space-x-1 text-red-600 hover:text-red-700 transition-colors"
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

export default GasSystemModule;
