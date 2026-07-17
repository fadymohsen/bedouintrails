import "server-only";
import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;
const FROM = process.env.MAIL_FROM ?? "Bedouin Trails <no-reply@bedouintrails.com>";
const CONTACT_INBOX = process.env.CONTACT_INBOX_EMAIL ?? "info@bedouintrails.com";

export async function sendOtpEmail(to: string, otp: number): Promise<void> {
  const subject = "Your verification code";
  const html = `
    <div style="font-family: sans-serif; max-width: 480px; margin: 0 auto;">
      <h2>Bedouin Trails</h2>
      <p>Your verification code is:</p>
      <p style="font-size: 32px; font-weight: 700; letter-spacing: 4px;">${otp}</p>
      <p>This code expires shortly. If you didn't request this, you can ignore this email.</p>
    </div>
  `;

  if (!resend) {
    console.log(`[mail:dev] OTP for ${to}: ${otp}`);
    return;
  }

  await resend.emails.send({ from: FROM, to, subject, html });
}

export async function sendContactEmail(input: { name: string; email: string; phone?: string; message: string }): Promise<void> {
  const subject = `New contact form message from ${input.name}`;
  const html = `
    <div style="font-family: sans-serif; max-width: 480px; margin: 0 auto;">
      <h2>New contact form submission</h2>
      <p><strong>Name:</strong> ${input.name}</p>
      <p><strong>Email:</strong> ${input.email}</p>
      ${input.phone ? `<p><strong>Phone:</strong> ${input.phone}</p>` : ""}
      <p><strong>Message:</strong></p>
      <p style="white-space: pre-wrap;">${input.message}</p>
    </div>
  `;

  if (!resend) {
    console.log(`[mail:dev] Contact form from ${input.name} <${input.email}>: ${input.message}`);
    return;
  }

  await resend.emails.send({ from: FROM, to: CONTACT_INBOX, replyTo: input.email, subject, html });
}
