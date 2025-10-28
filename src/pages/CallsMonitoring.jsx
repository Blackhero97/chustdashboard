import React, { useState } from "react";
import { toast } from "react-toastify";
import {
  MdPhone,
  MdLocationOn,
  MdAccessTime,
  MdPerson,
  MdCheckCircle,
  MdPending,
  MdSearch,
  MdFilterList,
  MdRefresh,
  MdWarning,
  MdWater,
  MdElectricBolt,
  MdLocalGasStation,
  MdThermostat,
  MdPlumbing,
  MdBuild,
} from "react-icons/md";

const CallsMonitoring = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Mock data for incoming calls
  const callsData = [
    {
      id: 1,
      caller: "Ahmadjon Karimov",
      phone: "+998901234567",
      address: "Chust shahar, Navoi ko'chasi 15-uy",
      issue: "Suv yo'q",
      category: "water",
      priority: "high",
      status: "pending",
      time: "2025-07-02 14:30",
      description: "3 kundan beri suv kelmayapti, hovli ichida suv yo'q",
      assignedTo: "Brigade №3",
    },
    {
      id: 2,
      caller: "Fotima Yusupova",
      phone: "+998907654321",
      address: "Chust shahar, Amir Temur ko'chasi 28-uy",
      issue: "Elektr uzilgan",
      category: "electricity",
      priority: "medium",
      status: "in-progress",
      time: "2025-07-02 13:45",
      description:
        "Kecha kechqurundan beri elektr yo'q, refrigerator ishlamayapti",
      assignedTo: "Elektrik xizmati",
    },
    {
      id: 3,
      caller: "Rustam Abdullayev",
      phone: "+998909876543",
      address: "Chust shahar, Mustaqillik ko'chasi 42-uy",
      issue: "Gaz ta'minoti muammosi",
      category: "gas",
      priority: "high",
      status: "completed",
      time: "2025-07-02 12:15",
      description: "Gaz plitasi ishlamayapti, gaz bosimi past",
      assignedTo: "Gaz xizmati",
    },
    {
      id: 4,
      caller: "Dilfuza Rahimova",
      phone: "+998903456789",
      address: "Chust shahar, Bobur ko'chasi 8-uy",
      issue: "Issiqlik ta'minoti",
      category: "heating",
      priority: "low",
      status: "pending",
      time: "2025-07-02 11:20",
      description: "Batareyalar sovuq, issiqlik yo'q",
      assignedTo: "Issiqlik xizmati",
    },
    {
      id: 5,
      caller: "Shohruh Toshmatov",
      phone: "+998905432167",
      address: "Chust shahar, Alisher Navoi ko'chasi 67-uy",
      issue: "Kanal tiqilib qolgan",
      category: "plumbing",
      priority: "medium",
      status: "in-progress",
      time: "2025-07-02 10:30",
      description: "Vannaxona kanali tiqilib qolgan, suv to'kib turibdi",
      assignedTo: "Sanitariya xizmati",
    },
    {
      id: 6,
      caller: "Nodira Ismoilova",
      phone: "+998902345678",
      address: "Chust shahar, Turkiston ko'chasi 23-uy",
      issue: "Lift ishlamayapti",
      category: "maintenance",
      priority: "medium",
      status: "pending",
      time: "2025-07-02 09:45",
      description: "5-qavat lift to'xtab qolgan, keksalar ko'tarilolmayapti",
      assignedTo: "Texnik xizmat",
    },
  ];

  const categoryIcons = {
    water: MdWater,
    electricity: MdElectricBolt,
    gas: MdLocalGasStation,
    heating: MdThermostat,
    plumbing: MdPlumbing,
    maintenance: MdBuild,
  };

  const categoryColors = {
    water: "bg-blue-100 text-blue-800",
    electricity: "bg-yellow-100 text-yellow-800",
    gas: "bg-orange-100 text-orange-800",
    heating: "bg-red-100 text-red-800",
    plumbing: "bg-green-100 text-green-800",
    maintenance: "bg-purple-100 text-purple-800",
  };

  const priorityColors = {
    high: "bg-red-100 text-red-800 border-red-200",
    medium: "bg-yellow-100 text-yellow-800 border-yellow-200",
    low: "bg-green-100 text-green-800 border-green-200",
  };

  const statusColors = {
    pending: "bg-orange-100 text-orange-800",
    "in-progress": "bg-blue-100 text-blue-800",
    completed: "bg-green-100 text-green-800",
  };

  const statusIcons = {
    pending: MdPending,
    "in-progress": MdAccessTime,
    completed: MdCheckCircle,
  };

  const filteredCalls = callsData.filter((call) => {
    const matchesFilter =
      selectedFilter === "all" || call.status === selectedFilter;
    const matchesSearch =
      call.caller.toLowerCase().includes(searchQuery.toLowerCase()) ||
      call.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
      call.issue.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const statsData = [
    {
      label: "Jami chaqiruvlar",
      value: callsData.length,
      color: "bg-blue-500",
      icon: MdPhone,
      bgColor: "bg-blue-50",
      textColor: "text-blue-900",
    },
    {
      label: "Kutilayotgan",
      value: callsData.filter((call) => call.status === "pending").length,
      color: "bg-orange-500",
      icon: MdPending,
      bgColor: "bg-orange-50",
      textColor: "text-orange-900",
    },
    {
      label: "Jarayonda",
      value: callsData.filter((call) => call.status === "in-progress").length,
      color: "bg-blue-500",
      icon: MdAccessTime,
      bgColor: "bg-blue-50",
      textColor: "text-blue-900",
    },
    {
      label: "Bajarilgan",
      value: callsData.filter((call) => call.status === "completed").length,
      color: "bg-green-500",
      icon: MdCheckCircle,
      bgColor: "bg-green-50",
      textColor: "text-green-900",
    },
  ];

  const handleCallAction = (action, callId) => {
    toast.info(`${action} bajarildi (ID: ${callId})`, {
      position: "top-right",
      autoClose: 3000,
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-6">
      {/* Header */}
      <div className="mb-6 md:mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Chaqiruvlar Monitoring
            </h1>
            <p className="text-gray-600 text-sm md:text-base">
              Kommunal xizmatlardagi muammolar bo'yicha kelgan chaqiruvlar
            </p>
          </div>
          <button
            onClick={() => toast.success("Ma'lumotlar yangilandi")}
            className="flex items-center justify-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors w-full md:w-auto"
          >
            <MdRefresh className="w-5 h-5" />
            <span>Yangilash</span>
          </button>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {statsData.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <div
              key={index}
              className={`${stat.bgColor} rounded-xl p-6 border border-gray-100 shadow-sm`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">
                    {stat.label}
                  </p>
                  <p className={`text-3xl font-bold ${stat.textColor}`}>
                    {stat.value}
                  </p>
                </div>
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <MdSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Chaqiruv qidirish..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Filters */}
          <div className="flex items-center space-x-2">
            <MdFilterList className="text-gray-400 w-5 h-5" />
            <select
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">Barcha chaqiruvlar</option>
              <option value="pending">Kutilayotgan</option>
              <option value="in-progress">Jarayonda</option>
              <option value="completed">Bajarilgan</option>
            </select>
          </div>
        </div>
      </div>

      {/* Calls List */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">
            Chaqiruvlar ro'yxati ({filteredCalls.length})
          </h2>
        </div>

        <div className="divide-y divide-gray-200">
          {filteredCalls.map((call) => {
            const CategoryIcon = categoryIcons[call.category];
            const StatusIcon = statusIcons[call.status];

            return (
              <div
                key={call.id}
                className="p-4 md:p-6 hover:bg-gray-50 transition-colors"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between space-y-4 lg:space-y-0">
                  <div className="flex-1">
                    {/* Call Header */}
                    <div className="flex items-start space-x-4 mb-4">
                      <div
                        className={`${
                          categoryColors[call.category]
                        } p-2 rounded-lg flex-shrink-0`}
                      >
                        <CategoryIcon className="w-5 h-5 md:w-6 md:h-6" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2 mb-2">
                          <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-1 sm:mb-0">
                            {call.issue}
                          </h3>
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium border ${
                              priorityColors[call.priority]
                            } w-fit`}
                          >
                            {call.priority === "high"
                              ? "Yuqori"
                              : call.priority === "medium"
                              ? "O'rta"
                              : "Past"}
                          </span>
                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-sm text-gray-600 mb-2 space-y-1 sm:space-y-0">
                          <div className="flex items-center space-x-1">
                            <MdPerson className="w-4 h-4 flex-shrink-0" />
                            <span className="truncate">{call.caller}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MdPhone className="w-4 h-4 flex-shrink-0" />
                            <span>{call.phone}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MdAccessTime className="w-4 h-4 flex-shrink-0" />
                            <span>{call.time}</span>
                          </div>
                        </div>

                        <div className="flex items-start space-x-1 text-sm text-gray-600 mb-3">
                          <MdLocationOn className="w-4 h-4 flex-shrink-0 mt-0.5" />
                          <span className="break-words">{call.address}</span>
                        </div>

                        <p className="text-gray-700 mb-3 text-sm md:text-base">
                          {call.description}
                        </p>

                        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0">
                          <span
                            className={`px-3 py-1 rounded-full text-sm font-medium ${
                              statusColors[call.status]
                            } flex items-center space-x-1 w-fit`}
                          >
                            <StatusIcon className="w-4 h-4" />
                            <span>
                              {call.status === "pending"
                                ? "Kutilayotgan"
                                : call.status === "in-progress"
                                ? "Jarayonda"
                                : "Bajarilgan"}
                            </span>
                          </span>
                          <span className="text-sm text-gray-600">
                            Javobgar: {call.assignedTo}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-row lg:flex-col space-x-2 lg:space-x-0 lg:space-y-2 lg:ml-4">
                    {call.status === "pending" && (
                      <button
                        onClick={() =>
                          handleCallAction("Qabul qilindi", call.id)
                        }
                        className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition-colors whitespace-nowrap"
                      >
                        Qabul qilish
                      </button>
                    )}
                    {call.status === "in-progress" && (
                      <button
                        onClick={() => handleCallAction("Bajarildi", call.id)}
                        className="px-3 py-1 bg-green-600 text-white text-sm rounded hover:bg-green-700 transition-colors whitespace-nowrap"
                      >
                        Bajarish
                      </button>
                    )}
                    <button
                      onClick={() =>
                        handleCallAction("Batafsil ma'lumot", call.id)
                      }
                      className="px-3 py-1 bg-gray-600 text-white text-sm rounded hover:bg-gray-700 transition-colors whitespace-nowrap"
                    >
                      Batafsil
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredCalls.length === 0 && (
          <div className="p-12 text-center">
            <MdWarning className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Chaqiruvlar topilmadi
            </h3>
            <p className="text-gray-600">
              Qidiruv mezonlaringizni o'zgartiring yoki filtrlarni tozalang
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CallsMonitoring;
