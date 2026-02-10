import React from "react";
import { useContext } from "react";

import { LanguageContext } from "./context/LanguageContext";

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
} from "./Icons";
import { PiGraphBold } from "react-icons/pi";

const ICONS = {
  html: <HtmlSvg />,
  css: <CssSvg />,
  javascript: <JsSvg />,
  git: <GitSvg />,
  github: <GithubSvg />,
  tailwind: <TailwindSvg />,
  react: <ReactSvg />,
  nextjs: <NextSvg />,
  // typescript: <TypescriptSvg />,
};

const TechSkills = () => {
  const { language } = useContext(LanguageContext);
  return (
    <div className="skill">
      <div className="skill-title flex gap-2.5 items-center justify-center">
        <PiGraphBold size={28} />
        <h2 className="subtitle">
          {language === "spanish"
            ? "Tecnologías y herramientas"
            : "All technologies and tools"}
        </h2>
      </div>
      <div className="skills-container">
        {Object.keys(ICONS).map((key) => {
          return <IconContainer name={key}>{ICONS[key]}</IconContainer>;
        })}
      </div>
    </div>
  );
};

export default TechSkills;
