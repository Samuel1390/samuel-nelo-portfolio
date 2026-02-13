import React from "react";
import { useContext } from "react";
import { LanguageContext } from "./context/LanguageContext";
import { IoMicSharp } from "react-icons/io5";
import { VscDebug } from "react-icons/vsc";
import { FaHandsHelping } from "react-icons/fa";
import { MdLanguage, MdOpacity } from "react-icons/md";
import { RiLightbulbFlashLine } from "react-icons/ri";
import { useIntersectionObserver } from "./hooks/useIntersectionObserver";

import { TbMathIntegral } from "react-icons/tb";

const SoftSkills = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });

  const { language } = useContext(LanguageContext);
  return (
    <div
      ref={ref}
      className={`skill ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
    >
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
          <div className="icon-container soft-skill">
            <IoMicSharp size={26} />
            <h3>
              {language === "spanish"
                ? "Oratoria y comunicación efectiva"
                : "Public speaking and effective communication"}
            </h3>
          </div>
          <div className="icon-container soft-skill ">
            <MdLanguage size={26} />
            <h3>
              {language === "spanish"
                ? "Inglés (intermedio)"
                : "English (intermediate)"}
            </h3>
          </div>
          <div className="icon-container soft-skill">
            <VscDebug size={26} />
            <h3>
              {language === "spanish"
                ? "resolución de problemas"
                : "problem solving"}
            </h3>
          </div>
          <div className="icon-container soft-skill">
            <RiLightbulbFlashLine size={26} />
            <h3>
              {language === "spanish"
                ? "Creatividad e innovación"
                : "Creativity and innovation"}
            </h3>
          </div>
          <div className="icon-container soft-skill">
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
