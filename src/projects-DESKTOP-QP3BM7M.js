import snowGamesImage from "./public/snow-games.png";
import snowContrastImage from "./public/project-snow-contrast.png";
import oakCoffeeImage from "./public/project-okc.png";

const projects = [
  // {
  //   title: "Oak Coffee",
  //   image: oakCoffeeImage,
  //   projectDescription:
  //     "La mejor tienda de café en Caracas Valencia | Cafeteía, panadería y repostería.",
  //   projectDescriptionEn:
  //     "The best coffee shop in Caracas Valencia | Coffee shop, bakery, and pastry shop.",
  //   typeDescription:
  //     "Página personalizada y llamativa para aumentar alcance de la cafetería.",
  //   typeDescriptionEn:
  //     "Custom and attractive page to increase the coffee shop's reach.",
  //   pageLink: "https://samuel1390.github.io/Oak-Coffee/",
  //   codeSource: "https://github.com/Samuel1390/Oak-Coffee",
  //   technologies: ["html", "css", "javascript"],
  //   tags: {
  //     tagsEn: [],
  //     tagsEs: [],
  //   },
  // },
  {
    title: "Snow contrast",
    image: snowContrastImage,
    projectDescription:
      "Herramienta para desarrolladores frontend y diseñadores gráficos | Genera colores contrastados y observa los resultados en tiempo real con elementos comunmente vistos en páginas web.",
    projectDescriptionEn:
      "Tool for frontend developers and graphic designers | Generate contrasting colors and see the results in real-time with commonly seen web page elements.",
    typeDescription: "Herramienta generadora de colores.",
    typeDescriptionEn: "Color generator tool.",
    pageLink: "https://samuel1390.github.io/Snow-contrast/",
    codeSource: "https://github.com/Samuel1390/Snow-contrast",
    technologies: ["html", "css", "javascript"],
    tags: {
      tagsEn: [{ name: "Tool", color: "#60a5fa" }],
      tagsEs: [{ name: "Herramienta", color: "#60a5fa" }],
    },
  },
  {
    title: "Snow animations",
    image:
      "https://github.com/Samuel1390/snow-animations/blob/main/public/og-image.png?raw=true",
    projectDescription:
      "Animaciones de CSS listas para usar, dale vida a tu aplicación con estas animaciones, copia-pega y disfruta.",
    projectDescriptionEn:
      "Ready-to-use CSS animations to bring life to your application. Copy-paste and enjoy.",
    typeDescription:
      "Proyecto de animaciones de CSS abierto a colaboraciones de la comunidad hecho en Next.js + TypeScript.",
    typeDescriptionEn:
      "Project of CSS animations open to community collaborations made in Next.js + TypeScript.",
    pageLink: "https://snow-animations.vercel.app",
    codeSource: "https://github.com/Samuel1390/snow-animations",
    technologies: ["html", "css", "typescript", "react", "tailwind", "next.js"],
    tags: {
      tagsEn: [
        { name: "App open to contributions", color: "#99ffaa" },
        { name: "Favorite project", color: "#ffff22" },
      ],
      tagsEs: [
        { name: "Aplicación abierta a contribuciones", color: "#99ffaa" },
        { name: "Proyecto favorito", color: "#ffff22" },
      ],
    },
  },
  {
    // new project
    title: "Snow games",
    image: snowGamesImage,
    projectDescription:
      "Tienda online de videojuegos en formato dijital, de Playstation, Xbox, Nintendo switch y Steam",
    projectDescriptionEn:
      "Ecommerce of dijital games on dijital format, Playstation, Xbox, Nintendo switch and Steam",
    typeDescription:
      "Tienda de juegos dijitales hecha con React con el framework Next.js.",
    typeDescriptionEn:
      "Dijital game online store made with React + Next.js framework.",
    pageLink: "https://snow-games-hacs.vercel.app",
    codeSource: "https://github.com/Samuel1390/snow-games",
    technologies: ["html", "css", "typescript", "react", "tailwind", "next.js"],
    tags: {
      tagsEn: [],
      tagsEs: [],
    },
  },
];
export default projects;
