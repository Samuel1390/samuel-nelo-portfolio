import { useContext } from "react";
import { LanguageContext } from "./context/LanguageContext";

export const LanguageBtn = () => {
  const languageContext = useContext(LanguageContext);

  const { language, setLanguage, saveLan } = languageContext;

  const handleLanguageClick = (e) => {
    if (e.target.value === language) {
      return;
    }
    setLanguage(e.target.value);
    saveLan(e.target.value);
  };
  return (
    <div className="language-btn-container animate-swing-drop-in">
      <button
        className={`language-btn ${language === "spanish" ? "active" : ""}`}
        onClick={(e) => handleLanguageClick(e)}
        value={"spanish"}
      >
        {language === "spanish" ? "Español" : "Spanish"}
      </button>
      <button
        className={`language-btn ${language === "english" ? "active" : ""}`}
        onClick={(e) => handleLanguageClick(e)}
        value="english"
      >
        {language === "english" ? "English" : "Inglés"}
      </button>
    </div>
  );
};
