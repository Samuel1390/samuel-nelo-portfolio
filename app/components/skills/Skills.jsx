"use client";
import "./Skills.css";
import SoftSkills from "./SoftSkills";
import EnglishLevel from "./EnglishLevel";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

import { LanguageContext } from "../context/LanguageContext";
import { useContext } from "react";
import MathLevel from "./MathLevel";
import TechSkills from "./TechSkills";
export function Skills() {
  const { language } = useContext(LanguageContext);
  const [ref, isVisible] = useIntersectionObserver();
  return (
    <section id="skills-section" className="skills-section font-lato my-10">
      <h2
        ref={ref}
        className={`text-gradient text-5xl text-center my-15 text-neutral-100 ${isVisible ? "animate-fade-in-down" : "opacity-0"}`}
      >
        {language === "spanish" ? "Habilidades" : "Skills"}
      </h2>
      <div className="grid gap-6 max-w-[800px] grid-cols-1 md:grid-cols-2 grid-row-6 md:grid-row-3 mx-auto w-fit">
        <EnglishLevel language={language} />
        <SoftSkills />
        <MathLevel language={language} />
        <TechSkills />
      </div>
    </section>
  );
}
