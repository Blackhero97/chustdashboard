import React from "react";
import { motion } from "framer-motion";
import Card from "../components/Card";
import { useLanguage } from "../context/LanguageContext";
// Premium iconlar
import {
  MdDirectionsBus,
  MdElectricBolt,
  MdSecurity,
  MdLocationCity,
  MdBusiness,
  MdPark,
  MdHealthAndSafety,
  MdSchool,
} from "react-icons/md";

const About = () => {
  const { t } = useLanguage();

  const features = [
    {
      title: t("about.transport"),
      description: "Aqlli transport tizimi va yo'lovchilar oqimi monitoringi",
      icon: MdDirectionsBus,
      color: "from-blue-500 to-blue-600",
    },
    {
      title: t("about.energy"),
      description:
        "Energiya samaradorligi va qayta tiklanadigan energiya manbalari",
      icon: MdElectricBolt,
      color: "from-yellow-500 to-yellow-600",
    },
    {
      title: t("about.security"),
      description: "AI asosidagi xavfsizlik tizimlari va monitoring",
      icon: MdSecurity,
      color: "from-red-500 to-red-600",
    },
    {
      title: t("about.ecology"),
      description: "Atrof-muhit monitoringi va ekologik holat nazorati",
      icon: MdPark,
      color: "from-green-500 to-green-600",
    },
    {
      title: t("about.management"),
      description: "Raqamli boshqaruv va fuqarolar bilan interaktiv aloqa",
      icon: MdLocationCity,
      color: "from-purple-500 to-purple-600",
    },
  ];

  const benefits = [
    {
      title: "Samaradorlik",
      description: "Shahar xizmatlarining samaradorligini 40% gacha oshirish",
      percentage: 40,
    },
    {
      title: "Energiya tejash",
      description: "Energiya sarfini 30% gacha kamaytirish",
      percentage: 30,
    },
    {
      title: "Xavfsizlik",
      description: "Jinoyatchilik darajasini 25% gacha kamaytirish",
      percentage: 25,
    },
    {
      title: "Fuqarolar qoniqishi",
      description:
        "Shahar xizmatlaridan qoniqish darajasini 85% gacha oshirish",
      percentage: 85,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              {t("about.title")}
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Chust shahrini zamonaviy texnologiyalar bilan jihozlash va
              fuqarolar hayot sifatini yaxshilash
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* What is Smart City */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                {t("about.whatIsSmartCity")}
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                {t("about.smartCityDescription")}
              </p>
              <p className="text-slate-600 leading-relaxed">
                Aqlli shahar tizimi IoT sensorlari, sun'iy intellekt, katta
                ma'lumotlar tahlili va mobil texnologiyalar orqali shahar
                infratuzilmasini optimallashtiradi va fuqarolarga qulay
                xizmatlar taqdim etadi.
              </p>
            </div>

            <div className="relative">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Card className="bg-gradient-to-br from-blue-50 to-green-50 border-2 border-blue-200 text-center p-8 shadow-lg">
                  <div className="text-6xl mb-4">
                    <MdLocationCity className="mx-auto text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-800 mb-2">
                    Raqamli O'zbekiston 2030
                  </h3>
                  <p className="text-blue-700">
                    Milliy raqamlashtirish strategiyasining bir qismi
                  </p>
                </Card>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Key Directions */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              {t("about.keyDirections")}
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Chust aqlli shahar tizimining asosiy yo'nalishlari va
              imkoniyatlari
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full text-center bg-white border-slate-200 shadow-lg">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl mx-auto mb-4 flex items-center justify-center`}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Benefits Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Kutilayotgan natijalar
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Aqlli shahar tizimi joriy etilgandan keyin kutilayotgan ijobiy
              o'zgarishlar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="text-center h-full">
                  <div className="relative mb-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-success-500 to-success-600 rounded-full mx-auto flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">
                        {benefit.percentage}%
                      </span>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-slate-600">
                    {benefit.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Implementation Timeline */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Card className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-6">
                Loyiha amalga oshirish bosqichlari
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold">1</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">2024-2025</h3>
                  <p className="text-primary-100">
                    Asosiy infratuzilma va pilot loyihalar
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold">2</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">2025-2027</h3>
                  <p className="text-primary-100">
                    Xizmatlarni kengaytirish va integratsiya
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold">3</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">2027-2030</h3>
                  <p className="text-primary-100">
                    To'liq aqlli shahar ekotizimi
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </motion.section>
      </div>
    </div>
  );
};

export default About;
