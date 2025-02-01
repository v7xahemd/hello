import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";
import { sendEmail } from "./utils/email";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  message: z.string().min(10),
});

const quoteSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  service: z.string(),
  description: z.string().min(10),
});

export function registerRoutes(app: Express): Server {
  app.post("/api/contact", async (req, res) => {
    try {
      const data = contactSchema.parse(req.body);

      await sendEmail({
        subject: `Nouveau message de contact de ${data.name}`,
        text: `
Nom: ${data.name}
Email: ${data.email}
Téléphone: ${data.phone}

Message:
${data.message}
        `,
        html: `
<h2>Nouveau message de contact</h2>
<p><strong>Nom:</strong> ${data.name}</p>
<p><strong>Email:</strong> ${data.email}</p>
<p><strong>Téléphone:</strong> ${data.phone}</p>
<h3>Message:</h3>
<p>${data.message}</p>
        `,
      });

      res.json({ success: true });
    } catch (error) {
      console.error("Erreur lors de l'envoi du message de contact:", error);
      res.status(400).json({ error: "Erreur lors de l'envoi du message" });
    }
  });

  app.post("/api/quote", async (req, res) => {
    try {
      const data = quoteSchema.parse(req.body);

      await sendEmail({
        subject: `Nouvelle demande de devis de ${data.name}`,
        text: `
Nom: ${data.name}
Email: ${data.email}
Téléphone: ${data.phone}
Service: ${data.service}

Description du projet:
${data.description}
        `,
        html: `
<h2>Nouvelle demande de devis</h2>
<p><strong>Nom:</strong> ${data.name}</p>
<p><strong>Email:</strong> ${data.email}</p>
<p><strong>Téléphone:</strong> ${data.phone}</p>
<p><strong>Service:</strong> ${data.service}</p>
<h3>Description du projet:</h3>
<p>${data.description}</p>
        `,
      });

      res.json({ success: true });
    } catch (error) {
      console.error("Erreur lors de l'envoi de la demande de devis:", error);
      res.status(400).json({ error: "Erreur lors de l'envoi de la demande" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}