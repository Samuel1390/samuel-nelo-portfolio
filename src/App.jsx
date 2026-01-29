import "./globals.css";

import { AboutMe } from "./components/AboutMe";
import { Skills } from "./components/Skills";
import { Proyects } from "./components/Proyects";
import { Top } from "./components/Top";
import snowGamesImage from "./public/snow-games.png";
import shoppingFestImage from "./public/shopping-fest.png";
import snowContrastImage from "./public/project-snow-contrast.png";
import oakCoffeeImage from "./public/project-okc.png";

const proyects = [
  {
    title: "Oak Coffee",
    image: oakCoffeeImage,
    proyectDescription:
      "La mejor tienda de café en Caracas Valencia | Cafeteía, panadería y repostería.",
    proyectDescriptionEn:
      "The best coffee shop in Caracas Valencia | Coffee shop, bakery, and pastry shop.",
    typeDescription:
      "Página personalizada y llamativa para aumentar alcance de la cafetería.",
    typeDescriptionEn:
      "Custom and attractive page to increase the coffee shop's reach.",
    pageLink: "https://samuel1390.github.io/Oak-Coffee/",
    codeSource: "https://github.com/Samuel1390/Oak-Coffee",
    technologies: "",
  },
  {
    title: "Snow contrast",
    image: snowContrastImage,
    proyectDescription:
      "Herramienta para desarrolladores frontend y diseñadores gráficos | Genera colores contrastados y observa los resultados en tiempo real con elementos comunmente vistos en páginas web.",
    proyectDescriptionEn:
      "Tool for frontend developers and graphic designers | Generate contrasting colors and see the results in real-time with commonly seen web page elements.",
    typeDescription: "Herramienta generadora de colores.",
    typeDescriptionEn: "Color generator tool.",
    pageLink: "https://samuel1390.github.io/Snow-contrast/",
    codeSource: "https://github.com/Samuel1390/Snow-contrast",
    technologies: "",
  },
  {
    title: "Shopping fest",
    image: shoppingFestImage,
    proyectDescription:
      "Tienda online con productos de hogar, cosméticos, alimentos y más.",
    proyectDescriptionEn:
      "Online store with home products, cosmetics, food, and more.",
    typeDescription: "E-commerce (tienda online) hecha con react vite.",
    typeDescriptionEn: "E-commerce (online store) made with React Vite.",
    pageLink: "https://shopping-fest.vercel.app",
    codeSource:
      "https://github.com/Samuel1390/Shopping-fest-Ecommerce-in-react",
    technologies: "react tailwind",
  },
  {
    // new proyect
    title: "Snow games",
    image: snowGamesImage,
    proyectDescription:
      "Tienda online de videojuegos en formato dijital, de Playstation, Xbox, Nintendo switch y Steam",
    proyectDescriptionEn:
      "Ecommerce of dijital games on dijital format, Playstation, Xbox, Nintendo switch and Steam",
    typeDescription:
      "Tienda de juegos dijitales hecha con React con el framework Next.js.",
    typeDescriptionEn:
      "Dijital game online store made with React with + Next.js framework.",
    pageLink: "https://snow-games-hacs.vercel.app",
    codeSource: "https://github.com/Samuel1390/snow-games",
    technologies: "react tailwind",
  },
];

function App() {
  return (
    <div className="general-container w-full max-w-300">
      <Top />
      <Proyects proyects={proyects} />
      <Skills />
      <AboutMe />
    </div>
  );
}
export default App;
