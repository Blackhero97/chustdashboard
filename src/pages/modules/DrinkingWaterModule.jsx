import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Card from "../../components/Card";
import { useLanguage } from "../../context/LanguageContext";
import {
  MdWater,
  MdArrowBack,
  MdPeople,
  MdCheckCircle,
  MdWarning,
  MdPhone,
  MdLocationOn,
  MdTrendingUp,
  MdTimer,
  MdSettings,
} from "react-icons/md";

const DrinkingWaterModule = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");

  // Real-time ma'lumotlar
  const moduleData = {
    totalObjects: 28,
    staff: 147,
    activeObjects: 25,
    faultyObjects: 3,
    avgPressure: 3.2, // bar
    dailySupply: 1250, // m³
    last24HoursCalls: [
      {
        id: 1,
        type: "Suv sizishi",
        location: "Navoi ko'chasi",
        time: "14:30",
        priority: "high",
      },
      {
        id: 2,
        type: "Quvur yorilishi",
        location: "Mustaqillik maydon",
        time: "12:15",
        priority: "critical",
      },
      {
        id: 3,
        type: "Bosim pastligi",
        location: "Oybek MFY",
        time: "09:45",
        priority: "medium",
      },
      {
        id: 4,
        type: "Suv sizishi",
        location: "Pushkin ko'chasi",
        time: "08:20",
        priority: "high",
      },
    ],
    responsibleOrgs: [
      {
        name: "Suvtaminot boshqarmasi",
        phone: "+998 62 226-45-67",
        head: "Karimov A.B.",
      },
      {
        name: "Avariya xizmati",
        phone: "+998 62 226-45-68",
        head: "Toshmatov U.S.",
      },
      {
        name: "Texnik nazorat",
        phone: "+998 62 226-45-69",
        head: "Rahimova M.K.",
      },
    ],
    pressureChart: [
      { time: "00:00", pressure: 3.1 },
      { time: "04:00", pressure: 3.3 },
      { time: "08:00", pressure: 3.5 },
      { time: "12:00", pressure: 3.2 },
      { time: "16:00", pressure: 3.0 },
      { time: "20:00", pressure: 3.4 },
    ],
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "critical":
        return "text-red-600 bg-red-100";
      case "high":
        return "text-orange-600 bg-orange-100";
      case "medium":
        return "text-yellow-600 bg-yellow-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  const tabs = [
    { id: "overview", label: "Umumiy holat", icon: MdSettings },
    { id: "incidents", label: "Hodisalar", icon: MdWarning },
    { id: "staff", label: "Xodimlar", icon: MdPeople },
    { id: "map", label: "Xarita", icon: MdLocationOn },
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
                  <MdWater className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-slate-900">
                    Ichimlik suvi
                  </h1>
                  <p className="text-slate-600">
                    Shahar ichimlik suv tizimlarini monitoring
                  </p>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-green-600">
                {moduleData.activeObjects}/{moduleData.totalObjects}
              </div>
              <div className="text-sm text-slate-600">Faol obyektlar</div>
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
                <div className="text-blue-100">Jami obyektlar</div>
              </div>
              <MdWater className="w-8 h-8 text-blue-200" />
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
                  {moduleData.avgPressure}
                </div>
                <div className="text-orange-100">O'rtacha bosim (bar)</div>
              </div>
              <MdTrendingUp className="w-8 h-8 text-orange-200" />
            </div>
          </Card>

          <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold">
                  {moduleData.dailySupply}
                </div>
                <div className="text-purple-100">Kunlik ta'minot (m³)</div>
              </div>
              <MdTimer className="w-8 h-8 text-purple-200" />
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
              {/* Status Overview */}
              <Card>
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <MdCheckCircle className="w-5 h-5 mr-2 text-green-500" />
                  Obyektlar holati
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                      <span className="font-medium">Ishlayotgan</span>
                    </div>
                    <span className="text-green-600 font-bold">
                      {moduleData.activeObjects}
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                      <span className="font-medium">Avariyali</span>
                    </div>
                    <span className="text-red-600 font-bold">
                      {moduleData.faultyObjects}
                    </span>
                  </div>
                </div>
              </Card>

              {/* Pressure Chart */}
              <Card>
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <MdTrendingUp className="w-5 h-5 mr-2 text-blue-500" />
                  Suv bosimi (24 soat)
                </h3>
                <div className="space-y-2">
                  {moduleData.pressureChart.map((point, index) => (
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
                            style={{ width: `${(point.pressure / 4) * 100}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-medium w-12">
                          {point.pressure} bar
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
                  So'nggi 24 soatdagi chaqiruvlar
                </h3>
                <div className="space-y-3">
                  {moduleData.last24HoursCalls.map((call) => (
                    <div
                      key={call.id}
                      className="flex items-center justify-between p-4 bg-slate-50 rounded-lg"
                    >
                      <div className="flex items-center space-x-3">
                        <div
                          className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(
                            call.priority
                          )}`}
                        >
                          {call.priority === "critical"
                            ? "Jiddiy"
                            : call.priority === "high"
                            ? "Yuqori"
                            : "O'rta"}
                        </div>
                        <div>
                          <div className="font-medium">{call.type}</div>
                          <div className="text-sm text-slate-600 flex items-center">
                            <MdLocationOn className="w-4 h-4 mr-1" />
                            {call.location}
                          </div>
                        </div>
                      </div>
                      <div className="text-sm text-slate-500">{call.time}</div>
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
                          className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 transition-colors"
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

          {activeTab === "map" && (
            <Card>
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <MdLocationOn className="w-5 h-5 mr-2 text-red-500" />
                Suv quvurlari tarmog'i
              </h3>
              <div className="h-96 bg-slate-100 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MdLocationOn className="w-12 h-12 text-slate-400 mx-auto mb-2" />
                  <p className="text-slate-500">Xarita yuklanimoqda...</p>
                  <p className="text-sm text-slate-400 mt-1">
                    Suv quvurlari va nosoz joylar ko'rsatiladi
                  </p>
                </div>
              </div>
            </Card>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default DrinkingWaterModule;
