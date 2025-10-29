import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Card from "../../components/Card";
import { useLanguage } from "../../context/LanguageContext";
import {
  MdBusiness,
  MdArrowBack,
  MdPeople,
  MdSchool,
  MdSignalWifi4Bar,
  MdPhone,
  MdLocationOn,
  MdCalendarToday,
  MdBuild,
  MdElectricBolt,
  MdWater,
  MdLocalFireDepartment,
} from "react-icons/md";

const EducationModule = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");

  // Real-time ma'lumotlar
  const moduleData = {
    totalObjects: 63,
    staff: 3,
    schools: [
      {
        id: 1,
        name: "№1 umumta'lim maktabi",
        address: "Navoi ko'chasi, 15",
        director: "Karimov A.B.",
        students: 850,
        teachers: 42,
        status: "active",
      },
      {
        id: 2,
        name: "№3 umumta'lim maktabi",
        address: "Chilonzor MFY",
        director: "Yusupova M.K.",
        students: 720,
        teachers: 38,
        status: "active",
      },
      {
        id: 3,
        name: "№7 maktab-gimnaziya",
        address: "Markaz tumani",
        director: "Rahmonov S.A.",
        students: 650,
        teachers: 35,
        status: "maintenance",
      },
      {
        id: 4,
        name: "Ixtisoslashgan maktab",
        address: "Oybek MFY",
        director: "Toshmatova N.R.",
        students: 480,
        teachers: 28,
        status: "active",
      },
    ],
    totalStudents: 2700,
    totalTeachers: 143,
    internetStatus: {
      connected: 58,
      disconnected: 5,
      quality: "good", // good, average, poor
    },
    recentIssues: [
      {
        id: 1,
        type: "Elektr uzilishi",
        school: "№3 maktab",
        date: "2025-10-28",
        time: "14:20",
        status: "resolved",
      },
      {
        id: 2,
        type: "Internet aloqasi",
        school: "№7 gimnaziya",
        date: "2025-10-27",
        time: "09:30",
        status: "investigating",
      },
      {
        id: 3,
        type: "Isitish tizimi",
        school: "№1 maktab",
        date: "2025-10-26",
        time: "11:45",
        status: "resolved",
      },
    ],
    inspectionSchedule: [
      {
        id: 1,
        school: "№1 umumta'lim maktabi",
        date: "2025-11-05",
        type: "Xavfsizlik tekshiruvi",
        inspector: "Nazorat bo'limi",
      },
      {
        id: 2,
        school: "№3 umumta'lim maktabi",
        date: "2025-11-08",
        type: "Sanitariya nazorati",
        inspector: "SSB bo'limi",
      },
      {
        id: 3,
        school: "№7 maktab-gimnaziya",
        date: "2025-11-12",
        type: "Ta'lim sifati",
        inspector: "XTB komissiyasi",
      },
    ],
    responsibleDepartments: [
      {
        name: "Xalq ta'limi boshqarmasi",
        phone: "+998 62 226-45-85",
        head: "Abdullayev R.K.",
        department: "main",
      },
      {
        name: "Maktablar nazorati",
        phone: "+998 62 226-45-86",
        head: "Karimova S.M.",
        department: "monitoring",
      },
      {
        name: "Texnik ta'minot",
        phone: "+998 62 226-45-87",
        head: "Yusupov B.A.",
        department: "technical",
      },
    ],
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "active":
        return "text-green-600 bg-green-100";
      case "maintenance":
        return "text-yellow-600 bg-yellow-100";
      case "inactive":
        return "text-red-600 bg-red-100";
      case "resolved":
        return "text-green-600 bg-green-100";
      case "investigating":
        return "text-orange-600 bg-orange-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case "active":
        return "Faol";
      case "maintenance":
        return "Tamirda";
      case "inactive":
        return "Nofaol";
      case "resolved":
        return "Hal qilingan";
      case "investigating":
        return "Tekshirilmoqda";
      default:
        return "Noma'lum";
    }
  };

  const getInternetQualityColor = (quality) => {
    switch (quality) {
      case "good":
        return "text-green-600";
      case "average":
        return "text-yellow-600";
      case "poor":
        return "text-red-600";
      default:
        return "text-gray-600";
    }
  };

  const tabs = [
    { id: "overview", label: "Umumiy holat", icon: MdSchool },
    { id: "schools", label: "Maktablar ro'yxati", icon: MdBusiness },
    { id: "issues", label: "So'nggi muammolar", icon: MdBuild },
    { id: "inspections", label: "Tekshiruv jadvali", icon: MdCalendarToday },
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
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <MdBusiness className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-slate-900">
                    Chust shahar XTB va MTB
                  </h1>
                  <p className="text-slate-600">
                    Xalq ta'limi boshqarmasi monitoring
                  </p>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-purple-600">
                {moduleData.totalObjects}
              </div>
              <div className="text-sm text-slate-600">Ta'lim muassasalari</div>
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
          <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold">
                  {moduleData.totalObjects}
                </div>
                <div className="text-purple-100">Obyektlar soni</div>
              </div>
              <MdBusiness className="w-8 h-8 text-purple-200" />
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
                  {moduleData.totalStudents}
                </div>
                <div className="text-green-100">O'quvchilar soni</div>
              </div>
              <MdSchool className="w-8 h-8 text-green-200" />
            </div>
          </Card>

          <Card className="bg-gradient-to-br from-orange-500 to-orange-600 text-white">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold">
                  {moduleData.totalTeachers}
                </div>
                <div className="text-orange-100">O'qituvchilar soni</div>
              </div>
              <MdPeople className="w-8 h-8 text-orange-200" />
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
                    ? "bg-white text-purple-600 shadow-sm"
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
              {/* Internet va kommunal xizmat holati */}
              <Card>
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <MdSignalWifi4Bar className="w-5 h-5 mr-2 text-blue-500" />
                  Internet va kommunal xizmat holati
                </h3>
                <div className="space-y-4">
                  <div className="p-4 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">Internet aloqasi</span>
                      <span
                        className={`font-bold ${getInternetQualityColor(
                          moduleData.internetStatus.quality
                        )}`}
                      >
                        {moduleData.internetStatus.quality === "good"
                          ? "Yaxshi"
                          : "O'rtacha"}
                      </span>
                    </div>
                    <div className="text-sm text-slate-600 mb-2">
                      Ulangan:{" "}
                      <span className="font-medium text-green-600">
                        {moduleData.internetStatus.connected}
                      </span>
                      &nbsp;|&nbsp; Uzilgan:{" "}
                      <span className="font-medium text-red-600">
                        {moduleData.internetStatus.disconnected}
                      </span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div
                        className="bg-green-500 h-2 rounded-full"
                        style={{
                          width: `${
                            (moduleData.internetStatus.connected /
                              moduleData.totalObjects) *
                            100
                          }%`,
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Maktablar joylashuvi */}
              <Card>
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <MdLocationOn className="w-5 h-5 mr-2 text-red-500" />
                  Maktablar joylashuvi
                </h3>
                <div className="h-64 bg-slate-100 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MdLocationOn className="w-12 h-12 text-slate-400 mx-auto mb-2" />
                    <p className="text-slate-500">Xarita yuklanimoqda...</p>
                    <p className="text-sm text-slate-400 mt-1">
                      {moduleData.totalObjects} ta ta'lim muassasasi
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          )}

          {activeTab === "schools" && (
            <div className="space-y-6">
              <Card>
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <MdSchool className="w-5 h-5 mr-2 text-purple-500" />
                  Maktablar ro'yxati
                </h3>
                <div className="space-y-4">
                  {moduleData.schools.map((school) => (
                    <div
                      key={school.id}
                      className="p-4 bg-slate-50 rounded-lg border border-slate-200"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold text-slate-900">
                          {school.name}
                        </h4>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                            school.status
                          )}`}
                        >
                          {getStatusText(school.status)}
                        </span>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <div className="text-slate-600 mb-1">
                            <MdLocationOn className="w-4 h-4 inline mr-1" />
                            Manzil:{" "}
                            <span className="font-medium">
                              {school.address}
                            </span>
                          </div>
                          <div className="text-slate-600">
                            <MdPeople className="w-4 h-4 inline mr-1" />
                            Direktor:{" "}
                            <span className="font-medium">
                              {school.director}
                            </span>
                          </div>
                        </div>
                        <div>
                          <div className="text-slate-600 mb-1">
                            <MdSchool className="w-4 h-4 inline mr-1" />
                            O'quvchilar:{" "}
                            <span className="font-medium text-blue-600">
                              {school.students}
                            </span>
                          </div>
                          <div className="text-slate-600">
                            <MdPeople className="w-4 h-4 inline mr-1" />
                            O'qituvchilar:{" "}
                            <span className="font-medium text-green-600">
                              {school.teachers}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          )}

          {activeTab === "issues" && (
            <div className="space-y-6">
              <Card>
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <MdBuild className="w-5 h-5 mr-2 text-orange-500" />
                  So'nggi muammolar (elektr, suv, isitish)
                </h3>
                <div className="space-y-3">
                  {moduleData.recentIssues.map((issue) => (
                    <div
                      key={issue.id}
                      className="p-4 bg-slate-50 rounded-lg border-l-4 border-orange-300"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 bg-orange-100 rounded-lg">
                            {issue.type.includes("Elektr") && (
                              <MdElectricBolt className="w-4 h-4 text-orange-600" />
                            )}
                            {issue.type.includes("Internet") && (
                              <MdSignalWifi4Bar className="w-4 h-4 text-orange-600" />
                            )}
                            {issue.type.includes("Isitish") && (
                              <MdLocalFireDepartment className="w-4 h-4 text-orange-600" />
                            )}
                          </div>
                          <div>
                            <span className="font-medium text-slate-900">
                              {issue.type}
                            </span>
                            <div className="text-sm text-slate-600">
                              {issue.school}
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <span
                            className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(
                              issue.status
                            )}`}
                          >
                            {getStatusText(issue.status)}
                          </span>
                          <div className="text-xs text-slate-500 mt-1">
                            {issue.date} - {issue.time}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          )}

          {activeTab === "inspections" && (
            <div className="space-y-6">
              <Card>
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <MdCalendarToday className="w-5 h-5 mr-2 text-blue-500" />
                  Rejalashtirilgan tekshiruv sanalari
                </h3>
                <div className="space-y-4">
                  {moduleData.inspectionSchedule.map((inspection) => (
                    <div
                      key={inspection.id}
                      className="p-4 bg-slate-50 rounded-lg"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-slate-900">
                          {inspection.school}
                        </h4>
                        <div className="text-blue-600 font-medium">
                          {inspection.date}
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <div className="text-slate-600">
                          <span className="font-medium">Turi:</span>{" "}
                          {inspection.type}
                        </div>
                        <div className="text-slate-600">
                          <span className="font-medium">Mas'ul:</span>{" "}
                          {inspection.inspector}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Mas'ul bo'limlar */}
              <Card>
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <MdPhone className="w-5 h-5 mr-2 text-purple-500" />
                  Mas'ul bo'limlar
                </h3>
                <div className="space-y-4">
                  {moduleData.responsibleDepartments.map((dept, index) => (
                    <div
                      key={index}
                      className={`p-4 border rounded-lg ${
                        dept.department === "main"
                          ? "border-purple-200 bg-purple-50"
                          : "border-slate-200"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <h4 className="font-semibold text-slate-900">
                            {dept.name}
                          </h4>
                          {dept.department === "main" && (
                            <span className="px-2 py-1 bg-purple-100 text-purple-600 text-xs rounded-full font-medium">
                              Asosiy
                            </span>
                          )}
                        </div>
                        <a
                          href={`tel:${dept.phone}`}
                          className="flex items-center space-x-1 text-purple-600 hover:text-purple-700 transition-colors"
                        >
                          <MdPhone className="w-4 h-4" />
                          <span className="text-sm font-medium">
                            {dept.phone}
                          </span>
                        </a>
                      </div>
                      <div className="text-sm text-slate-600">
                        Rahbar: <span className="font-medium">{dept.head}</span>
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

export default EducationModule;
