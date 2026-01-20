import "./globals.css";

import { AboutMe } from "./components/AboutMe";
import { Skills } from "./components/Skills";
import { Proyects } from "./components/Proyects";
import { Top } from "./components/Top";
import { PruebaTailwind } from "./components/Prueba";

const proyects = [
  {
    title: "Oak Coffee",
    image:
      "https://github.com/Samuel1390/Oak-Coffee/blob/main/okc-imgs/proyect-okc.png?raw=true",
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
    image:
      "https://github.com/Samuel1390/Oak-Coffee/blob/main/okc-imgs/proyect-snow.png?raw=true",
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
    image:
      "https://github.com/Samuel1390/Ecomerce-on-react/blob/master/public/ecomerce-preview.png?raw=true",
    proyectDescription:
      "Tienda online con productos de hogar, cosméticos, alimentos y más.",
    proyectDescriptionEn:
      "Online store with home products, cosmetics, food, and more.",
    typeDescription: "E-commerce (tienda online) hecha con react vite.",
    typeDescriptionEn: "E-commerce (online store) made with React Vite.",
    pageLink: "https://samuel1390.github.io/Ecomerce-on-react/",
    codeSource: "https://github.com/Samuel1390/Ecomerce-on-react",
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
      {/*<PruebaTailwind />*/}
    </div>
  );
}
export default App;
