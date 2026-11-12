import { sendEmail } from "../src/lib/mail.js";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed. Only POST is accepted." });
  }

  try {
    const { name, email, company, service, message } = req.body || {};

    if (!name || !email || !message) {
      return res.status(400).json({
        error: "Name, email, and message are required.",
      });
    }

    const recipient = (process.env.TO_EMAIL || "sayeedmahdimousavi789@gmail.com").trim();
    const senderName = String(name).trim();
    const senderEmail = String(email).trim();
    const companyName = company ? String(company).trim() : "Not provided";
    const serviceName = service ? String(service).trim() : "Not specified";
    const messageText = String(message).trim();

    await sendEmail({
      to: recipient,
      replyTo: senderEmail,
      subject: `Portfolio contact from ${senderName}`,
      text: [
        `Name: ${senderName}`,
        `Email: ${senderEmail}`,
        `Organization: ${companyName}`,
        `Service: ${serviceName}`,
        "",
        "Message:",
        messageText,
      ].join("\n"),
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827;">
          <h2 style="margin-bottom: 12px;">New portfolio message</h2>
          <p><strong>Name:</strong> ${senderName}</p>
          <p><strong>Email:</strong> ${senderEmail}</p>
          <p><strong>Organization:</strong> ${companyName}</p>
          <p><strong>Service:</strong> ${serviceName}</p>
          <div style="margin-top: 16px; padding: 12px 16px; background: #f3f4f6; border-radius: 8px;">
            <strong>Message:</strong>
            <p style="margin-top: 8px; white-space: pre-wrap;">${messageText}</p>
          </div>
        </div>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Vercel contact handler failed:", error);
    let errorMessage = "Failed to send the email. Please try again.";
    if (error instanceof Error && error.message) {
      errorMessage = error.message;
    } else if (typeof error === "object" && error !== null) {
      errorMessage = error.message || error.response || JSON.stringify(error);
    } else if (typeof error === "string") {
      errorMessage = error;
    }
    return res.status(500).json({ error: errorMessage });
  }
}

