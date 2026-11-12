import nodemailer from "nodemailer";

let cachedTransporter = null;

function getRequiredEnv(name) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required env var: ${name}`);
  }
  return value;
}

function getTransporter() {
  if (cachedTransporter) {
    return cachedTransporter;
  }

  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    throw new Error("SMTP_USER and SMTP_PASS are required");
  }

  const isGmail = process.env.SMTP_USER?.toLowerCase().includes("@gmail.com");
  const host = process.env.SMTP_HOST || (isGmail ? "smtp.gmail.com" : "smtp.hostinger.com");
  const port = Number(process.env.SMTP_PORT || (isGmail ? "587" : "465"));
  const secure = process.env.SMTP_SECURE
    ? process.env.SMTP_SECURE === "true"
    : port === 465;

  cachedTransporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  return cachedTransporter;
}

export async function sendEmail({ to, subject, html, text, replyTo }) {
  const transporter = getTransporter();

  const from = process.env.FROM_EMAIL || process.env.SMTP_USER;
  if (!from) {
    throw new Error("FROM_EMAIL or SMTP_USER is required");
  }

  try {
    const info = await transporter.sendMail({
      from,
      to,
      subject,
      html,
      text,
      replyTo,
    });

    if (info.rejected.length > 0) {
      throw new Error(
        `SMTP rejected recipient(s): ${info.rejected.join(", ")}`,
      );
    }
  } catch (error) {
    console.error("sendEmail failed", {
      subject,
      to,
      error: error instanceof Error ? error.message : String(error),
    });
    throw error;
  }
}
