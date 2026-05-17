import type { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";

type ContactBody = {
  name?: string;
  phone?: string;
  email?: string;
  service?: string;
  message?: string;
  source?: string;
  website?: string;
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default async function handler(
  request: VercelRequest,
  response: VercelResponse,
) {
  if (request.method !== "POST") {
    return response.status(405).json({ error: "Method not allowed" });
  }

  const body = (request.body ?? {}) as ContactBody;

  if (body.website?.trim()) {
    return response.status(200).json({ ok: true });
  }

  const name = body.name?.trim() ?? "";
  const phone = body.phone?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const service = body.service?.trim() ?? "";
  const message = body.message?.trim() ?? "";
  const source = body.source?.trim() || "prevezem.cz";

  if (!name || !phone || !email || !service || !message) {
    return response
      .status(400)
      .json({ error: "Vyplňte všechna povinná pole." });
  }

  if (!isValidEmail(email)) {
    return response.status(400).json({ error: "Zadejte platný e-mail." });
  }

  const smtpHost = process.env.SMTP_HOST || "smtp.seznam.cz";
  const smtpPort = Number(process.env.SMTP_PORT || 465);
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const to = process.env.CONTACT_TO_EMAIL || smtpUser || "info@prevezem.cz";
  const from =
    process.env.CONTACT_FROM_EMAIL ||
    `Převezem.cz <${smtpUser || "info@prevezem.cz"}>`;

  if (!smtpUser || !smtpPass) {
    console.error("SMTP_USER or SMTP_PASS is not configured");
    return response
      .status(500)
      .json({ error: "E-mailová služba není nakonfigurována." });
  }

  const subject = `Nová poptávka – ${service}`;
  const html = `
    <h2>Nová poptávka z ${escapeHtml(source)}</h2>
    <p><strong>Jméno:</strong> ${escapeHtml(name)}</p>
    <p><strong>Telefon:</strong> ${escapeHtml(phone)}</p>
    <p><strong>E-mail:</strong> ${escapeHtml(email)}</p>
    <p><strong>Služba:</strong> ${escapeHtml(service)}</p>
    <p><strong>Zpráva:</strong></p>
    <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
  `;
  const text = [
    `Nová poptávka z ${source}`,
    "",
    `Jméno: ${name}`,
    `Telefon: ${phone}`,
    `E-mail: ${email}`,
    `Služba: ${service}`,
    "",
    "Zpráva:",
    message,
  ].join("\n");

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  try {
    await transporter.sendMail({
      from,
      to,
      replyTo: email,
      subject,
      html,
      text,
    });

    return response.status(200).json({ ok: true });
  } catch (error) {
    console.error("SMTP error:", error);
    return response.status(500).json({
      error: "Odeslání se nezdařilo. Zkuste to prosím znovu.",
    });
  }
}
