import React, { useState } from "react";
import { motion } from "framer-motion";
import Card from "../components/Card";
import StatCard from "../components/StatCard";
import {
  CustomBarChart,
  DemographicsChart,
  CustomPieChart,
} from "../components/Charts";
import { useLanguage } from "../context/LanguageContext";
import { formatNumber } from "../utils";
import cityData from "../data/cityData.json";
// Premium iconlar
import {
  MdBusiness,
  MdAnalytics,
  MdPeople,
  MdTrendingUp,
  MdLocationCity,
  MdAssessment,
  MdHome,
  MdLink,
  MdSecurity,
} from "react-icons/md";

const Statistics = () => {
  const { t } = useLanguage();
  const [selectedTimeframe, setSelectedTimeframe] = useState("2025");

  // Transform demographics data for chart
  const demographicsData = cityData.statistics.demographics.ageGroups.map(
    (group) => ({
      range: group.range,
      male: group.male,
      female: group.female,
      total: group.male + group.female,
    })
  );

  // Utilities data for pie chart
  const utilitiesData = [
    {
      name: "Suv ta'minoti",
      value: cityData.statistics.utilities.water.total,
      active: cityData.statistics.utilities.water.active,
    },
    {
      name: "Gaz ta'minoti",
      value: cityData.statistics.utilities.gas.total,
      active: cityData.statistics.utilities.gas.active,
    },
    {
      name: "Elektr energiya",
      value: cityData.statistics.utilities.electricity.total,
      active: cityData.statistics.utilities.electricity.active,
    },
    {
      name: "Issiqlik ta'minoti",
      value: cityData.statistics.utilities.heating.total,
      active: cityData.statistics.utilities.heating.active,
    },
  ];

  const pieChartData = utilitiesData.map((item) => ({
    name: item.name,
    value: item.active,
    total: item.value,
  }));

  // Monthly data simulation for transport
  const transportData = [
    { month: "Yan", vehicles: 310, routes: 12, trips: 1240 },
    { month: "Fev", vehicles: 315, routes: 12, trips: 1180 },
    { month: "Mar", vehicles: 320, routes: 13, trips: 1350 },
    { month: "Apr", vehicles: 318, routes: 13, trips: 1290 },
    { month: "May", vehicles: 324, routes: 13, trips: 1420 },
    { month: "Iyun", vehicles: 322, routes: 13, trips: 1380 },
  ];

  const securityData = [
    { area: "Markaziy", cameras: 25, incidents: 2, resolved: 23 },
    { area: "Sharqiy", cameras: 18, incidents: 1, resolved: 17 },
    { area: "G'arbiy", cameras: 20, incidents: 3, resolved: 17 },
    { area: "Shimoliy", cameras: 18, incidents: 2, resolved: 16 },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">
                Statistika va hisobotlar
              </h1>
              <p className="text-green-100 mt-2 text-sm md:text-base">
                Shahar faoliyati va xizmatlar statistikasi
              </p>
            </div>

            {/* Time Filter */}
            <div className="flex bg-slate-100 rounded-lg p-1">
              {["2023", "2024", "2025"].map((year) => (
                <button
                  key={year}
                  onClick={() => setSelectedTimeframe(year)}
                  className={`px-4 py-2 text-sm font-medium rounded transition-colors ${
                    selectedTimeframe === year
                      ? "bg-blue-600 text-white shadow-sm"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {year} yil
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Main Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <StatCard
              title="Umumiy xonadonlar soni"
              value={cityData.statistics.households.total}
              icon={MdHome}
              className="bg-gradient-to-br from-blue-500 to-blue-600 text-white"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <StatCard
              title="Ulangan xonadonlar"
              value={cityData.statistics.households.connected}
              icon={MdLink}
              className="bg-gradient-to-br from-green-500 to-green-600 text-white"
              trend={{
                direction: "up",
                value: "+15%",
                label: "o'tgan oyga nisbatan",
              }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <StatCard
              title="Ko'p qavatli uylar"
              value={cityData.statistics.households.withMultipleFloors}
              icon={MdBusiness}
              className="bg-gradient-to-br from-orange-500 to-orange-600 text-white"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <StatCard
              title="Xavfsizlik kameralar"
              value={cityData.statistics.security.cameras}
              icon={MdSecurity}
              className="bg-gradient-to-br from-red-500 to-red-600 text-white"
              status="active"
            />
          </motion.div>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Demographics Chart */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card>
              <DemographicsChart
                data={demographicsData}
                title="Demografik ko'rsatkichlar"
                height={400}
              />
              <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                <div className="text-center p-3 bg-blue-50 rounded-lg">
                  <div className="font-semibold text-blue-900">Jami Soni</div>
                  <div className="text-2xl font-bold text-blue-600">
                    {formatNumber(
                      demographicsData.reduce((sum, item) => sum + item.male, 0)
                    )}
                  </div>
                  <div className="text-blue-600">Erkak</div>
                </div>
                <div className="text-center p-3 bg-green-50 rounded-lg">
                  <div className="font-semibold text-green-900">
                    Ayollar soni
                  </div>
                  <div className="text-2xl font-bold text-green-600">
                    {formatNumber(
                      demographicsData.reduce(
                        (sum, item) => sum + item.female,
                        0
                      )
                    )}
                  </div>
                  <div className="text-green-600">Ayol</div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Utilities Pie Chart */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card>
              <CustomPieChart
                data={pieChartData}
                dataKey="value"
                nameKey="name"
                title="Kommunal xizmatlar holati"
                height={400}
              />
              <div className="mt-4 space-y-2">
                {utilitiesData.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center p-2 bg-slate-50 rounded"
                  >
                    <span className="font-medium">{item.name}</span>
                    <div className="text-right">
                      <div className="font-bold text-green-600">
                        {item.active} faol
                      </div>
                      <div className="text-sm text-slate-500">
                        {item.value} jami
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Transport and Security Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Transport Chart */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card>
              <CustomBarChart
                data={transportData}
                xKey="month"
                yKey="vehicles"
                title="Transport vositalari dinamikasi"
                height={300}
              />
              <div className="mt-4 grid grid-cols-3 gap-4 text-center">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">
                    {cityData.statistics.transport.activeVehicles}
                  </div>
                  <div className="text-sm text-blue-800">Faol transport</div>
                </div>
                <div className="p-3 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">
                    {cityData.statistics.transport.totalRoutes}
                  </div>
                  <div className="text-sm text-green-800">Yo'nalishlar</div>
                </div>
                <div className="p-3 bg-orange-50 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600">1420</div>
                  <div className="text-sm text-orange-800">Oylik reys</div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Security Chart */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card>
              <CustomBarChart
                data={securityData}
                xKey="area"
                yKey="cameras"
                title="Xavfsizlik tizimi (hududlar bo'yicha)"
                height={300}
              />
              <div className="mt-4 space-y-2">
                {securityData.map((area, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center p-2 bg-slate-50 rounded"
                  >
                    <span className="font-medium">{area.area} hudud</span>
                    <div className="flex gap-4 text-sm">
                      <span className="text-blue-600">
                        {area.cameras} kamera
                      </span>
                      <span className="text-red-600">
                        {area.incidents} hodisa
                      </span>
                      <span className="text-green-600">
                        {area.resolved} hal qilingan
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
