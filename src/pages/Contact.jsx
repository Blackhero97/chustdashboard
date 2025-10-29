import React, { useState } from "react";
import { motion } from "framer-motion";
import Card from "../components/Card";
import { useLanguage } from "../context/LanguageContext";
// Premium iconlar
import {
  MdEmail,
  MdPhone,
  MdLocationOn,
  MdAccessTime,
  MdSend,
  MdContactSupport,
  MdCheckCircle,
  MdBusiness,
} from "react-icons/md";

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 2000);
  };

  const contactInfo = [
    {
      title: t("contact.address"),
      content:
        "Chust shahar hokimligi\nIstiqlol ko'chasi, 25-uy\nChust sh., Namangan viloyati",
      icon: MdLocationOn,
      color: "from-blue-500 to-blue-600",
    },
    {
      title: t("contact.phone"),
      content: "+998 69 542 12 34\n+998 69 542 56 78\nIsh vaqti: 8:00 - 18:00",
      icon: MdPhone,
      color: "from-green-500 to-green-600",
    },
    {
      title: t("contact.email"),
      content: "info@chust.gov.uz\nsmart@chust.gov.uz\npress@chust.gov.uz",
      icon: MdEmail,
      color: "from-purple-500 to-purple-600",
    },
  ];

  const departments = [
    {
      name: "Raqamli texnologiyalar bo'limi",
      phone: "+998 69 542 12 11",
      email: "digital@chust.gov.uz",
      head: "Ahmadjon Karimov",
    },
    {
      name: "Transport boshqarmasi",
      phone: "+998 69 542 12 22",
      email: "transport@chust.gov.uz",
      head: "Bobur Rahmonov",
    },
    {
      name: "Kommunal xizmatlar bo'limi",
      phone: "+998 69 542 12 33",
      email: "utilities@chust.gov.uz",
      head: "Nilufar Ismoilova",
    },
    {
      name: "Xavfsizlik xizmati",
      phone: "+998 69 542 12 44",
      email: "security@chust.gov.uz",
      head: "Jahongir Toshev",
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
              {t("contact.title")}
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Biz bilan bog'laning va Chust aqlli shahar loyihasi haqida
              batafsil ma'lumot oling
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Contact Info Cards */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="text-center h-full bg-white border-slate-200 shadow-lg">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${info.color} rounded-2xl mx-auto mb-6 flex items-center justify-center`}
                  >
                    <info.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">
                    {info.title}
                  </h3>
                  <p className="text-slate-600 whitespace-pre-line leading-relaxed">
                    {info.content}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Contact Form and Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="bg-white border-slate-200 shadow-lg">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                {t("contact.feedback")}
              </h2>

              {submitSuccess && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <MdCheckCircle className="text-green-600" />
                    <p className="text-green-800 font-medium">
                      Xabaringiz muvaffaqiyatli yuborildi! Tez orada javob
                      beramiz.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      {t("contact.name")} *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      placeholder="Ism familiyangiz"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Telefon *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      placeholder="+998 XX XXX XX XX"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Elektron pochta
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    placeholder="example@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Mavzu *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Mavzuni tanlang</option>
                    <option value="technical">Texnik muammo</option>
                    <option value="service">Xizmat haqida savol</option>
                    <option value="suggestion">Taklif yoki fikr</option>
                    <option value="complaint">Shikoyat</option>
                    <option value="other">Boshqa</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    {t("contact.message")} *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Xabaringizni yozing..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${
                    isSubmitting
                      ? "bg-slate-400 text-white cursor-not-allowed"
                      : "bg-blue-600 hover:bg-blue-700 text-white"
                  }`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Yuborilmoqda...</span>
                    </div>
                  ) : (
                    t("contact.sendMessage")
                  )}
                </button>
              </form>
            </Card>
          </motion.div>

          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="h-full">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                Joylashuv
              </h3>
              <div className="bg-slate-100 rounded-lg h-96 flex items-center justify-center mb-4">
                <div className="text-center">
                  <div className="text-4xl mb-2">
                    <MdLocationOn className="mx-auto text-blue-600" />
                  </div>
                  <p className="text-slate-600">Chust shahar xaritasi</p>
                  <p className="text-sm text-slate-500 mt-2">
                    Istiqlol ko'chasi, 25-uy
                    <br />
                    Chust sh., Namangan viloyati
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="text-center p-3 bg-slate-50 rounded-lg">
                  <div className="font-semibold text-slate-900">Ish vaqti</div>
                  <div className="text-slate-600">Dush-Juma: 8:00-18:00</div>
                </div>
                <div className="text-center p-3 bg-slate-50 rounded-lg">
                  <div className="font-semibold text-slate-900">Dam olish</div>
                  <div className="text-slate-600">Shanba-Yakshanba</div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Departments */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Bo'limlar va mas'ul shaxslar
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Muayyan masalalar bo'yicha to'g'ridan-to'g'ri bog'laning
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {departments.map((dept, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-lg font-semibold text-slate-900">
                      {dept.name}
                    </h3>
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white">
                      <MdBusiness className="text-white" />
                    </div>
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <span className="text-slate-500">👤</span>
                      <span className="font-medium">{dept.head}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MdPhone className="text-slate-500" />
                      <a
                        href={`tel:${dept.phone}`}
                        className="text-primary-600 hover:underline"
                      >
                        {dept.phone}
                      </a>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MdEmail className="text-slate-500" />
                      <a
                        href={`mailto:${dept.email}`}
                        className="text-primary-600 hover:underline"
                      >
                        {dept.email}
                      </a>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Contact;
