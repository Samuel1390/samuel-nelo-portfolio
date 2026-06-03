"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { cn } from "@/lib/utils";

const AIWorkflow = {
  ai: {
    englishText:
      "1. I write code fast\n\n2. I am excellent at creating tests and unit trials; however, I struggle to think and see things through the eyes of a real user.\n\n3. I take care of the routine tasks, mostly matching the ones that already exist within my training data.\n\n4. I focus entirely on what you want today; just ask for it and I will build it for you without hesitation.\n\n5. My memory is limited; make sure to provide me with the necessary context and information to work correctly.\n\n6. My code works 80% of the time.",
    spanishText:
      "1. Yo escribo código rápido.\n\n2. Soy excelente para crear tests y pruebas unitarias; pero me cuesta pensar y ver las cosas como lo haría un usuario real.\n\n3. Yo me encargo de las tareas rutinarias similares a las que existen en mis datos de entrenamiento.\n\n4. Yo me enfoco en lo que quieres hoy, solo pídelo y lo haré por ti sin dudar.\n\n5. Mi memoria es limitada asegúrate de darme la información necesaria para trabajar de forma correcta.\n\n6. Mi código funciona en el 80% de los casos",
  },
  programmer: {
    englishText: `1. I am the filter; I decide what is beneficial for the project and what is not.\n\n2. I constantly seek a balance between aesthetics and performance, between robustness and flexibility, between clean code and optimized code.\n\n3. Innovation and creativity are key if you want to stand out from the rest.\n\n4. I think about the project's scalability; before planting the tree, you must anticipate the branches it will grow tomorrow.\n\n5. I break the project down into parts to orchestrate and optimize the overall development.\n\n6. Simply making the implementation work is not enough; it must be secure, robust, highly optimized, and above all, useful for the end user.`,
    spanishText: `
1. Yo soy el filtro, yo decido que es bueno para el proyecto y que no.\n\n2. Siempre busco un equilibrio entre estética y rendimiento, entre robustez y flexibilidad, entre código legible y código óptimo.\n\n3. La innovación y la creatividad son clave si quieres diferenciarte del resto.\n\n4. Yo pienso en la escalabilidad del proyecto, antes de plantar el árbol debes pensar en las ramas que tendrá el día de mañana.\n\n5. Divido el proyecto en partes para orquestar y optimizar el desarrollo.\n\n6. Que la implementación funcione no es suficiente; debe ser segura, robusta, óptima y sobre todo útil para el usuario final
`,
  },
};

const AiWorkflow = ({ language }) => {
  const [numberOnHover, setNumberOnHover] = useState(null);
  const [refContainer, containerIsVisible] = useIntersectionObserver({
    threshold: 0.2,
  });
  return (
    <article
      ref={refContainer}
      className={`w-full max-w-4xl mx-auto text-white  relative z-30 ${containerIsVisible ? "animate-fade-in-up" : "opacity-0"}`}
    >
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
  );
};
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

export default AiWorkflow;
