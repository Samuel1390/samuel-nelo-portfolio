import snowGamesImage from "./public/snow-games.png";
import shoppingFestImage from "./public/shopping-fest.png";
import snowContrastImage from "./public/project-snow-contrast.png";
import oakCoffeeImage from "./public/project-okc.png";

const projects = [
  {
    title: "Oak Coffee",
    image: oakCoffeeImage,
    projectDescription:
      "La mejor tienda de café en Caracas Valencia | Cafeteía, panadería y repostería.",
    projectDescriptionEn:
      "The best coffee shop in Caracas Valencia | Coffee shop, bakery, and pastry shop.",
    typeDescription:
      "Página personalizada y llamativa para aumentar alcance de la cafetería.",
    typeDescriptionEn:
      "Custom and attractive page to increase the coffee shop's reach.",
    pageLink: "https://samuel1390.github.io/Oak-Coffee/",
    codeSource: "https://github.com/Samuel1390/Oak-Coffee",
    technologies: ["html", "css", "javascript"],
    tags: {
      tagsEn: [],
      tagsEs: [],
    },
  },
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
      tagsEn: [],
      tagsEs: [],
    },
  },
  {
    title: "Shopping fest",
    image: shoppingFestImage,
    projectDescription:
      "Tienda online con productos de hogar, cosméticos, alimentos y más.",
    projectDescriptionEn:
      "Online store with home products, cosmetics, food, and more.",
    typeDescription: "E-commerce (tienda online) hecha con react vite.",
    typeDescriptionEn: "E-commerce (online store) made with React Vite.",
    pageLink: "https://shopping-fest.vercel.app",
    codeSource:
      "https://github.com/Samuel1390/Shopping-fest-Ecommerce-in-react",
    technologies: ["html", "css", "javascript", "react", "tailwind"],
    tags: {
      tagsEn: [{ name: "App in development", color: "#FFFF00" }],
      tagsEs: [{ name: "Página aún en desarrollo", color: "#FFFF00" }],
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
    technologies: ["html", "css", "typescript", "react", "tailwind", "nextjs"],
    tags: {
      tagsEn: [{ name: "Most recent app", color: "#60a5fa" }],
      tagsEs: [{ name: "Página mas reciente", color: "#60a5fa" }],
    },
  },
];
export default projects;
