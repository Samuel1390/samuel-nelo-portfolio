import React from "react";
import { Trophy } from "lucide-react";
import { cn } from "@/lib/utils";

const TEXTS = {
  spanish: {
    title: "Logros",
    segment: (
      <>
        Creé un chat de IA llamado{" "}
        <a
          href="https://segment-mk.vercel.app"
          className="pointer-events-auto text-sky-400 font-bold hover:underline"
        >
          Segment
        </a>{" "}
        basado en otros modelos de lenguaje como GPT, Gemini, Llama y otros más,
        y le di instrucciones específicas. ¿El reto?, hacer que todos estos
        modelos fuesen compatibles entre sí. Para esto hallé una solución
        creativa e inteligente: crear un objeto con un formato de chat genérico.
        Este se encargaría de orquestar la comunicación entre los modelos; de
        esta forma, el usuario podía estar conversando con Gemini y luego
        cambiar a GPT sin ningún problema, ya que el historial de conversación
        se guardaba en el objeto genérico. Fue como una especie de mini-SDK para
        modelos de IA.
      </>
    ),
    threejs: (
      <>
        Mi curiosidad me llevó a explorar la librería{" "}
        <a
          href="https://threejs.org"
          className="pointer-events-auto text-sky-400 font-bold hover:underline"
        >
          Three.js
        </a>
        . Esta joya te permite crear gráficos 3D en el navegador, abarcando
        desde formas geométricas simples hasta modelos complejos. ¿El problema?,
        implementar modelos 3D en páginas web es costoso y requiere mucha
        potencia de cómputo. Quise implementar una habitación en mi página, pero
        cuando lo logré me di cuenta de que era demasiado lento. ¿Qué hice?, me
        dispuse a investigar y estudiar cómo optimizar estos modelos. Aprendí a
        comprimir archivos .glb usando Draco, a usar frameloop para renderizar
        los modelos solo cuando hay cambios en la pantalla, a generar
        componentes de React con los modelos comprimidos y a reducir el número
        de segmentos. Gracias a esto, logré implementar la habitación 3D
        reduciendo el tiempo de carga de 5.7s a menos de 2 segundos, con una
        disminución en la calidad casi imperceptible.{" "}
        <a
          href="#top"
          className="pointer-events-auto text-sky-400 font-bold hover:underline"
        >
          Seguro ya la habrás visto si estás visitando mi página desde un
          monitor.
        </a>
      </>
    ),
  },
  english: {
    title: "Achievements",
    segment: (
      <>
        I built an AI chat platform called{" "}
        <a
          href="https://segment-mk.vercel.app"
          className="pointer-events-auto text-sky-400 font-bold hover:underline"
        >
          Segment
        </a>{" "}
        powered by large language models like GPT, Gemini, and Llama, customized
        with specific instructions. The challenge? Making all these different
        models compatible with each other. To solve this, I developed a creative
        architecture: a generic chat object format that orchestrates
        communication across APIs. This allows users to seamlessly switch from a
        conversation with Gemini to GPT mid-session, preserving the entire
        history within the generic State. It essentially functions as a
        lightweight custom SDK for AI models.
      </>
    ),
    threejs: (
      <>
        Curiosity drove me to explore{" "}
        <a
          href="https://threejs.org"
          className="pointer-events-auto text-sky-400 font-bold hover:underline"
        >
          Three.js
        </a>
        , a powerful library for rendering 3D graphics directly in the browser,
        from simple geometries to complex environments. However,
        production-ready 3D web graphics are expensive and resource-intensive. I
        initially built a 3D room for my portfolio, but the initial setup ran
        into severe performance issues. To fix it, I researched optimization
        strategies: compressing `.glb` files using Draco, leveraging conditional
        `frameloop` execution to render frames only during active user
        interaction, generating optimized React components from raw assets, and
        lowering segment counts. As a result, I cut down the 3D room's loading
        time from 5.7 seconds to under 2 seconds, achieving a near-unnoticeable
        impact on visual fidelity.{" "}
        <a
          href="#top"
          className="pointer-events-auto text-sky-400 font-bold hover:underline"
        >
          You have probably already interacted with it if you are viewing this
          page on a desktop.
        </a>
      </>
    ),
  },
};

const Achievements = ({ language, className = "", ...props }) => {
  return (
    <div
      className={cn(
        "text-pretty text-white border-l border-white sm:px-4 py-3 px-2 text-sm text-start",
        className,
      )}
      {...props}
    >
      <h3 className="ml-3 text-3xl font-bold mt-0">
        {language === "spanish" ? "Logros" : "Achievements"}
        <Trophy className="ml-2 inline" />
      </h3>
      <article>
        <p className="px-3 mt-3">
          {language === "spanish"
            ? TEXTS.spanish.segment
            : TEXTS.english.segment}
        </p>
        <p className="px-3 mt-3">
          {language === "spanish"
            ? TEXTS.spanish.threejs
            : TEXTS.english.threejs}
        </p>
      </article>
    </div>
  );
};

export default Achievements;
