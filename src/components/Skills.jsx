import "./Skills.css";
import "../globals.css";
import SoftSkills from "./SoftSkills";
import EnglishLevel from "./EnglishLevel";
import { useIntersectionObserver } from "./hooks/useIntersectionObserver";

import { LanguageContext } from "./context/LanguageContext";
import { useContext } from "react";
import MathLevel from "./MathLevel";
import TechSkills from "./TechSkills";
export function Skills() {
  const { language } = useContext(LanguageContext);
  const [ref, isVisible] = useIntersectionObserver();
  return (
    <section id="skills-section" className="skills-section font-lato my-10">
      <div className="flex items-center flex-col justify-center text-center p-2.5 gap-2.5">
        <h2
          ref={ref}
          className={`text-gradient text-5xl text-neutral-100 ${isVisible ? "animate-fade-in-down" : "opacity-0"}`}
        >
          {language === "spanish" ? "Habilidades" : "Skills"}
        </h2>
        <svg
          className="fill-neutral-200 m-3"
          width={50}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M120 56c0-30.9 25.1-56 56-56l24 0c17.7 0 32 14.3 32 32l0 448c0 17.7-14.3 32-32 32l-32 0c-29.8 0-54.9-20.4-62-48-.7 0-1.3 0-2 0-44.2 0-80-35.8-80-80 0-18 6-34.6 16-48-19.4-14.6-32-37.8-32-64 0-30.9 17.6-57.8 43.2-71.1-7.1-12-11.2-26-11.2-40.9 0-44.2 35.8-80 80-80l0-24zm272 0l0 24c44.2 0 80 35.8 80 80 0 15-4.1 29-11.2 40.9 25.7 13.3 43.2 40.1 43.2 71.1 0 26.2-12.6 49.4-32 64 10 13.4 16 30 16 48 0 44.2-35.8 80-80 80-.7 0-1.3 0-2 0-7.1 27.6-32.2 48-62 48l-32 0c-17.7 0-32-14.3-32-32l0-448c0-17.7 14.3-32 32-32l24 0c30.9 0 56 25.1 56 56z" />
        </svg>
      </div>
      <div className="grid gap-6 max-w-[800px] grid-cols-1 md:grid-cols-2 grid-row-6 md:grid-row-3 mx-auto w-fit">
        <TechSkills />
        <EnglishLevel language={language} />
        <MathLevel language={language} />
        <SoftSkills />
      </div>
    </section>
  );
}
