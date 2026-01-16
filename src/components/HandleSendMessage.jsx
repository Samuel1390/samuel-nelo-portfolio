import { LanguageContext } from "./context/LanguageContext";
import { useContext } from "react";

export default async function handleSubmit(email, message) {
  const { language } = useContext(LanguageContext);
  try {
    const response = await fetch("/api/send", {
      method: "POST",
      body: JSON.stringify({
        email: email,
        message: message,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      alert(language === "spanish" ? "Mensaje enviado" : "Message sent");
      console.log("message sent");
    } else {
      alert(language === "spanish" ? "Error al enviar" : "Error sending");
    }
    return true;
  } catch (error) {
    console.error("Error:", error);
    alert(language === "spanish" ? "Error de conexión" : "Connection error");
    return true;
  }
}
