import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Card from "../../components/Card";
import {
  MdLocalHospital,
  MdArrowBack,
  MdPeople,
  MdHealthAndSafety,
  MdEmergencyRecording,
  MdPhone,
  MdLocationOn,
  MdNotifications,
  MdMedicalServices,
} from "react-icons/md";

const HealthModule = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");

  const moduleData = {
    medicalFacilities: 17,
    activeStaff: 245,
    emergencyCalls: 12,
    patientsToday: 189,
    hospitals: [
      {
        id: 1,
        name: "Chust tuman kasalxonasi",
        type: "Umumiy kasalxona",
        beds: 120,
        doctors: 25,
        status: "active",
      },
      {
        id: 2,
        name: "Bolalar poliklinikasi",
        type: "Bolalar tibbiyoti",
        beds: 40,
        doctors: 12,
        status: "active",
      },
      {
        id: 3,
        name: "Ayollar konsultativ poliklinikasi",
        type: "Ayollar tibbiyoti",
        beds: 30,
        doctors: 8,
        status: "active",
      },
      {
        id: 4,
        name: "Stomatologiya poliklinikasi",
        type: "Stomatologiya",
        beds: 15,
        doctors: 6,
        status: "active",
      },
    ],
    emergencyHistory: [
      {
        id: 1,
        time: "14:25",
        type: "Yurak xurujida",
        address: "Navoi ko'chasi 45",
        status: "completed",
        duration: "15 min",
      },
      {
        id: 2,
        time: "13:40",
        type: "Yo'l hodisasi",
        address: "Markaz maydoni",
        status: "in-progress",
        duration: "35 min",
      },
      {
        id: 3,
        time: "12:15",
        type: "Allergik reaktsiya",
        address: "Chilonzor MFY",
        status: "completed",
        duration: "8 min",
      },
    ],
    staffStats: {
      doctors: 89,
      nurses: 156,
      emergency: 12,
      onDuty: 67,
    },
    healthAlerts: [
      {
        id: 1,
        type: "Gripp epidemiyasi",
        message: "Gripp holatlari ortib bormoqda",
        priority: "high",
        time: "1 soat oldin",
      },
      {
        id: 2,
        type: "Dori tanqisligi",
        message: "Insulin dorialari tugamoqda",
        priority: "medium",
        time: "3 soat oldin",
      },
    ],
  };

  const tabs = [
    { id: "overview", label: "Umumiy holat", icon: MdHealthAndSafety },
    { id: "hospitals", label: "Tibbiy muassasalar", icon: MdLocalHospital },
    { id: "emergency", label: "Tez yordam", icon: MdEmergencyRecording },
    { id: "staff", label: "Xodimlar", icon: MdPeople },
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
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center">
                  <MdLocalHospital className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-slate-900">
                    SSB - Sog'liqni saqlash
                  </h1>
                  <p className="text-slate-600">
                    Tibbiy xizmat va favqulodda tibbiy yordam tizimi
                  </p>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-red-600">
                {moduleData.medicalFacilities}
              </div>
              <div className="text-sm text-slate-600">Tibbiy muassasa faol</div>
            </div>
          </div>
        </motion.div>

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
                  {moduleData.medicalFacilities}
                </div>
                <div className="text-red-100">Tibbiy muassasalar</div>
              </div>
              <MdLocalHospital className="w-8 h-8 text-red-200" />
            </div>
          </Card>
          <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold">
                  {moduleData.activeStaff}
                </div>
                <div className="text-blue-100">Faol xodimlar</div>
              </div>
              <MdPeople className="w-8 h-8 text-blue-200" />
            </div>
          </Card>
          <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold">
                  {moduleData.emergencyCalls}
                </div>
                <div className="text-green-100">Tez yordam chaqiruvlari</div>
              </div>
              <MdPhone className="w-8 h-8 text-green-200" />
            </div>
          </Card>
          <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold">
                  {moduleData.patientsToday}
                </div>
                <div className="text-purple-100">Bugungi bemorlar</div>
              </div>
              <MdMedicalServices className="w-8 h-8 text-purple-200" />
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
                  <MdNotifications className="w-5 h-5 mr-2 text-red-500" />
                  Sog'liq ogohlantirishi
                </h3>
                <div className="space-y-3">
                  {moduleData.healthAlerts.map((alert) => (
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
                  <MdEmergencyRecording className="w-5 h-5 mr-2 text-orange-500" />
                  Tez yordam holati
                </h3>
                <div className="space-y-3">
                  {moduleData.emergencyHistory.slice(0, 3).map((emergency) => (
                    <div
                      key={emergency.id}
                      className="p-3 bg-slate-50 rounded-lg"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium text-slate-900">
                          {emergency.type}
                        </span>
                        <span
                          className={`px-2 py-1 rounded text-xs ${
                            emergency.status === "completed"
                              ? "bg-green-100 text-green-600"
                              : "bg-yellow-100 text-yellow-600"
                          }`}
                        >
                          {emergency.status === "completed"
                            ? "Tugallandi"
                            : "Jarayonda"}
                        </span>
                      </div>
                      <div className="text-sm text-slate-600">
                        <div>Vaqt: {emergency.time}</div>
                        <div>Manzil: {emergency.address}</div>
                        <div>Davomiyligi: {emergency.duration}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          )}
          {activeTab === "hospitals" && (
            <Card>
              <h3 className="text-lg font-semibold mb-4">
                Tibbiy muassasalar ro'yxati
              </h3>
              <div className="space-y-4">
                {moduleData.hospitals.map((hospital) => (
                  <div key={hospital.id} className="p-4 bg-slate-50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-slate-900">
                        {hospital.name}
                      </h4>
                      <span className="px-2 py-1 bg-green-100 text-green-600 rounded text-xs">
                        Faol
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-sm text-slate-600">
                      <div>
                        <div className="font-medium">Turi:</div>
                        <div>{hospital.type}</div>
                      </div>
                      <div>
                        <div className="font-medium">O'rinlar:</div>
                        <div>{hospital.beds} ta</div>
                      </div>
                      <div>
                        <div className="font-medium">Shifokorlar:</div>
                        <div>{hospital.doctors} kishi</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          )}
          {activeTab === "emergency" && (
            <Card>
              <h3 className="text-lg font-semibold mb-4">
                Tez yordam chaqiruvlari tarixi
              </h3>
              <div className="space-y-4">
                {moduleData.emergencyHistory.map((emergency) => (
                  <div
                    key={emergency.id}
                    className="p-4 bg-slate-50 rounded-lg"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-slate-900">
                        {emergency.type}
                      </h4>
                      <span
                        className={`px-2 py-1 rounded text-xs ${
                          emergency.status === "completed"
                            ? "bg-green-100 text-green-600"
                            : "bg-yellow-100 text-yellow-600"
                        }`}
                      >
                        {emergency.status === "completed"
                          ? "Tugallandi"
                          : "Jarayonda"}
                      </span>
                    </div>
                    <div className="text-sm text-slate-600">
                      <div>Vaqt: {emergency.time}</div>
                      <div className="flex items-center mt-1">
                        <MdLocationOn className="w-4 h-4 mr-1" />
                        {emergency.address}
                      </div>
                      <div>Davomiyligi: {emergency.duration}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          )}
          {activeTab === "staff" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <h3 className="text-lg font-semibold mb-4">
                  Xodimlar statistikasi
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <span className="font-medium">Shifokorlar</span>
                    <span className="text-blue-600 font-bold">
                      {moduleData.staffStats.doctors}
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <span className="font-medium">Hamshiralar</span>
                    <span className="text-green-600 font-bold">
                      {moduleData.staffStats.nurses}
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                    <span className="font-medium">Tez yordam</span>
                    <span className="text-red-600 font-bold">
                      {moduleData.staffStats.emergency}
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                    <span className="font-medium">Navbatchi xodimlar</span>
                    <span className="text-purple-600 font-bold">
                      {moduleData.staffStats.onDuty}
                    </span>
                  </div>
                </div>
              </Card>
              <Card>
                <h3 className="text-lg font-semibold mb-4">
                  Bugungi navbat jadvali
                </h3>
                <div className="space-y-3">
                  <div className="p-3 bg-slate-50 rounded-lg">
                    <div className="font-medium">
                      Ertalabki smena (8:00-14:00)
                    </div>
                    <div className="text-sm text-slate-600">
                      89 xodim navbatda
                    </div>
                  </div>
                  <div className="p-3 bg-blue-50 rounded-lg border-l-4 border-blue-300">
                    <div className="font-medium">Kungi smena (14:00-20:00)</div>
                    <div className="text-sm text-slate-600">
                      67 xodim navbatda (joriy)
                    </div>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-lg">
                    <div className="font-medium">Tungi smena (20:00-8:00)</div>
                    <div className="text-sm text-slate-600">
                      45 xodim navbatda
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default HealthModule;
