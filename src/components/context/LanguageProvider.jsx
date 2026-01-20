import { useState } from "react";
import { LanguageContext } from "./LanguageContext";

export function LanguageProvider({ children }) {
  const saveLan = (lan) => {
    localStorage.setItem("language", lan);
  };

  const loadLan = () => localStorage.getItem("language");

  const [language, setLanguage] = useState(loadLan() || "spanish");
  return (
    <LanguageContext.Provider value={{ language, setLanguage, saveLan }}>
      {children}
    </LanguageContext.Provider>
  );
}
