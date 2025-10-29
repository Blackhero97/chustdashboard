import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Card from "../../components/Card";
import { useLanguage } from "../../context/LanguageContext";
import {
  MdPark,
  MdArrowBack,
  MdPeople,
  MdBuild,
  MdDirectionsCar,
  MdPhone,
  MdLocationOn,
  MdRecycling,
  MdGrass,
  MdCleaningServices,
} from "react-icons/md";

const UrbanDevelopmentModule = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");

  // Real-time ma'lumotlar
  const moduleData = {
    staff: 837,
    activeTeams: [
      {
        id: 1,
        name: "Tozalash guruhi №1",
        location: "Markaz tumani",
        members: 15,
        task: "Ko'cha tozalash",
        status: "active",
      },
      {
        id: 2,
        name: "Ko'kalamzor guruhi",
        location: "Chilonzor MFY",
        members: 12,
        task: "Daraxt parvarishi",
        status: "active",
      },
      {
        id: 3,
        name: "Obodonlashtirish guruhi",
        location: "Navoi ko'chasi",
        members: 18,
        task: "Bog' yaratish",
        status: "active",
      },
      {
        id: 4,
        name: "Chiqindi yig'ish guruhi",
        location: "Oybek MFY",
        members: 20,
        task: "Chiqindi yig'ish",
        status: "break",
      },
    ],
    last7DaysWork: [
      {
        date: "2025-10-29",
        area: 2450,
        type: "Tozalash",
        location: "Markaz tumani",
      },
      {
        date: "2025-10-28",
        area: 1800,
        type: "Ko'kalamzorlashtirish",
        location: "Chilonzor MFY",
      },
      {
        date: "2025-10-27",
        area: 3200,
        type: "Chiqindi yig'ish",
        location: "Butun shahar",
      },
      {
        date: "2025-10-26",
        area: 1600,
        type: "Daraxt ekish",
        location: "Navoi ko'chasi",
      },
      {
        date: "2025-10-25",
        area: 2100,
        type: "Tozalash",
        location: "Oybek MFY",
      },
    ],
    equipment: [
      { id: 1, type: "Yuk mashinasi", count: 12, working: 10, maintenance: 2 },
      {
        id: 2,
        type: "Supuruvchi mashina",
        count: 8,
        working: 7,
        maintenance: 1,
      },
      { id: 3, type: "Suv sepuvchi", count: 6, working: 6, maintenance: 0 },
      { id: 4, type: "Ekskovator", count: 4, working: 3, maintenance: 1 },
      { id: 5, type: "Traktor", count: 5, working: 4, maintenance: 1 },
    ],
    wasteData: {
      dailyCollection: 45, // tonna
      monthlyCollection: 1350, // tonna
      recycledPercentage: 23, // %
    },
    activeAreas: [
      { name: "Markaz tumani", progress: 85, priority: "high", workers: 45 },
      { name: "Chilonzor MFY", progress: 92, priority: "medium", workers: 32 },
      { name: "Navoi ko'chasi", progress: 78, priority: "high", workers: 28 },
      { name: "Oybek MFY", progress: 95, priority: "low", workers: 25 },
    ],
    responsibleOrganizations: [
      {
        name: "Obodonlashtirish boshqarmasi",
        phone: "+998 62 226-45-90",
        head: "Abdullayev K.R.",
        type: "main",
      },
      {
        name: "Tozalash xizmati",
        phone: "+998 62 226-45-91",
        head: "Karimova M.S.",
        type: "cleaning",
      },
      {
        name: "Ko'kalamzor xizmati",
        phone: "+998 62 226-45-92",
        head: "Yusupov R.A.",
        type: "landscaping",
      },
      {
        name: "Texnika xizmati",
        phone: "+998 62 226-45-93",
        head: "Toshmatova L.B.",
        type: "equipment",
      },
    ],
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "active":
        return "text-green-600 bg-green-100";
      case "break":
        return "text-yellow-600 bg-yellow-100";
      case "maintenance":
        return "text-orange-600 bg-orange-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case "active":
        return "Faol";
      case "break":
        return "Dam olish";
      case "maintenance":
        return "Tamirda";
      default:
        return "Noma'lum";
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high":
        return "border-red-300 bg-red-50";
      case "medium":
        return "border-yellow-300 bg-yellow-50";
      case "low":
        return "border-green-300 bg-green-50";
      default:
        return "border-gray-300 bg-gray-50";
    }
  };

  const tabs = [
    { id: "overview", label: "Umumiy holat", icon: MdPark },
    { id: "teams", label: "Faol guruhlar", icon: MdPeople },
    { id: "equipment", label: "Texnika", icon: MdDirectionsCar },
    { id: "waste", label: "Chiqindilar", icon: MdRecycling },
    { id: "areas", label: "Faol hududlar", icon: MdLocationOn },
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
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                  <MdPark className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-slate-900">
                    Obodonlashtirish boshqarmasi
                  </h1>
                  <p className="text-slate-600">
                    Shahar tozaligi va ko'kalamzorlashtirish
                  </p>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-green-600">
                {moduleData.staff}
              </div>
              <div className="text-sm text-slate-600">Xodimlar soni</div>
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
          <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold">{moduleData.staff}</div>
                <div className="text-green-100">Xodimlar soni</div>
              </div>
              <MdPeople className="w-8 h-8 text-green-200" />
            </div>
          </Card>

          <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold">
                  {moduleData.activeTeams.length}
                </div>
                <div className="text-blue-100">Faol guruhlar</div>
              </div>
              <MdBuild className="w-8 h-8 text-blue-200" />
            </div>
          </Card>

          <Card className="bg-gradient-to-br from-orange-500 to-orange-600 text-white">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold">
                  {moduleData.wasteData.dailyCollection}
                </div>
                <div className="text-orange-100">Kunlik chiqindi (t)</div>
              </div>
              <MdRecycling className="w-8 h-8 text-orange-200" />
            </div>
          </Card>

          <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold">
                  {moduleData.wasteData.recycledPercentage}%
                </div>
                <div className="text-purple-100">Qayta ishlangan</div>
              </div>
              <MdGrass className="w-8 h-8 text-purple-200" />
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

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === "overview" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* So'nggi 7 kunda bajarilgan ishlar */}
              <Card>
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <MdBuild className="w-5 h-5 mr-2 text-green-500" />
                  So'nggi 7 kunda bajarilgan ishlar (m²)
                </h3>
                <div className="space-y-3">
                  {moduleData.last7DaysWork.map((work, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 bg-slate-50 rounded-lg"
                    >
                      <div>
                        <div className="font-medium text-slate-900">
                          {work.type}
                        </div>
                        <div className="text-sm text-slate-600 flex items-center">
                          <MdLocationOn className="w-4 h-4 mr-1" />
                          {work.location}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-green-600">
                          {work.area.toLocaleString()} m²
                        </div>
                        <div className="text-xs text-slate-500">
                          {work.date}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Chiqindilar statistikasi */}
              <Card>
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <MdRecycling className="w-5 h-5 mr-2 text-orange-500" />
                  Chiqindilar yig'ish statistikasi
                </h3>
                <div className="space-y-4">
                  <div className="p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg">
                    <div className="text-center mb-2">
                      <div className="text-3xl font-bold text-orange-600">
                        {moduleData.wasteData.dailyCollection}
                      </div>
                      <div className="text-sm text-slate-600">
                        Kunlik (tonna)
                      </div>
                    </div>
                  </div>
                  <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                    <div className="text-center mb-2">
                      <div className="text-3xl font-bold text-blue-600">
                        {moduleData.wasteData.monthlyCollection}
                      </div>
                      <div className="text-sm text-slate-600">
                        Oylik (tonna)
                      </div>
                    </div>
                  </div>
                  <div className="p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600">
                        {moduleData.wasteData.recycledPercentage}%
                      </div>
                      <div className="text-sm text-slate-600">
                        Qayta ishlangan
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          )}

          {activeTab === "teams" && (
            <div className="space-y-6">
              <Card>
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <MdPeople className="w-5 h-5 mr-2 text-blue-500" />
                  Faol guruhlar ro'yxati
                </h3>
                <div className="space-y-4">
                  {moduleData.activeTeams.map((team) => (
                    <div key={team.id} className="p-4 bg-slate-50 rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold text-slate-900">
                          {team.name}
                        </h4>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                            team.status
                          )}`}
                        >
                          {getStatusText(team.status)}
                        </span>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                        <div className="text-slate-600">
                          <MdLocationOn className="w-4 h-4 inline mr-1" />
                          <span className="font-medium">Joylashuv:</span>{" "}
                          {team.location}
                        </div>
                        <div className="text-slate-600">
                          <MdPeople className="w-4 h-4 inline mr-1" />
                          <span className="font-medium">Xodimlar:</span>{" "}
                          {team.members} nafar
                        </div>
                        <div className="text-slate-600">
                          <MdBuild className="w-4 h-4 inline mr-1" />
                          <span className="font-medium">Vazifa:</span>{" "}
                          {team.task}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          )}

          {activeTab === "equipment" && (
            <div className="space-y-6">
              <Card>
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <MdDirectionsCar className="w-5 h-5 mr-2 text-orange-500" />
                  Texnika soni (maxsus mashinalar)
                </h3>
                <div className="space-y-4">
                  {moduleData.equipment.map((equip) => (
                    <div key={equip.id} className="p-4 bg-slate-50 rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold text-slate-900">
                          {equip.type}
                        </h4>
                        <div className="text-lg font-bold text-blue-600">
                          {equip.count} dona
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center justify-between p-2 bg-green-50 rounded">
                          <span className="text-sm text-slate-600">
                            Ishlamoqda:
                          </span>
                          <span className="font-medium text-green-600">
                            {equip.working}
                          </span>
                        </div>
                        <div className="flex items-center justify-between p-2 bg-orange-50 rounded">
                          <span className="text-sm text-slate-600">
                            Tamirda:
                          </span>
                          <span className="font-medium text-orange-600">
                            {equip.maintenance}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          )}

          {activeTab === "waste" && (
            <div className="space-y-6">
              <Card>
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <MdRecycling className="w-5 h-5 mr-2 text-green-500" />
                  Chiqindilar batafsil statistikasi
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg text-center">
                    <MdRecycling className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-blue-600 mb-2">
                      {moduleData.wasteData.dailyCollection}
                    </div>
                    <div className="text-sm text-slate-600">
                      Kunlik yig'ilgan (tonna)
                    </div>
                  </div>
                  <div className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg text-center">
                    <MdCleaningServices className="w-12 h-12 text-purple-600 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-purple-600 mb-2">
                      {moduleData.wasteData.monthlyCollection}
                    </div>
                    <div className="text-sm text-slate-600">
                      Oylik yig'ilgan (tonna)
                    </div>
                  </div>
                  <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-lg text-center">
                    <MdGrass className="w-12 h-12 text-green-600 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-green-600 mb-2">
                      {moduleData.wasteData.recycledPercentage}%
                    </div>
                    <div className="text-sm text-slate-600">
                      Qayta ishlangan foiz
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          )}

          {activeTab === "areas" && (
            <div className="space-y-6">
              <Card>
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <MdLocationOn className="w-5 h-5 mr-2 text-red-500" />
                  Xaritada faol hududlar
                </h3>
                <div className="space-y-4">
                  {moduleData.activeAreas.map((area, index) => (
                    <div
                      key={index}
                      className={`p-4 rounded-lg border-l-4 ${getPriorityColor(
                        area.priority
                      )}`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold text-slate-900">
                          {area.name}
                        </h4>
                        <div className="text-lg font-bold text-green-600">
                          {area.progress}%
                        </div>
                      </div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="text-sm text-slate-600">
                          <MdPeople className="w-4 h-4 inline mr-1" />
                          {area.workers} nafar ishchi
                        </div>
                        <div
                          className={`px-2 py-1 rounded text-xs font-medium ${
                            area.priority === "high"
                              ? "bg-red-100 text-red-600"
                              : area.priority === "medium"
                              ? "bg-yellow-100 text-yellow-600"
                              : "bg-green-100 text-green-600"
                          }`}
                        >
                          {area.priority === "high"
                            ? "Yuqori"
                            : area.priority === "medium"
                            ? "O'rta"
                            : "Past"}{" "}
                          ustuvorlik
                        </div>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-3">
                        <div
                          className="bg-green-500 h-3 rounded-full transition-all duration-500"
                          style={{ width: `${area.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Mas'ul tashkilotlar */}
                <div className="mt-8">
                  <h4 className="text-lg font-semibold mb-4 flex items-center">
                    <MdPhone className="w-5 h-5 mr-2 text-green-500" />
                    Mas'ul tashkilotlar
                  </h4>
                  <div className="space-y-3">
                    {moduleData.responsibleOrganizations.map((org, index) => (
                      <div
                        key={index}
                        className={`p-3 border rounded-lg ${
                          org.type === "main"
                            ? "border-green-200 bg-green-50"
                            : "border-slate-200"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <div className="flex items-center space-x-2">
                            <span className="font-medium text-slate-900">
                              {org.name}
                            </span>
                            {org.type === "main" && (
                              <span className="px-2 py-1 bg-green-100 text-green-600 text-xs rounded-full font-medium">
                                Asosiy
                              </span>
                            )}
                          </div>
                          <a
                            href={`tel:${org.phone}`}
                            className="flex items-center space-x-1 text-green-600 hover:text-green-700 transition-colors text-sm font-medium"
                          >
                            <MdPhone className="w-4 h-4" />
                            <span>{org.phone}</span>
                          </a>
                        </div>
                        <div className="text-xs text-slate-600">
                          Rahbar:{" "}
                          <span className="font-medium">{org.head}</span>
                        </div>
                      </div>
                    ))}
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

export default UrbanDevelopmentModule;
