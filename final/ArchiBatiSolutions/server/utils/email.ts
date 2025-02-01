import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "nerepondspas.archibati@gmail.com",
    pass: "nsyfrltacklubkqv", // Mot de passe d'application Gmail
  },
});

// Vérifier la connexion SMTP
transporter.verify((error, success) => {
  if (error) {
    console.error("❌ Erreur SMTP:", error);
  } else {
    console.log("✅ Connexion SMTP réussie !");
  }
});

export interface EmailData {
  subject: string;
  text: string;
  html?: string;
}

export async function sendEmail(data: EmailData) {
  const mailOptions = {
    from: '"NE-REPONDS-PAS-ARCHI-BATI" <nerepondspas.archibati@gmail.com>', // Expéditeur
    to: "contact@archibati.fr", // Adresse de l'entreprise
    subject: data.subject,
    text: data.text,
    html: data.html,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Email envoyé:", info.response);
    return info;
  } catch (error) {
    console.error("❌ Erreur lors de l'envoi:", error);
    throw error;
  }
}
