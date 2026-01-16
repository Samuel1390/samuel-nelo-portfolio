import { Resend } from "resend";

export default async function handler(req, res) {
  console.log(process.env.RESEND_API_KEY);
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const data = await resend.emails.send({
      from: "Tu Portfolio <onboarding@resend.dev>",
      to: ["tu-email@gmail.com"],
      subject: "Nuevo contacto del Portfolio",
      html: `<p>Mensaje: ${req.body.message}</p>`,
    });

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error });
  }
}
