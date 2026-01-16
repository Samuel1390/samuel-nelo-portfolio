import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { LanguageProvider } from "./components/context/LanguageContext";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </StrictMode>
);
