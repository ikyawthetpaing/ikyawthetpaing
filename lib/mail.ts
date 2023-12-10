"use server";

import nodemailer from "nodemailer";

import { env } from "@/env.mjs";
import { creatorConfig } from "@/config/creator";

import { ContactSchema } from "@/lib/validations/contact";

const transporter = nodemailer.createTransport({
  host: env.SMTP_HOST,
  port: env.SMTP_PORT,
  secure: true,
  auth: {
    user: env.SMTP_EMAIL,
    pass: env.SMTP_PASS,
  },
  tls: {
    ciphers: "SSLv3",
  },
});

export async function sendMail(data: ContactSchema) {
  try {
    const { subject } = data;

    const mailOptions = {
      from: env.SMTP_EMAIL,
      to: creatorConfig.email,
      subject: subject,
      html: generateEmailTemplate(data),
    };

    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
}

function generateEmailTemplate(data: ContactSchema) {
  const { name, email, message } = data;

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      font-family: 'Arial', sans-serif;
      line-height: 1.6;
      color: #333;
      background-color: #f8f8f8;
      margin: 0;
      padding: 0;
    }

    main {
      max-width: 600px;
      margin: 20px auto;
      padding: 20px;
      background-color: #fff;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }

    p {
      margin-bottom: 15px;
    }
  </style>
</head>

<body>
  <main>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Message:</strong> ${message}</p>
  </main>
</body>

</html>
    `;
}
