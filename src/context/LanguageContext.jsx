import React, { createContext, useContext, useState, useEffect } from "react";
import translations from "../data/translations.json";

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState("uz");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage && ["uz", "ru"].includes(savedLanguage)) {
      setCurrentLanguage(savedLanguage);
    }
  }, []);

  const changeLanguage = (language) => {
    if (["uz", "ru"].includes(language)) {
      setCurrentLanguage(language);
      localStorage.setItem("language", language);
    }
  };

  const t = (key) => {
    const keys = key.split(".");
    let value = translations.translations[currentLanguage];

    for (const k of keys) {
      if (value && typeof value === "object") {
        value = value[k];
      } else {
        return key; // Return key if translation not found
      }
    }

    return value || key;
  };

  const value = {
    currentLanguage,
    changeLanguage,
    t,
    isUzbek: currentLanguage === "uz",
    isRussian: currentLanguage === "ru",
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
