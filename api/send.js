import { Resend } from "resend";

export default async function handler(req, res) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    // Validar que el body existe
    if (!req.body) {
      return res.status(400).json({ error: "No data provided" });
    }

    const { email, message } = req.body;

    // Validar campos requeridos
    if (!email || !message) {
      return res.status(400).json({
        error: "Email and message are required",
        details: { email: !!email, message: !!message },
      });
    }

    // Validar formato de email básico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: "Invalid email format" });
    }

    console.log("Attempting to send email from:", email);
    console.log("Message length:", message.length);

    const data = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>", // FIJADO - no cambiar dinámicamente
      to: ["snelo1390@gmail.com"],
      reply_to: email, // Aquí va el email del usuario para responder
      subject: "Nuevo contacto del Portfolio",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px;">
          <h2 style="color: #333;">Nuevo mensaje desde tu Portfolio</h2>
          <p><strong>📧 De:</strong> ${email}</p>
          <p><strong>📝 Mensaje:</strong></p>
          <div style="background: #f5f5f5; padding: 15px; border-radius: 5px; margin: 10px 0;">
            ${message.replace(/\n/g, "<br>")}
          </div>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
          <p style="color: #666; font-size: 12px;">
            📅 Enviado el: ${new Date().toLocaleString("es-ES")}
          </p>
        </div>
      `,
      text: `Nuevo contacto:\n\nEmail: ${email}\n\nMensaje:\n${message}\n\nEnviado: ${new Date().toLocaleString("es-ES")}`,
    });

    console.log("✅ Email sent successfully:", data);

    res.status(200).json({
      success: true,
      message: "Email sent successfully",
      id: data.id,
    });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error });
  }
}
