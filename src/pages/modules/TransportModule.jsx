import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Card from "../../components/Card";
import {
  MdDirectionsBus,
  MdArrowBack,
  MdPeople,
  MdGpsFixed,
  MdBarChart,
  MdPhone,
  MdLocationOn,
  MdSpeed,
  MdWarning,
} from "react-icons/md";

const TransportModule = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");

  const moduleData = {
    totalObjects: 329,
    staff: 1,
    activeBuses: 285,
    faultyBuses: 44,
    avgDailyRoutes: 145,
    passengersToday: 12500,
    incidents: [
      {
        id: 1,
        bus: "01-A-001",
        issue: "Dvigatel nosozligi",
        time: "14:30",
        status: "repair",
      },
      {
        id: 2,
        bus: "01-B-025",
        issue: "Kechikish",
        time: "12:15",
        status: "resolved",
      },
    ],
    routes: [
      { id: 1, name: "Markaz - Chilonzor", buses: 15, status: "normal" },
      { id: 2, name: "Bozor - Maktab", buses: 12, status: "delayed" },
      { id: 3, name: "Shifoxona - Vokzal", buses: 8, status: "normal" },
    ],
  };

  const tabs = [
    { id: "overview", label: "Umumiy holat", icon: MdDirectionsBus },
    { id: "buses", label: "Avtobuslar GPS", icon: MdGpsFixed },
    { id: "routes", label: "Yo'nalishlar", icon: MdLocationOn },
    { id: "incidents", label: "Hodisalar", icon: MdWarning },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="p-6">
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
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center">
                  <MdDirectionsBus className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-slate-900">
                    Transport boshqarmasi
                  </h1>
                  <p className="text-slate-600">
                    Transport va jamoat tashish tizimlari
                  </p>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-indigo-600">
                {moduleData.activeBuses}/{moduleData.totalObjects}
              </div>
              <div className="text-sm text-slate-600">Faol avtobuslar</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          <Card className="bg-gradient-to-br from-indigo-500 to-indigo-600 text-white">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold">
                  {moduleData.totalObjects}
                </div>
                <div className="text-indigo-100">Jami obyektlar</div>
              </div>
              <MdDirectionsBus className="w-8 h-8 text-indigo-200" />
            </div>
          </Card>
          <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold">
                  {moduleData.activeBuses}
                </div>
                <div className="text-green-100">Faol avtobuslar</div>
              </div>
              <MdGpsFixed className="w-8 h-8 text-green-200" />
            </div>
          </Card>
          <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold">
                  {moduleData.avgDailyRoutes}
                </div>
                <div className="text-blue-100">Kunlik reyslar</div>
              </div>
              <MdSpeed className="w-8 h-8 text-blue-200" />
            </div>
          </Card>
          <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold">
                  {moduleData.passengersToday}
                </div>
                <div className="text-purple-100">Bugungi yo'lovchilar</div>
              </div>
              <MdPeople className="w-8 h-8 text-purple-200" />
            </div>
          </Card>
        </motion.div>

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
                    ? "bg-white text-indigo-600 shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === "overview" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <MdDirectionsBus className="w-5 h-5 mr-2 text-indigo-500" />
                  Avtobuslar holati
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <span className="font-medium">Faol</span>
                    <span className="text-green-600 font-bold">
                      {moduleData.activeBuses}
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                    <span className="font-medium">Nosoz</span>
                    <span className="text-red-600 font-bold">
                      {moduleData.faultyBuses}
                    </span>
                  </div>
                </div>
              </Card>
              <Card>
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <MdBarChart className="w-5 h-5 mr-2 text-blue-500" />
                  Bugungi statistika
                </h3>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    {moduleData.passengersToday}
                  </div>
                  <div className="text-sm text-slate-600">
                    Yo'lovchilar soni
                  </div>
                </div>
              </Card>
            </div>
          )}
          {activeTab === "routes" && (
            <Card>
              <h3 className="text-lg font-semibold mb-4">Yo'nalishlar</h3>
              <div className="space-y-3">
                {moduleData.routes.map((route) => (
                  <div key={route.id} className="p-4 bg-slate-50 rounded-lg">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold">{route.name}</h4>
                      <span
                        className={`px-2 py-1 rounded text-xs ${
                          route.status === "normal"
                            ? "bg-green-100 text-green-600"
                            : "bg-yellow-100 text-yellow-600"
                        }`}
                      >
                        {route.status === "normal" ? "Normal" : "Kechikish"}
                      </span>
                    </div>
                    <div className="text-sm text-slate-600">
                      Avtobuslar: {route.buses} ta
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default TransportModule;
