import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import { useLanguage } from "../context/LanguageContext";
import { getCurrentTime } from "../utils";
// Premium iconlar
import {
  MdWater,
  MdLocalFireDepartment,
  MdLocalGasStation,
  MdElectricBolt,
  MdBusiness,
  MdPark,
  MdEmergency,
  MdConstruction,
  MdCleaningServices,
  MdDirectionsBus,
  MdSecurity,
  MdLocationCity,
  MdSearch,
} from "react-icons/md";

const Home = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [currentTime, setCurrentTime] = useState(getCurrentTime());
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Real-time like stats from attachment
  const dashboardStats = [
    {
      id: 1,
      title: "Ichimlik suvi",
      activeValue: 28,
      totalValue: 147,
      icon: MdWater,
      color: "from-blue-500 to-blue-600",
      status: "active",
      route: "/modules/drinking-water",
    },
    {
      id: 2,
      title: "Issiqlik manbai",
      activeValue: 39,
      totalValue: 27,
      icon: MdLocalFireDepartment,
      color: "from-green-500 to-green-600",
      status: "active",
      route: "/modules/heating-system",
    },
    {
      id: 3,
      title: "Gaz",
      activeValue: 31,
      totalValue: 55,
      icon: MdLocalGasStation,
      color: "from-red-500 to-red-600",
      status: "maintenance",
      route: "/modules/gas-system",
    },
    {
      id: 4,
      title: "Elektroset",
      activeValue: 157,
      totalValue: 64,
      icon: MdElectricBolt,
      color: "from-yellow-500 to-yellow-600",
      status: "active",
      route: "/modules/electric-network",
    },
    {
      id: 5,
      title: "Chust shahar XTB va MTB",
      activeValue: 63,
      totalValue: 3,
      icon: MdBusiness,
      color: "from-purple-500 to-purple-600",
      status: "active",
      route: "/modules/education",
    },
    {
      id: 6,
      title: "Obodonlashtirish boshqarmasi",
      activeValue: 837,
      totalValue: 0,
      icon: MdPark,
      color: "from-green-500 to-green-600",
      status: "active",
      route: "/modules/urban-development",
    },
    {
      id: 7,
      title: "Favqulodda vaziyatlar Bolimi",
      activeValue: 0,
      totalValue: 10,
      icon: MdEmergency,
      color: "from-red-500 to-red-600",
      status: "inactive",
      route: "/modules/emergency",
    },
    {
      id: 8,
      title: "Yollardan foydalanish UK",
      activeValue: 0,
      totalValue: 7,
      icon: MdConstruction,
      color: "from-gray-500 to-gray-600",
      status: "inactive",
      route: "/modules/road-management",
    },
    {
      id: 9,
      title: "Toza hudud",
      activeValue: 441,
      totalValue: 66,
      icon: MdCleaningServices,
      color: "from-blue-500 to-blue-600",
      status: "active",
      route: "/modules/clean-area",
    },
    {
      id: 10,
      title: "Yolkalam Davlat Muassasasi",
      activeValue: 0,
      totalValue: 6,
      icon: MdConstruction,
      color: "from-orange-500 to-orange-600",
      status: "maintenance",
      route: "/modules/landscaping",
    },
    {
      id: 11,
      title: "Transport boshqarmasi",
      activeValue: 324,
      totalValue: 1,
      icon: MdDirectionsBus,
      color: "from-indigo-500 to-indigo-600",
      status: "active",
      route: "/modules/transport",
    },
    {
      id: 12,
      title: "BSK",
      activeValue: 0,
      totalValue: 103,
      icon: MdLocationCity,
      color: "from-teal-500 to-teal-600",
      status: "inactive",
      route: "/modules/bsk",
    },
    {
      id: 13,
      title: "Chust shahar SSB",
      activeValue: 17,
      totalValue: 2,
      icon: MdSecurity,
      color: "from-red-500 to-red-600",
      status: "active",
      route: "/modules/health",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "active":
        return "text-green-500";
      case "maintenance":
        return "text-yellow-500";
      case "inactive":
        return "text-red-500";
      default:
        return "text-gray-500";
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case "active":
        return "Faol";
      case "maintenance":
        return "Tamir";
      case "inactive":
        return "Nofaol";
      default:
        return "Nomalum";
    }
  };

  // Filter dashboard stats based on search term
  const filteredStats = dashboardStats.filter((stat) =>
    stat.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle card click
  const handleCardClick = (stat) => {
    if (stat.route) {
      navigate(stat.route);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 relative">
      {/* Background with animated dots/particles similar to attachment */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-green-500/10"></div>
        {/* Animated background elements */}
        {Array.from({ length: 50 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full"
            initial={{
              x: Math.random() * 1000,
              y: Math.random() * 800,
              opacity: Math.random() * 0.5,
            }}
            animate={{
              y: [null, Math.random() * 800],
              opacity: [null, Math.random() * 0.8, 0],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 p-6">
        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="max-w-md mx-auto relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <MdSearch className="h-5 w-5 text-slate-400" />
            </div>
            <input
              type="text"
              placeholder="Xizmatlarni qidirish..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-10 pr-3 py-3 border border-slate-300 rounded-lg leading-5 bg-white placeholder-slate-500 focus:outline-none focus:placeholder-slate-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-slate-900"
            />
          </div>
        </motion.div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
          {filteredStats.length === 0 && searchTerm ? (
            <div className="col-span-full text-center py-12">
              <div className="text-slate-400 text-6xl mb-4">
                <MdSearch className="mx-auto" />
              </div>
              <h3 className="text-xl font-medium text-slate-600 mb-2">
                Hech narsa topilmadi
              </h3>
              <p className="text-slate-500">
                "{searchTerm}" so'rovi bo'yicha natija topilmadi
              </p>
            </div>
          ) : (
            filteredStats.map((stat, index) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div
                  className="bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1 group border border-gray-100"
                  onClick={() => handleCardClick(stat)}
                >
                  {/* Icon */}
                  <div className="flex items-center justify-between mb-3">
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center`}
                    >
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div
                      className={`text-xs font-medium px-2 py-1 rounded ${
                        stat.status === "active"
                          ? "bg-green-100 text-green-600"
                          : stat.status === "maintenance"
                          ? "bg-yellow-100 text-yellow-600"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {getStatusText(stat.status)}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-gray-900 font-semibold text-base mb-6 leading-tight">
                    {stat.title}
                  </h3>

                  {/* Stats */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500 text-sm">Faol:</span>
                      <span className="text-green-500 font-bold text-2xl">
                        {stat.activeValue}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500 text-sm">Jami:</span>
                      <span className="text-gray-700 font-semibold text-lg">
                        {stat.totalValue}
                      </span>
                    </div>
                  </div>

                  {/* Progress bar */}
                  <div className="mt-4">
                    <div className="w-full bg-gray-200 rounded-full h-1">
                      <div
                        className={`bg-gradient-to-r ${stat.color} h-1 rounded-full transition-all duration-500`}
                        style={{
                          width:
                            stat.totalValue > 0
                              ? `${Math.min(
                                  (stat.activeValue / stat.totalValue) * 100,
                                  100
                                )}%`
                              : "100%",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </div>

        {/* Additional Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white border-blue-400 shadow-lg">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">
                {filteredStats.filter((s) => s.status === "active").length}
              </div>
              <div className="text-blue-100">Faol tizimlar</div>
            </div>
          </Card>

          <Card className="bg-gradient-to-br from-yellow-500 to-yellow-600 text-white border-yellow-400 shadow-lg">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">
                {filteredStats.filter((s) => s.status === "maintenance").length}
              </div>
              <div className="text-yellow-100">Tamirda</div>
            </div>
          </Card>

          <Card className="bg-gradient-to-br from-red-500 to-red-600 text-white border-red-400 shadow-lg">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">
                {filteredStats.filter((s) => s.status === "inactive").length}
              </div>
              <div className="text-red-100">Nofaol</div>
            </div>
          </Card>

          <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white border-green-400 shadow-lg">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">{currentTime}</div>
              <div className="text-green-100">Joriy vaqt</div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
