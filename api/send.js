import { Resend } from "resend";

export default async function handler(req, res) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const data = await resend.emails.send({
      from: `${req.body.email}@https://samuel-nelo-portfolio-nsch9ko05-samuel-nelos-projects.vercel.app`,
      to: ["snelo1390@gmail.com"],
      subject: "Nuevo contacto del Portfolio",
      html: `<h2>Mensaje: ${req.body.message}</h2>`,
    });

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error });
  }
}
