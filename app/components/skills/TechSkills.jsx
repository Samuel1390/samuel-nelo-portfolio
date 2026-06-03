"use client";
import React from "react";
import { useContext, useState } from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { LanguageContext } from "../context/LanguageContext";
import techSkillsData from "./techSkillsData";
import Card from "./Card";
import {
  HtmlSvg,
  CssSvg,
  JsSvg,
  ReactSvg,
  GitSvg,
  GithubSvg,
  TailwindSvg,
  TypescriptSvg,
  NextSvg,
  IconContainer,
} from "../Icons";

const ICONS = {
  html: <HtmlSvg />,
  css: <CssSvg />,
  javascript: <JsSvg />,
  git: <GitSvg />,
  github: <GithubSvg />,
  tailwind: <TailwindSvg />,
  react: <ReactSvg />,
  nextjs: <NextSvg />,
  typescript: <TypescriptSvg fillColor="var(--color-gray-900)" />,
};

const TechSkills = () => {
  const { language } = useContext(LanguageContext);
  const [ref, isVisible] = useIntersectionObserver();
  const [iconOnHover, setIconOnHover] = useState(null);
  const techDataManager = () => {
    if (iconOnHover) {
      const techInfo = techSkillsData[iconOnHover];
      if (language === "spanish") {
        return techInfo["dataES"];
      } else {
        return techInfo["dataEN"];
      }
    } else {
      return "";
    }
  };
  return (
    <>
      <Card
        ref={ref}
        className={`skill ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
      >
        <h2 className="subtitle text-center">
          {language === "spanish"
            ? "Tecnologías y herramientas"
            : "All technologies and tools"}
        </h2>
        <div className="skills-container">
          {Object.keys(ICONS).map((key) => (
            <div
              style={{ padding: 0, border: "none" }}
              key={key}
              className="icon-container"
              onMouseEnter={() => setIconOnHover(key)}
              onMouseLeave={() => setIconOnHover(null)}
            >
              <IconContainer name={key}>{ICONS[key]}</IconContainer>
            </div>
          ))}
        </div>
      </Card>
      <div
        className={`${iconOnHover ? "animate-fade-in-left opacity-100" : "opacity-0"}
        fixed flex items-center text-right text-pretty z-400 bottom-3 mask-l-from-85% to-0% bg-neutral-900/80 max-w-110 text-white border-t right-0
        border-white p-3 pl-14 pr-5 gap-8`}
      >
        {iconOnHover && <div className="scale-250">{ICONS[iconOnHover]}</div>}
        {techDataManager()}
      </div>
    </>
  );
};

export default TechSkills;
