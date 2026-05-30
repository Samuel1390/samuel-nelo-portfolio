"use client";
import { FaGraduationCap } from "react-icons/fa6";
import { TbTargetArrow } from "react-icons/tb";
import { IoPerson } from "react-icons/io5";
import { LanguageContext } from "../context/LanguageContext";
import MechanicalKeyBoard from "@/app/components/aboutMe/Mechanical_keyboard";
import { Canvas } from "@react-three/fiber";
import Achivements from "./Achivements";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { useContext, useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import ProfilePicture from "../top/right-side/ProfilePicture";
import AIWorkflow from "./ai-workflow";
import Image from "next/image";
import { cn } from "@/lib/utils";
import useWindowResize from "../hooks/useWindowResize";
import { Geist } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

import "./AboutMe.css";
const paragraphs = {
  EsAboutMe:
    "Desarrollador Front-End apasionado por crear experiencias digitales que combinen funcionalidad y diseño. Mi viaje en la programación comenzó con curiosidad y se transformó en una dedicación constante por aprender y mejorar cada día.",
  EnAboutMe:
    "Passionate Front-End Developer dedicated to crafting digital experiences that blend functionality and design. My programming journey started with curiosity and has evolved into a steadfast commitment to learning and improving every day.",
  EsFormation:
    "Combino estudios formales en la Universidad de Carabobo con aprendizaje autodidacta continuo. Me especializo en tecnologías web fundamentales (HTML5, CSS3, JavaScript ES6+) y actualmente afino mis habilidades en React. Aprendo tanto de documentación oficial como de referentes de la comunidad hispanohablante.",
  EnFormation:
    "I combine formal studies at the University of Carabobo with continuous self-learning. I specialize in fundamental web technologies (HTML5, CSS3, JavaScript ES6+) and am currently honing my skills in React. I learn from both official documentation and references from the Spanish-speaking community.",
  EsObjectives:
    "Mis reglas de oro en el desarrollo se basan en tres pilares: escribir código mantenible y eficiente, crear interfaces intuitivas con excelente rendimiento, y colaborar en equipos para construir proyectos más grandes. Busco siempre el equilibrio entre estética y funcionalidad.",
  EnObjectives:
    "My golden rules in development are based on three pillars: writing maintainable and efficient code, creating intuitive interfaces with excellent performance, and collaborating in teams to build larger projects. I always seek the balance between aesthetics and functionality.",
};

export function AboutMe() {
  const [refContainer, containerIsVisible] = useIntersectionObserver({
    threshold: 0.2,
  });
  const [refTitle, titleIsVisible] = useIntersectionObserver({
    threshold: 0.2,
  });
  const { language } = useContext(LanguageContext);
  const [numberOnHover, setNumberOnHover] = useState(null);
  const [canvasActive, setCanvasActive] = useState(false);
  const { width } = useWindowResize();
  return (
    <section>
      <h2
        ref={refTitle}
        className={`text-gradient text-center my-10 text-5xl font-lato
          text-neutral-100 ${titleIsVisible ? "animate-fade-in-down" : "opacity-0"}`}
      >
        {language === "spanish" ? "Acerca de mí" : "About me"}
      </h2>
      <article
        ref={refContainer}
        id="about-me-section"
        className={`
    place-content-center p-0
    flex justify-center ${containerIsVisible ? "animate-fade-in-up" : "opacity-0"} `}
      >
        <div className="about-section border border-solid border-neutral-50 flex grow-{1} font-lato bg-(--dark-color3) h-full">
          <section className="about-me-section">
            <div className="about-text-container max-w-120 p-10 text-center">
              <div className="icon-div">
                <h2 className="subtitle">
                  {language === "spanish" ? "Acerca de mí" : "About Me"}
                </h2>
                <IoPerson size={28} />
              </div>
              <p className="text">
                {language === "spanish"
                  ? paragraphs.EsAboutMe
                  : paragraphs.EnAboutMe}
              </p>
              <div className="icon-div">
                <h2 className="subtitle">
                  {language === "spanish" ? "Formación" : "Formation"}
                </h2>
                <FaGraduationCap size={28} />
              </div>
              <p className="text">
                {language === "spanish"
                  ? paragraphs.EsFormation
                  : paragraphs.EnFormation}
              </p>
              <div className="icon-div">
                <h2 className="subtitle">
                  {language === "spanish" ? "Objetivos" : "Objectives"}
                </h2>
                <TbTargetArrow size={28} />
              </div>
              <p className="text">
                {language === "spanish"
                  ? paragraphs.EsObjectives
                  : paragraphs.EnObjectives}
              </p>
            </div>
            <div className="about-imgs-container">
              <div className="about-img"></div>
              <Image
                loading="lazy"
                src="/sam-nelo.jpeg"
                alt="imagen de Samuel Nelo"
                width={400}
                height={400}
                className="about-me-img hidden sm:block object-cover overflow-hidden"
              />
              *
            </div>
          </section>
        </div>
      </article>
      <article className="w-full max-w-4xl mx-auto text-white  relative z-30">
        <h2 className="text-2xl text-center text-neutral-50 my-10">
          {language === "spanish"
            ? "Cómo se integra la IA en mi flujo de trabajo"
            : "How AI is integrated into my workflow"}
        </h2>

        <div className="grid w-full mx-auto px-5 md:grid-cols-2 gap-10">
          <div className="bg-gradient-to-br shadow-neutral-900/60 shadow-md relative to-gray-800/80 p-6 from-gray-950/80 backdrop-blur-sm border rounded-lg border-neutral-400 overflow-hidden">
            <Image
              className="absolute opacity-30 bottom-[-10%] left-[-10%] z-50 pointer-events-none"
              height={280}
              width={280}
              loading="lazy"
              alt={"Gemini"}
              src={"/gemini.png"}
            />
            <Image
              className="absolute blur-sm opacity-20 bottom-[-10%] left-[-10%] z-45 pointer-events-none"
              height={280}
              width={280}
              loading="lazy"
              alt={"Gemini"}
              src={"/gemini.png"}
            />
            <h3 className="text-lg font-bold">
              {language === "spanish" ? "IA" : "AI"}
            </h3>
            <div className="text-pre">
              {language === "spanish"
                ? formatText(
                    AIWorkflow.ai.spanishText,
                    numberOnHover,
                    setNumberOnHover,
                  )
                : formatText(
                    AIWorkflow.ai.englishText,
                    numberOnHover,
                    setNumberOnHover,
                  )}
            </div>
          </div>
          <div className="bg-gradient-to-br shadow-neutral-900/60 shadow-md relative to-gray-800/80 p-6 from-gray-950/80 backdrop-blur-sm border rounded-lg border-neutral-400 overflow-hidden">
            <Image
              className="absolute opacity-30 bottom-[-10%] left-[-10%] z-50 pointer-events-none rounded-full"
              height={280}
              width={280}
              loading="lazy"
              alt={"Gemini"}
              src={"https://avatars.githubusercontent.com/u/195463641?v=4"}
            />
            <Image
              className="absolute blur-sm opacity-20 bottom-[-10%] left-[-10%] z-45 pointer-events-none rounded-full"
              height={280}
              width={280}
              loading="lazy"
              alt={"Gemini"}
              src={"https://avatars.githubusercontent.com/u/195463641?v=4"}
            />
            <h3 className="text-lg font-bold">
              {language === "spanish"
                ? "Yo como programador"
                : "Me as a programmer"}
            </h3>
            <div className="text-pre">
              {language === "spanish"
                ? formatText(
                    AIWorkflow.programmer.spanishText,
                    numberOnHover,
                    setNumberOnHover,
                  )
                : formatText(
                    AIWorkflow.programmer.englishText,
                    numberOnHover,
                    setNumberOnHover,
                  )}
            </div>
          </div>
        </div>
      </article>

      {/* Seccion de logros con el teclado mecanico en 3d a la izquierda */}
      <section className="grid grid-cols-1 relative overflow-hidden">
        {width >= 890 ? (
          <div className="relative w-full h-full">
            <Canvas
              onClick={() => setCanvasActive(true)}
              onPointerLeave={async () =>
                setTimeout(() => {
                  setCanvasActive(false);
                }, 1000)
              }
              className="absolute inset-0 max-h-[700px]"
            >
              <ambientLight intensity={1} />
              <directionalLight position={[10, 10, 10]} />
              <MechanicalKeyBoard scale={10} />
            </Canvas>
            <div className="absolute z-50 right-0 max-w-[50%] text-white pointer-events-none top-20">
              <Achivements
                language={language}
                className={
                  canvasActive ? "pointer-events-auto" : "pointer-events-none"
                }
              />
            </div>
          </div>
        ) : (
          <div className="w-full flex items-center justify-center">
            <Achivements className="pr-3 mx-2 max-w-lg" />
          </div>
        )}
      </section>
      {/* Boton  para subir al hero(top-section)*/}
      <section className="btn-container">
        <button className="btn">
          <a href="#top-section" className="font-jost">
            {language === "spanish"
              ? "Ir a la sección principal"
              : "Go to the main section"}
          </a>
        </button>
      </section>
    </section>
  );
}
function formatText(text, numberOnHover, setNumberOnHover) {
  return text.split("\n\n").map((line, i) => (
    <div
      key={text + (i + 1)}
      onMouseEnter={() => setNumberOnHover(i + 1)}
      onMouseLeave={() => setNumberOnHover(null)}
      className={cn(
        "block my-2 transition-all duration-300 ease-in-out cursor-default relative z-60",
        numberOnHover === i + 1
          ? "scale-110 blur-0"
          : numberOnHover !== null
            ? "blur-sm scale-90 opacity-50"
            : "blur-0 scale-100 opacity-100",
      )}
    >
      {line}
    </div>
  ));
}
