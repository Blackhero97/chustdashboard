import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LanguageProvider } from "./context/LanguageContext";
import { AuthProvider } from "./context/AuthContext";
import Sidebar from "./components/Sidebar";
import TopBar from "./components/TopBar";
import ProtectedRoute from "./components/ProtectedRoute";

// Pages
import Login from "./pages/Login";
import Home from "./pages/Home";
import Statistics from "./pages/Statistics";
import Services from "./pages/Services";
import About from "./pages/About";
import MobileApp from "./pages/MobileApp";
import Contact from "./pages/Contact";
import Maintenance from "./pages/Maintenance";
import MapView from "./pages/MapView";
import Utilities from "./pages/Utilities";
import ChustMapSystem from "./pages/ChustMapSystem";
import CallsMonitoring from "./pages/CallsMonitoring";
import PageNotFound from "./pages/PageNotFound";

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <AuthProvider>
      <LanguageProvider>
        <Router>
          <Routes>
            {/* Public Route - Login */}
            <Route path="/login" element={<Login />} />

            {/* Protected Routes */}
            <Route
              path="/*"
              element={
                <ProtectedRoute>
                  <div className="min-h-screen bg-slate-100">
                    <div className="flex">
                      {/* Sidebar */}
                      <Sidebar
                        isOpen={sidebarOpen}
                        setIsOpen={setSidebarOpen}
                      />

                      {/* Main Content Area */}
                      <div className="flex-1 lg:ml-80">
                        {/* Top Bar - only on mobile */}
                        <div className="lg:hidden">
                          <TopBar onToggleSidebar={toggleSidebar} />
                        </div>

                        {/* Page Content */}
                        <main className="min-h-screen overflow-y-auto">
                          <Routes>
                            <Route path="/" element={<Home />} />
                            <Route
                              path="/statistics"
                              element={<Statistics />}
                            />
                            <Route
                              path="/calls-monitoring"
                              element={<CallsMonitoring />}
                            />
                            <Route path="/utilities" element={<Services />} />
                            <Route path="/reports" element={<Statistics />} />
                            <Route path="/statistics" element={<MapView />} />
                            <Route path="/utilities" element={<Utilities />} />
                            <Route
                              path="/chust-map"
                              element={<ChustMapSystem />}
                            />
                            <Route path="/services" element={<Services />} />
                            <Route path="/emergency" element={<About />} />
                            <Route path="/history" element={<Statistics />} />
                            <Route path="/users" element={<Contact />} />
                            <Route path="/buildings" element={<About />} />
                            <Route path="/objects" element={<Services />} />
                            <Route path="/trash" element={<Services />} />
                            <Route
                              path="/organizations"
                              element={<Contact />}
                            />
                            <Route path="/about" element={<About />} />
                            <Route path="/mobile-app" element={<MobileApp />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route
                              path="/maintenance"
                              element={<Maintenance />}
                            />
                            {/* Catch all unmatched routes */}
                            <Route path="*" element={<PageNotFound />} />
                          </Routes>
                        </main>
                      </div>
                    </div>
                  </div>
                </ProtectedRoute>
              }
            />
          </Routes>

          {/* Toast Container */}
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </Router>
      </LanguageProvider>
    </AuthProvider>
  );
};

export default App;
