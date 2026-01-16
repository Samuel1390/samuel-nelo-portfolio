import { createContext, useState } from "react";

export const LanguageContext = createContext("spanish");

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
