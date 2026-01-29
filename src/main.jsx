import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { LanguageProvider } from "./components/context/LanguageProvider.jsx";
import App from "./App.jsx";
// root
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </StrictMode>,
);
