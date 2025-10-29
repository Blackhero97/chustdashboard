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

// Module Pages
import DrinkingWaterModule from "./pages/modules/DrinkingWaterModule";
import HeatingSystemModule from "./pages/modules/HeatingSystemModule";
import GasSystemModule from "./pages/modules/GasSystemModule";
import ElectricNetworkModule from "./pages/modules/ElectricNetworkModule";
import EmergencyModule from "./pages/modules/EmergencyModule";
import EducationModule from "./pages/modules/EducationModule";
import UrbanDevelopmentModule from "./pages/modules/UrbanDevelopmentModule";
import CleanAreaModule from "./pages/modules/CleanAreaModule";
import TransportModule from "./pages/modules/TransportModule";
import BSKModule from "./pages/modules/BSKModule";
import HealthModule from "./pages/modules/HealthModule";
import RoadManagementModule from "./pages/modules/RoadManagementModule";
import LandscapingModule from "./pages/modules/LandscapingModule";

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

                            {/* Dashboard Module Routes */}
                            <Route
                              path="/modules/drinking-water"
                              element={<DrinkingWaterModule />}
                            />
                            <Route
                              path="/modules/heating-system"
                              element={<HeatingSystemModule />}
                            />
                            <Route
                              path="/modules/gas-system"
                              element={<GasSystemModule />}
                            />
                            <Route
                              path="/modules/electric-network"
                              element={<ElectricNetworkModule />}
                            />
                            <Route
                              path="/modules/education"
                              element={<EducationModule />}
                            />
                            <Route
                              path="/modules/urban-development"
                              element={<UrbanDevelopmentModule />}
                            />
                            <Route
                              path="/modules/emergency"
                              element={<EmergencyModule />}
                            />
                            <Route
                              path="/modules/road-management"
                              element={<RoadManagementModule />}
                            />
                            <Route
                              path="/modules/clean-area"
                              element={<CleanAreaModule />}
                            />
                            <Route
                              path="/modules/landscaping"
                              element={<LandscapingModule />}
                            />
                            <Route
                              path="/modules/transport"
                              element={<TransportModule />}
                            />
                            <Route
                              path="/modules/bsk"
                              element={<BSKModule />}
                            />
                            <Route
                              path="/modules/health"
                              element={<HealthModule />}
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
