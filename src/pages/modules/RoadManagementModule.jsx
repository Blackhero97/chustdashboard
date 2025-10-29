import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Card from "../../components/Card";
import {
  MdDirections,
  MdArrowBack,
  MdPeople,
  MdConstruction,
  MdTraffic,
  MdPhone,
  MdLocationOn,
  MdNotifications,
  MdWarning,
} from "react-icons/md";

const RoadManagementModule = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");

  const moduleData = {
    totalRoadSections: 7,
    totalRoads: 45,
    activeWorkers: 32,
    maintenanceWorks: 3,
    roadSections: [
      {
        id: 1,
        name: "Navoi ko'chasi",
        length: "2.5 km",
        condition: "yaxshi",
        lastMaintenance: "2025-09-15",
        trafficLevel: "yuqori",
      },
      {
        id: 2,
        name: "Mustaqillik shoh ko'chasi",
        length: "3.2 km",
        condition: "qoniqarli",
        lastMaintenance: "2025-08-20",
        trafficLevel: "o'rta",
      },
      {
        id: 3,
        name: "Chilonzor yo'li",
        length: "1.8 km",
        condition: "yomon",
        lastMaintenance: "2025-07-10",
        trafficLevel: "past",
      },
      {
        id: 4,
        name: "Markaz maydoni aylanmasi",
        length: "0.8 km",
        condition: "yaxshi",
        lastMaintenance: "2025-10-01",
        trafficLevel: "juda yuqori",
      },
    ],
    maintenanceSchedule: [
      {
        id: 1,
        road: "Chilonzor yo'li",
        type: "Asfalt yotqizish",
        date: "2025-11-05",
        status: "rejalashtirilgan",
      },
      {
        id: 2,
        road: "Bog'ishamol yo'li",
        type: "Chuqurcha to'ldirish",
        date: "2025-11-03",
        status: "jarayonda",
      },
      {
        id: 3,
        road: "Guliston ko'chasi",
        type: "Yo'l belgilarini yangilash",
        date: "2025-10-30",
        status: "tugallangan",
      },
    ],
    trafficIncidents: [
      {
        id: 1,
        time: "15:30",
        location: "Navoi ko'chasi x Mustaqillik",
        type: "Yo'l harakati buzilishi",
        severity: "o'rta",
      },
      {
        id: 2,
        time: "14:45",
        location: "Markaz maydoni",
        type: "Texnik nosozlik",
        severity: "past",
      },
      {
        id: 3,
        time: "13:20",
        location: "Chilonzor yo'li",
        type: "Yo'l ta'miri",
        severity: "yuqori",
      },
    ],
    roadAlerts: [
      {
        id: 1,
        type: "Yo'l yopilishi",
        message: "Chilonzor yo'lida ta'mir ishlari",
        priority: "high",
        time: "30 min oldin",
      },
      {
        id: 2,
        type: "Tirbandlik",
        message: "Markaz maydonida tirbandlik",
        priority: "medium",
        time: "1 soat oldin",
      },
    ],
  };

  const tabs = [
    { id: "overview", label: "Umumiy holat", icon: MdDirections },
    { id: "roads", label: "Yo'l uchastkalar", icon: MdTraffic },
    { id: "maintenance", label: "Ta'mir ishlari", icon: MdConstruction },
    { id: "incidents", label: "Hodisalar", icon: MdWarning },
  ];

  const getConditionColor = (condition) => {
    switch (condition) {
      case "yaxshi":
        return "bg-green-100 text-green-600";
      case "qoniqarli":
        return "bg-yellow-100 text-yellow-600";
      case "yomon":
        return "bg-red-100 text-red-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  const getTrafficColor = (level) => {
    switch (level) {
      case "juda yuqori":
        return "bg-red-100 text-red-600";
      case "yuqori":
        return "bg-orange-100 text-orange-600";
      case "o'rta":
        return "bg-yellow-100 text-yellow-600";
      case "past":
        return "bg-green-100 text-green-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

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
                <div className="w-12 h-12 bg-gradient-to-br from-gray-500 to-gray-600 rounded-xl flex items-center justify-center">
                  <MdDirections className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-slate-900">
                    Yo'l boshqaruvi
                  </h1>
                  <p className="text-slate-600">
                    Yo'llar holati va ta'mir ishlari nazorati
                  </p>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-gray-600">
                {moduleData.totalRoadSections}
              </div>
              <div className="text-sm text-slate-600">
                Yo'l uchastkasi nazorat ostida
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          <Card className="bg-gradient-to-br from-gray-500 to-gray-600 text-white">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold">
                  {moduleData.totalRoads}
                </div>
                <div className="text-gray-100">Jami yo'llar</div>
              </div>
              <MdDirections className="w-8 h-8 text-gray-200" />
            </div>
          </Card>
          <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold">
                  {moduleData.activeWorkers}
                </div>
                <div className="text-blue-100">Faol ishchilar</div>
              </div>
              <MdPeople className="w-8 h-8 text-blue-200" />
            </div>
          </Card>
          <Card className="bg-gradient-to-br from-orange-500 to-orange-600 text-white">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold">
                  {moduleData.maintenanceWorks}
                </div>
                <div className="text-orange-100">Ta'mir ishlari</div>
              </div>
              <MdConstruction className="w-8 h-8 text-orange-200" />
            </div>
          </Card>
          <Card className="bg-gradient-to-br from-red-500 to-red-600 text-white">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold">
                  {moduleData.trafficIncidents.length}
                </div>
                <div className="text-red-100">Joriy hodisalar</div>
              </div>
              <MdWarning className="w-8 h-8 text-red-200" />
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
                    ? "bg-white text-gray-600 shadow-sm"
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
                  <MdNotifications className="w-5 h-5 mr-2 text-orange-500" />
                  Yo'l ogohlantirishi
                </h3>
                <div className="space-y-3">
                  {moduleData.roadAlerts.map((alert) => (
                    <div
                      key={alert.id}
                      className={`p-3 rounded-lg border-l-4 ${
                        alert.priority === "high"
                          ? "bg-red-50 border-red-300"
                          : "bg-yellow-50 border-yellow-300"
                      }`}
                    >
                      <div className="font-medium text-slate-900">
                        {alert.type}
                      </div>
                      <div className="text-sm text-slate-600">
                        {alert.message}
                      </div>
                      <div className="text-xs text-slate-500 mt-1">
                        {alert.time}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
              <Card>
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <MdWarning className="w-5 h-5 mr-2 text-red-500" />
                  Joriy hodisalar
                </h3>
                <div className="space-y-3">
                  {moduleData.trafficIncidents.map((incident) => (
                    <div
                      key={incident.id}
                      className="p-3 bg-slate-50 rounded-lg"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium text-slate-900">
                          {incident.type}
                        </span>
                        <span
                          className={`px-2 py-1 rounded text-xs ${
                            incident.severity === "yuqori"
                              ? "bg-red-100 text-red-600"
                              : incident.severity === "o'rta"
                              ? "bg-yellow-100 text-yellow-600"
                              : "bg-green-100 text-green-600"
                          }`}
                        >
                          {incident.severity}
                        </span>
                      </div>
                      <div className="text-sm text-slate-600">
                        <div>Vaqt: {incident.time}</div>
                        <div>Joyi: {incident.location}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          )}
          {activeTab === "roads" && (
            <Card>
              <h3 className="text-lg font-semibold mb-4">
                Yo'l uchastkalar holati
              </h3>
              <div className="space-y-4">
                {moduleData.roadSections.map((road) => (
                  <div key={road.id} className="p-4 bg-slate-50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-slate-900">
                        {road.name}
                      </h4>
                      <span
                        className={`px-2 py-1 rounded text-xs ${getConditionColor(
                          road.condition
                        )}`}
                      >
                        {road.condition}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-slate-600">
                      <div>
                        <div className="font-medium">Uzunligi:</div>
                        <div>{road.length}</div>
                      </div>
                      <div>
                        <div className="font-medium">So'nggi ta'mir:</div>
                        <div>{road.lastMaintenance}</div>
                      </div>
                      <div>
                        <div className="font-medium">Trafik darajasi:</div>
                        <span
                          className={`px-2 py-1 rounded text-xs ${getTrafficColor(
                            road.trafficLevel
                          )}`}
                        >
                          {road.trafficLevel}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          )}
          {activeTab === "maintenance" && (
            <Card>
              <h3 className="text-lg font-semibold mb-4">
                Ta'mir ishlari jadvali
              </h3>
              <div className="space-y-4">
                {moduleData.maintenanceSchedule.map((work) => (
                  <div key={work.id} className="p-4 bg-slate-50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-slate-900">
                        {work.road}
                      </h4>
                      <span
                        className={`px-2 py-1 rounded text-xs ${
                          work.status === "tugallangan"
                            ? "bg-green-100 text-green-600"
                            : work.status === "jarayonda"
                            ? "bg-blue-100 text-blue-600"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {work.status}
                      </span>
                    </div>
                    <div className="text-sm text-slate-600">
                      <div>Ish turi: {work.type}</div>
                      <div>Sana: {work.date}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          )}
          {activeTab === "incidents" && (
            <Card>
              <h3 className="text-lg font-semibold mb-4">
                Yo'l hodisalari tarixi
              </h3>
              <div className="space-y-4">
                {moduleData.trafficIncidents.map((incident) => (
                  <div key={incident.id} className="p-4 bg-slate-50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-slate-900">
                        {incident.type}
                      </h4>
                      <span
                        className={`px-2 py-1 rounded text-xs ${
                          incident.severity === "yuqori"
                            ? "bg-red-100 text-red-600"
                            : incident.severity === "o'rta"
                            ? "bg-yellow-100 text-yellow-600"
                            : "bg-green-100 text-green-600"
                        }`}
                      >
                        {incident.severity}
                      </span>
                    </div>
                    <div className="text-sm text-slate-600">
                      <div>Vaqt: {incident.time}</div>
                      <div className="flex items-center mt-1">
                        <MdLocationOn className="w-4 h-4 mr-1" />
                        {incident.location}
                      </div>
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

export default RoadManagementModule;
