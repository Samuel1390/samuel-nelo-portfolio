"use client";
import { useEffect, useState } from "react";
import { LanguageContext } from "./LanguageContext";

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("spanish");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  const saveLan = (lan) => {
    localStorage.setItem("language", lan);
    setLanguage(lan);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, saveLan }}>
      {children}
    </LanguageContext.Provider>
  );
}
