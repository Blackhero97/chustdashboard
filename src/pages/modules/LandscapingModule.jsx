import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Card from "../../components/Card";
import {
  MdPark,
  MdArrowBack,
  MdPeople,
  MdNature,
  MdWaterDrop,
  MdPhone,
  MdLocationOn,
  MdNotifications,
  MdGrass,
} from "react-icons/md";

const LandscapingModule = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");

  const moduleData = {
    totalParks: 25,
    activeStaff: 48,
    wateringSystems: 15,
    treesPlanted: 1245,
    parksList: [
      {
        id: 1,
        name: "Markaz bog'i",
        area: "2.5 gektar",
        trees: 185,
        status: "yaxshi",
        maintenance: "muntazam",
      },
      {
        id: 2,
        name: "Yoshlar bog'i",
        area: "1.8 gektar",
        trees: 120,
        status: "qoniqarli",
        maintenance: "haftada 2 marta",
      },
      {
        id: 3,
        name: "Bolalar bog'i",
        area: "1.2 gektar",
        trees: 95,
        status: "yaxshi",
        maintenance: "muntazam",
      },
      {
        id: 4,
        name: "Oromgoh bog'i",
        area: "3.0 gektar",
        trees: 220,
        status: "yomon",
        maintenance: "ta'mirlash kerak",
      },
    ],
    wateringSchedule: [
      {
        id: 1,
        area: "Markaz bog'i",
        time: "06:00",
        duration: "45 min",
        status: "completed",
      },
      {
        id: 2,
        area: "Yoshlar bog'i",
        time: "06:45",
        duration: "30 min",
        status: "in-progress",
      },
      {
        id: 3,
        area: "Ko'chalar",
        time: "07:15",
        duration: "60 min",
        status: "scheduled",
      },
    ],
    maintenanceWorks: [
      {
        id: 1,
        type: "Darakht ekish",
        location: "Navoi ko'chasi",
        date: "2025-11-05",
        workers: 6,
      },
      {
        id: 2,
        type: "Maysazor o'rnatish",
        location: "Markaz maydoni",
        date: "2025-11-03",
        workers: 8,
      },
      {
        id: 3,
        type: "Gulzor parvarishi",
        location: "Bolalar bog'i",
        date: "2025-10-30",
        workers: 4,
      },
    ],
    seasonalStats: {
      spring: { planted: 320, maintained: 15 },
      summer: { planted: 180, maintained: 25 },
      autumn: { planted: 450, maintained: 20 },
      winter: { planted: 295, maintained: 12 },
    },
    landscapeAlerts: [
      {
        id: 1,
        type: "Suv tanqisligi",
        message: "Markaz bog'ida suv tizimi nosoz",
        priority: "high",
        time: "2 soat oldin",
      },
      {
        id: 2,
        type: "Darakht kasalligi",
        message: "Yoshlar bog'ida darakhtlar kasallangan",
        priority: "medium",
        time: "1 kun oldin",
      },
    ],
  };

  const tabs = [
    { id: "overview", label: "Umumiy holat", icon: MdPark },
    { id: "parks", label: "Bog'lar", icon: MdNature },
    { id: "watering", label: "Sug'orish", icon: MdWaterDrop },
    { id: "maintenance", label: "Parvarish ishlari", icon: MdGrass },
  ];

  const getStatusColor = (status) => {
    switch (status) {
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

  const getWateringStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-600";
      case "in-progress":
        return "bg-blue-100 text-blue-600";
      case "scheduled":
        return "bg-gray-100 text-gray-600";
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
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                  <MdPark className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-slate-900">
                    Ko'kalamzorlashtirish
                  </h1>
                  <p className="text-slate-600">
                    Bog'lar va yashil maydonlar boshqaruvi
                  </p>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-green-600">
                {moduleData.totalParks}
              </div>
              <div className="text-sm text-slate-600">Bog'lar va parklar</div>
            </div>
          </div>
        </motion.div>

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
                  {moduleData.totalParks}
                </div>
                <div className="text-green-100">Bog'lar soni</div>
              </div>
              <MdPark className="w-8 h-8 text-green-200" />
            </div>
          </Card>
          <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold">
                  {moduleData.activeStaff}
                </div>
                <div className="text-blue-100">Faol ishchilar</div>
              </div>
              <MdPeople className="w-8 h-8 text-blue-200" />
            </div>
          </Card>
          <Card className="bg-gradient-to-br from-cyan-500 to-cyan-600 text-white">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold">
                  {moduleData.wateringSystems}
                </div>
                <div className="text-cyan-100">Sug'orish tizimlari</div>
              </div>
              <MdWaterDrop className="w-8 h-8 text-cyan-200" />
            </div>
          </Card>
          <Card className="bg-gradient-to-br from-amber-500 to-amber-600 text-white">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold">
                  {moduleData.treesPlanted}
                </div>
                <div className="text-amber-100">Ekilgan daraxtlar</div>
              </div>
              <MdNature className="w-8 h-8 text-amber-200" />
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
                  Ko'kalamzor ogohlantirishi
                </h3>
                <div className="space-y-3">
                  {moduleData.landscapeAlerts.map((alert) => (
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
                  <MdNature className="w-5 h-5 mr-2 text-green-500" />
                  Fasliy statistika
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <span className="font-medium">
                      Bahor (ekilgan/parvarish)
                    </span>
                    <span className="text-green-600 font-bold">
                      {moduleData.seasonalStats.spring.planted}/
                      {moduleData.seasonalStats.spring.maintained}
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                    <span className="font-medium">Yoz (ekilgan/parvarish)</span>
                    <span className="text-yellow-600 font-bold">
                      {moduleData.seasonalStats.summer.planted}/
                      {moduleData.seasonalStats.summer.maintained}
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                    <span className="font-medium">Kuz (ekilgan/parvarish)</span>
                    <span className="text-orange-600 font-bold">
                      {moduleData.seasonalStats.autumn.planted}/
                      {moduleData.seasonalStats.autumn.maintained}
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <span className="font-medium">
                      Qish (ekilgan/parvarish)
                    </span>
                    <span className="text-blue-600 font-bold">
                      {moduleData.seasonalStats.winter.planted}/
                      {moduleData.seasonalStats.winter.maintained}
                    </span>
                  </div>
                </div>
              </Card>
            </div>
          )}
          {activeTab === "parks" && (
            <Card>
              <h3 className="text-lg font-semibold mb-4">
                Bog'lar va parklar ro'yxati
              </h3>
              <div className="space-y-4">
                {moduleData.parksList.map((park) => (
                  <div key={park.id} className="p-4 bg-slate-50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-slate-900">
                        {park.name}
                      </h4>
                      <span
                        className={`px-2 py-1 rounded text-xs ${getStatusColor(
                          park.status
                        )}`}
                      >
                        {park.status}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-slate-600">
                      <div>
                        <div className="font-medium">Maydon:</div>
                        <div>{park.area}</div>
                      </div>
                      <div>
                        <div className="font-medium">Daraxtlar:</div>
                        <div>{park.trees} dona</div>
                      </div>
                      <div>
                        <div className="font-medium">Parvarish:</div>
                        <div>{park.maintenance}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          )}
          {activeTab === "watering" && (
            <Card>
              <h3 className="text-lg font-semibold mb-4">
                Bugungi sug'orish jadvali
              </h3>
              <div className="space-y-4">
                {moduleData.wateringSchedule.map((schedule) => (
                  <div key={schedule.id} className="p-4 bg-slate-50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-slate-900">
                        {schedule.area}
                      </h4>
                      <span
                        className={`px-2 py-1 rounded text-xs ${getWateringStatusColor(
                          schedule.status
                        )}`}
                      >
                        {schedule.status === "completed"
                          ? "Tugallandi"
                          : schedule.status === "in-progress"
                          ? "Jarayonda"
                          : "Rejalashtirilgan"}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm text-slate-600">
                      <div>
                        <div className="font-medium">Vaqt:</div>
                        <div>{schedule.time}</div>
                      </div>
                      <div>
                        <div className="font-medium">Davomiyligi:</div>
                        <div>{schedule.duration}</div>
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
                Parvarish ishlari jadvali
              </h3>
              <div className="space-y-4">
                {moduleData.maintenanceWorks.map((work) => (
                  <div key={work.id} className="p-4 bg-slate-50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-slate-900">
                        {work.type}
                      </h4>
                      <span className="text-sm text-slate-600">
                        {work.workers} ishchi
                      </span>
                    </div>
                    <div className="text-sm text-slate-600">
                      <div>Joyi: {work.location}</div>
                      <div>Sana: {work.date}</div>
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

export default LandscapingModule;
