import React from "react";
import { motion } from "framer-motion";
import Card from "../components/Card";
import { useLanguage } from "../context/LanguageContext";
// Premium iconlar
import {
  MdDescription,
  MdDirectionsBus,
  MdPayment,
  MdQrCodeScanner,
  MdNotifications,
  MdRateReview,
  MdMap,
  MdPhoneAndroid,
  MdCloudDownload,
} from "react-icons/md";

const MobileApp = () => {
  const { t } = useLanguage();

  const features = [
    {
      title: "Shahar xizmatlariga murojaat",
      description:
        "Kommunal masalalar, transport va boshqa xizmatlar bo'yicha murojaat yuborish",
      icon: MdDescription,
    },
    {
      title: "Transport monitoring",
      description:
        "Avtobuslar joylashuvi, yo'l harakati va transport jadvallarini kuzatish",
      icon: MdDirectionsBus,
    },
    {
      title: "Komunal to'lovlar",
      description:
        "Suv, gaz, elektr va boshqa komunal to'lovlarni onlayn amalga oshirish",
      icon: MdPayment,
    },
    {
      title: "Shahar yangiliklari",
      description:
        "Eng so'nggi shahar yangiliklari va e'lonlardan xabardor bo'lish",
      icon: MdNotifications,
    },
    {
      title: "Favqulodda vaziyatlar",
      description:
        "Favqulodda vaziyatlar haqida ogohlantirishlar va yordam chaqirish",
      icon: MdNotifications,
    },
    {
      title: "Shahar xaritasi",
      description: "Interaktiv shahar xaritasi va joylashuvlarni topish",
      icon: MdMap,
    },
  ];

  const screenshots = [
    { id: 1, title: "Bosh sahifa", image: MdPhoneAndroid },
    { id: 2, title: "Xizmatlar", image: MdDescription },
    { id: 3, title: "Transport", image: MdDirectionsBus },
    { id: 4, title: "To'lovlar", image: MdPayment },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-success-600 via-success-700 to-success-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Chust Smart City
              </h1>
              <p className="text-xl text-success-100 mb-2">Mobil ilovasi</p>
              <p className="text-lg text-success-200 mb-8 leading-relaxed">
                Shahar xizmatlaridan foydalanish uchun qulay va zamonaviy mobil
                ilova. Barcha shahar xizmatlari bir joyda!
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#"
                  className="flex items-center justify-center space-x-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-colors shadow-lg"
                >
                  <MdPhoneAndroid className="text-2xl" />
                  <div className="text-left">
                    <div className="text-xs">Download on the</div>
                    <div className="text-lg font-semibold">App Store</div>
                  </div>
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center space-x-3 bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3 rounded-xl hover:from-green-700 hover:to-green-800 transition-colors shadow-lg"
                >
                  <span className="text-2xl">🤖</span>
                  <div className="text-left">
                    <div className="text-xs">Get it on</div>
                    <div className="text-lg font-semibold">Google Play</div>
                  </div>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <div className="relative">
                <Card className="bg-white backdrop-blur-sm border-white/20 text-slate-900 max-w-sm mx-auto shadow-lg">
                  <div className="text-center">
                    <div className="text-8xl mb-4">
                      <MdPhoneAndroid className="mx-auto text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">
                      Chust Smart City
                    </h3>
                    <p className="text-success-200 mb-4">Version 2.1.0</p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="font-bold">4.8 ⭐</div>
                        <div className="text-success-300">Reyting</div>
                      </div>
                      <div>
                        <div className="font-bold">50k+</div>
                        <div className="text-success-300">Yuklanishlar</div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Features Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Ilova imkoniyatlari
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Chust Smart City ilovasi orqali shahar xizmatlaridan qulay va tez
              foydalaning
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
                <Card className="h-full text-center hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">
                    <feature.icon className="w-10 h-10 text-success-600 mx-auto" />
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

        {/* Screenshots Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Ilova interfeysi
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Zamonaviy va foydalanuvchi uchun qulay dizayn
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {screenshots.map((screenshot, index) => (
              <motion.div
                key={screenshot.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="text-center">
                  <div className="text-6xl mb-4">
                    <screenshot.image className="w-16 h-16 text-slate-600 mx-auto" />
                  </div>
                  <h4 className="font-semibold text-slate-900">
                    {screenshot.title}
                  </h4>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Stats Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <Card className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-8">Ilova statistikasi</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                  <div className="text-4xl font-bold mb-2">50,000+</div>
                  <div className="text-primary-200">Aktiv foydalanuvchilar</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">4.8</div>
                  <div className="text-primary-200">App Store reytingi</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">25,000+</div>
                  <div className="text-primary-200">
                    Qayta ishlangan murojaatlar
                  </div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">98%</div>
                  <div className="text-primary-200">
                    Foydalanuvchilar qoniqishi
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.section>

        {/* FAQ Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Ko'p so'raladigan savollar
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Ilova bepulmi?
              </h3>
              <p className="text-slate-600">
                Ha, Chust Smart City ilovasi to'liq bepul va barcha asosiy
                xizmatlar hech qanday to'lovsiz taqdim etiladi.
              </p>
            </Card>

            <Card>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Qaysi qurilmalarda ishlaydi?
              </h3>
              <p className="text-slate-600">
                Ilova Android 6.0+ va iOS 12.0+ versiyalariga ega barcha
                smartfon va planshetlarda ishlaydi.
              </p>
            </Card>

            <Card>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Ma'lumotlar xavfsizligi?
              </h3>
              <p className="text-slate-600">
                Barcha shaxsiy ma'lumotlar zamonaviy shifrlash texnologiyalari
                bilan himoyalangan va xavfsiz saqlanadi.
              </p>
            </Card>

            <Card>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Qo'llab-quvvatlash xizmati?
              </h3>
              <p className="text-slate-600">
                24/7 qo'llab-quvvatlash xizmati mavjud. Ilova orqali yoki
                telefon bilan bog'lanishingiz mumkin.
              </p>
            </Card>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default MobileApp;
