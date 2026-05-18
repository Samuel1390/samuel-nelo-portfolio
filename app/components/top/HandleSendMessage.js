"use server";

export default async function handleSubmit(email, message, language) {
  try {
    const response = await fetch("https://formspree.io/f/mlgvddjo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email: email,
        message: message,
        language: language,
        html_format: getHtml(email, message, language),
        _subject: "Mensaje desde mi portafolio",
      }),
    });

    if (response.ok) {
      return {
        status: 200,
        message: language === "spanish" ? "Mensaje enviado correctamente." : "Message sent successfully.",
      };
    } else {
      const errorData = await response.json().catch(() => ({}));
      return {
        status: response.status || 400,
        message: errorData.error || (language === "spanish" ? "Error al enviar." : "Error sending message."),
      };
    }
  } catch (e) {
    return {
      status: 400,
      message: e.message,
    };
  }
}
const getHtml = (email, message, language) => {
  return `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px;">
          <h2 style="color: #333;">Nuevo mensaje desde tu Portfolio</h2>
          <p><strong> Email:</strong> ${email}</p>
          <p><strong> El mensaje fue enviado desde el idioma:</strong> ${language}</p>
          <p><strong> Mensaje:</strong></p>
          <div style="background: #f5f5f5; padding: 15px; border-radius: 5px; margin: 10px 0;">
            ${message.replace(/\n/g, "<br>")}
          </div>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
          <p style="color: #666; font-size: 12px;">
            Enviado el: ${new Date().toLocaleString("es-ES")}
          </p>
        </div>
      `;
};
