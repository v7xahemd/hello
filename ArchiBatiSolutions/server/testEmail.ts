import { sendEmail } from "./utils/email";

sendEmail({
  subject: "Test vers Yahoo",
  text: "Ceci est un test d'email envoyé depuis Gmail vers Yahoo.",
})
  .then(() => console.log("✅ Email de test envoyé !"))
  .catch((err) => console.error("❌ Échec de l'envoi:", err));
