import React, { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { MdLocationCity } from "react-icons/md";

const TopBar = ({ onToggleSidebar }) => {
  return (
    <header className="bg-green-600 text-white shadow-sm">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center space-x-4">
          <button
            onClick={onToggleSidebar}
            className="lg:hidden p-2 rounded-lg hover:bg-green-700 transition-colors"
          >
            <Bars3Icon className="w-6 h-6" />
          </button>

          <div className="flex items-center space-x-2">
            <img
              src="/logo.png"
              alt="Chust Smart City Logo"
              className="w-8 h-8 object-contain"
            />
            <div>
              <h1 className="text-lg font-bold">Chust aqlli shahar</h1>
              <p className="text-xs text-green-100">Modular</p>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-2 text-sm">
            <span>02.07.2025</span>
            <span className="w-1 h-1 bg-green-200 rounded-full"></span>
            <span>AiTech</span>
          </div>

          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
            <span className="text-sm font-bold">A</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
