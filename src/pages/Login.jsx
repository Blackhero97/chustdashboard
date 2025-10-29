import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { useAuth } from "../context/AuthContext";
import {
  MdLocationCity,
  MdEmail,
  MdLock,
  MdVisibility,
  MdVisibilityOff,
  MdLogin,
  MdSecurity,
  MdSpeed,
  MdCloud,
} from "react-icons/md";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      const success = login(formData.email, formData.password);

      if (success) {
        toast.success("Xush kelibsiz! Tizimga muvaffaqiyatli kirdingiz");
        setIsLoading(false);
        navigate("/");
      } else {
        toast.error("Email yoki parol noto'g'ri!");
        setIsLoading(false);
      }
    }, 1000);
  };

  return (
    <div className="h-screen relative overflow-hidden bg-gradient-to-br from-blue-50 via-green-50 to-blue-100">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Circles */}
        <motion.div
          animate={{
            x: mousePosition.x * 50,
            y: mousePosition.y * 50,
          }}
          transition={{ type: "spring", stiffness: 50 }}
          className="absolute top-20 left-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"
        />
        <motion.div
          animate={{
            x: mousePosition.x * -30,
            y: mousePosition.y * -30,
          }}
          transition={{ type: "spring", stiffness: 50 }}
          className="absolute top-40 right-20 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <motion.div
          animate={{
            x: mousePosition.x * 40,
            y: mousePosition.y * -40,
          }}
          transition={{ type: "spring", stiffness: 50 }}
          className="absolute -bottom-20 left-1/2 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"
          style={{ animationDelay: "4s" }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-4 py-4 lg:py-6">
        <div className="w-full max-w-6xl flex items-center justify-between gap-8">
          {/* Left Side - Features */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hidden lg:flex flex-col space-y-5 flex-1"
          >
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-3">
                Chust Smart City
              </h2>
              <p className="text-lg text-gray-600">
                Aqlli shahar boshqaruv tizimi - Zamonaviy texnologiyalar bilan
                kelajakni bugundan boshqaring
              </p>
            </div>

            {/* Feature Cards */}
            <div className="space-y-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm rounded-xl p-3 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-11 h-11 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MdSpeed className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 text-sm">
                    Tez va samarali
                  </h3>
                  <p className="text-xs text-gray-600">
                    Real-time monitoring va boshqaruv
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm rounded-xl p-3 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-11 h-11 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MdSecurity className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 text-sm">
                    Xavfsiz tizim
                  </h3>
                  <p className="text-xs text-gray-600">
                    Ma'lumotlar maxfiy va himoyalangan
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm rounded-xl p-3 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-11 h-11 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MdCloud className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 text-sm">
                    Cloud-based
                  </h3>
                  <p className="text-xs text-gray-600">
                    Istalgan joydan kirish imkoniyati
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Login Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-auto lg:flex-shrink-0"
          >
            <div className="w-full lg:w-[480px]">
              {/* Logo and Title - Mobile Only */}
              <div className="text-center mb-6 lg:hidden">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="inline-flex items-center justify-center mb-3"
                >
                  <img
                    src="/logo.png"
                    alt="Chust Smart City Logo"
                    className="w-16 h-16 object-contain"
                  />
                </motion.div>
                <motion.h1
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-2xl md:text-3xl font-bold text-gray-800 mb-1"
                >
                  Chust Smart City
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-gray-600 text-sm"
                >
                  Aqlli shahar boshqaruv tizimi
                </motion.p>
              </div>

              {/* Login Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{ scale: 1.01 }}
                className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-6 border border-white/20"
              >
                {/* Logo - Desktop Only */}
                <div className="hidden lg:flex justify-center mb-4">
                  <img
                    src="/logo.png"
                    alt="Chust Smart City Logo"
                    className="w-14 h-14 object-contain"
                  />
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-1 text-center">
                  Tizimga kirish
                </h2>
                <p className="text-center text-gray-600 mb-5 text-xs">
                  Ma'lumotlaringizni kiriting
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Email Input */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email manzil
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <MdEmail className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="block w-full pl-12 pr-4 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white/50 backdrop-blur-sm hover:bg-white/80"
                        placeholder="admin@chust.uz"
                      />
                    </div>
                  </div>

                  {/* Password Input */}
                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Parol
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <MdLock className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        className="block w-full pl-12 pr-12 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white/50 backdrop-blur-sm hover:bg-white/80"
                        placeholder="••••••••"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 pr-4 flex items-center hover:scale-110 transition-transform"
                      >
                        {showPassword ? (
                          <MdVisibilityOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                        ) : (
                          <MdVisibility className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Remember Me & Forgot Password */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember"
                        name="remember"
                        type="checkbox"
                        className="h-3.5 w-3.5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded cursor-pointer"
                      />
                      <label
                        htmlFor="remember"
                        className="ml-2 block text-xs text-gray-700 cursor-pointer"
                      >
                        Eslab qolish
                      </label>
                    </div>
                    <button
                      type="button"
                      onClick={() =>
                        toast.info(
                          "Parolni tiklash xizmati hozircha mavjud emas"
                        )
                      }
                      className="text-xs text-blue-600 hover:text-blue-800 transition-colors font-medium"
                    >
                      Parolni unutdingizmi?
                    </button>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isLoading}
                    whileHover={{ scale: isLoading ? 1 : 1.01 }}
                    whileTap={{ scale: isLoading ? 1 : 0.99 }}
                    className={`w-full flex items-center justify-center space-x-2 py-3 px-4 border border-transparent rounded-xl text-white font-semibold transition-all text-sm ${
                      isLoading
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-gradient-to-r from-blue-600 via-blue-500 to-green-600 hover:from-blue-700 hover:via-blue-600 hover:to-green-700 shadow-lg hover:shadow-2xl"
                    }`}
                  >
                    {isLoading ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Kutilmoqda...</span>
                      </>
                    ) : (
                      <>
                        <MdLogin className="w-5 h-5" />
                        <span>Tizimga kirish</span>
                      </>
                    )}
                  </motion.button>
                </form>

                {/* Demo Credentials Info */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="mt-4 p-3 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg border border-blue-200"
                >
                  <div className="flex items-start space-x-2">
                    <MdSecurity className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-gray-800 font-semibold mb-1.5">
                        Demo kirish ma'lumotlari:
                      </p>
                      <div className="text-xs text-gray-700 space-y-0.5">
                        <p className="flex items-center space-x-1.5">
                          <MdEmail className="w-3.5 h-3.5 text-blue-600" />
                          <span>admin@chust.uz</span>
                        </p>
                        <p className="flex items-center space-x-1.5">
                          <MdLock className="w-3.5 h-3.5 text-blue-600" />
                          <span>admin123</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Footer */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="text-center mt-4 text-xs text-gray-600"
              >
                <p>© 2025 Chust Smart City. Barcha huquqlar himoyalangan.</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Login;
