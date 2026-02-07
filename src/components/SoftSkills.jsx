import React from "react";
import { useContext } from "react";
import { LanguageContext } from "./context/LanguageContext";
import { IoMicSharp } from "react-icons/io5";
import { VscDebug } from "react-icons/vsc";
import { FaHandsHelping } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";
import { RiLightbulbFlashLine } from "react-icons/ri";

import { TbMathIntegral } from "react-icons/tb";

const SoftSkills = () => {
  const { language } = useContext(LanguageContext);
  return (
    <div className="skill">
      <div className="skill-title gap-2.5 flex justify-center items-center">
        <FaHandsHelping size={28} />
        <h2 className="subtitle">
          {language === "spanish"
            ? "Todas las habilidades blandas"
            : "All Soft skills"}
        </h2>
      </div>
      <div className="skills-container">
        <div className="skills-container">
          <div className="icon-container">
            <IoMicSharp size={26} />
            <h3>
              {language === "spanish"
                ? "Oratoria y comunicación efectiva"
                : "Public speaking and effective communication"}
            </h3>
          </div>
          <div className="icon-container">
            <MdLanguage size={26} />
            <h3>
              {language === "spanish"
                ? "Inglés (intermedio)"
                : "English (intermediate)"}
            </h3>
          </div>
          <div className="icon-container">
            <VscDebug size={26} />
            <h3>
              {language === "spanish"
                ? "resolución de problemas"
                : "problem solving"}
            </h3>
          </div>
          <div className="icon-container">
            <RiLightbulbFlashLine size={26} />
            <h3>
              {language === "spanish"
                ? "Creatividad e innovación"
                : "Creativity and innovation"}
            </h3>
          </div>
          <div className="icon-container">
            <TbMathIntegral size={26} />
            <h3>
              {language === "spanish"
                ? "Cálculo diferencial e integral"
                : "Differential and integral calculus"}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoftSkills;
