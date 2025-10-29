import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Card from "../../components/Card";
import {
  MdLocationCity,
  MdArrowBack,
  MdPeople,
  MdHealthAndSafety,
  MdScience,
  MdPhone,
  MdLocationOn,
  MdNotifications,
  MdCleanHands,
} from "react-icons/md";

const BSKModule = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");

  const moduleData = {
    staff: 103,
    medicalFacilities: [
      {
        id: 1,
        name: "Markaz poliklinikasi",
        type: "Poliklinika",
        address: "Navoi ko'chasi, 25",
        status: "active",
      },
      {
        id: 2,
        name: "Laboratoriya №1",
        type: "Laboratoriya",
        address: "Chilonzor MFY",
        status: "active",
      },
      {
        id: 3,
        name: "Sanitariya nazorati",
        type: "Nazorat markazi",
        address: "Markaz tumani",
        status: "active",
      },
    ],
    inspectionResults: [
      {
        date: "2025-10-29",
        location: "Bozor",
        result: "Qoniqarli",
        violations: 2,
      },
      {
        date: "2025-10-28",
        location: "Maktab oshxonasi",
        result: "Yaxshi",
        violations: 0,
      },
      {
        date: "2025-10-27",
        location: "Restoran",
        result: "Qoniqarsiz",
        violations: 5,
      },
    ],
    diseaseStats: {
      covid: 2,
      flu: 15,
      other: 8,
    },
    disinfectionWork: [
      {
        date: "2025-10-29",
        location: "Jamoat transporti",
        type: "Profilaktik dezinfeksiya",
      },
      { date: "2025-10-28", location: "Maktablar", type: "Muntazam tozalash" },
    ],
    emergencyAlerts: [
      {
        id: 1,
        type: "Gripp epidemiyasi",
        message: "Gripp holatlari ko'paymoqda",
        priority: "medium",
        time: "2 soat oldin",
      },
    ],
  };

  const tabs = [
    { id: "overview", label: "Umumiy holat", icon: MdHealthAndSafety },
    { id: "facilities", label: "Tibbiy obyektlar", icon: MdLocationCity },
    { id: "inspections", label: "Tekshiruvlar", icon: MdScience },
    { id: "diseases", label: "Kasallik statistikasi", icon: MdNotifications },
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
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center">
                  <MdLocationCity className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-slate-900">
                    BSK - Sanitariya nazorati
                  </h1>
                  <p className="text-slate-600">
                    Sog'liq nazorati va sanitariya tizimi
                  </p>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-teal-600">
                {moduleData.staff}
              </div>
              <div className="text-sm text-slate-600">Xodimlar soni</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          <Card className="bg-gradient-to-br from-teal-500 to-teal-600 text-white">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold">{moduleData.staff}</div>
                <div className="text-teal-100">Xodimlar soni</div>
              </div>
              <MdPeople className="w-8 h-8 text-teal-200" />
            </div>
          </Card>
          <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold">
                  {moduleData.medicalFacilities.length}
                </div>
                <div className="text-blue-100">Tibbiy obyektlar</div>
              </div>
              <MdHealthAndSafety className="w-8 h-8 text-blue-200" />
            </div>
          </Card>
          <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold">
                  {moduleData.inspectionResults.length}
                </div>
                <div className="text-green-100">So'nggi tekshiruvlar</div>
              </div>
              <MdScience className="w-8 h-8 text-green-200" />
            </div>
          </Card>
          <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold">
                  {moduleData.disinfectionWork.length}
                </div>
                <div className="text-purple-100">Dezinfeksiya ishlari</div>
              </div>
              <MdCleanHands className="w-8 h-8 text-purple-200" />
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
                    ? "bg-white text-teal-600 shadow-sm"
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
                  Shoshilinch ogohlantirishlar
                </h3>
                <div className="space-y-3">
                  {moduleData.emergencyAlerts.map((alert) => (
                    <div
                      key={alert.id}
                      className="p-3 bg-orange-50 rounded-lg border-l-4 border-orange-300"
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
                  <MdHealthAndSafety className="w-5 h-5 mr-2 text-green-500" />
                  Kasallik holatlari
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                    <span className="font-medium">COVID-19</span>
                    <span className="text-red-600 font-bold">
                      {moduleData.diseaseStats.covid}
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                    <span className="font-medium">Gripp</span>
                    <span className="text-yellow-600 font-bold">
                      {moduleData.diseaseStats.flu}
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <span className="font-medium">Boshqalar</span>
                    <span className="text-blue-600 font-bold">
                      {moduleData.diseaseStats.other}
                    </span>
                  </div>
                </div>
              </Card>
            </div>
          )}
          {activeTab === "facilities" && (
            <Card>
              <h3 className="text-lg font-semibold mb-4">
                Tibbiy muassasalar ro'yxati
              </h3>
              <div className="space-y-4">
                {moduleData.medicalFacilities.map((facility) => (
                  <div key={facility.id} className="p-4 bg-slate-50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-slate-900">
                        {facility.name}
                      </h4>
                      <span className="px-2 py-1 bg-green-100 text-green-600 rounded text-xs">
                        Faol
                      </span>
                    </div>
                    <div className="text-sm text-slate-600">
                      <div>Turi: {facility.type}</div>
                      <div className="flex items-center mt-1">
                        <MdLocationOn className="w-4 h-4 mr-1" />
                        {facility.address}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          )}
          {activeTab === "inspections" && (
            <Card>
              <h3 className="text-lg font-semibold mb-4">
                So'nggi tekshiruv natijalari
              </h3>
              <div className="space-y-4">
                {moduleData.inspectionResults.map((result, index) => (
                  <div key={index} className="p-4 bg-slate-50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-slate-900">
                        {result.location}
                      </h4>
                      <span
                        className={`px-2 py-1 rounded text-xs ${
                          result.result === "Yaxshi"
                            ? "bg-green-100 text-green-600"
                            : result.result === "Qoniqarli"
                            ? "bg-yellow-100 text-yellow-600"
                            : "bg-red-100 text-red-600"
                        }`}
                      >
                        {result.result}
                      </span>
                    </div>
                    <div className="text-sm text-slate-600">
                      <div>Sana: {result.date}</div>
                      <div>Buzilishlar: {result.violations} ta</div>
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

export default BSKModule;
