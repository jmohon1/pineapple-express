"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM_EMAIL = "Pineapple Express <noreply@pineappleexpressma.com>";
const TO_EMAIL = "kaily@pineappleexpressma.com";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface HiringFormData {
  name: string;
  town: string;
  email: string;
  availability: string[];
  drivingExperience: string;
  cannabisExperience: string;
  microsoftOffice: string;
  managementExperience: string;
  attentionToDetail: string;
  typeOfWork: string;
  coverLetter: string;
}

export async function sendContactEmail(formData: ContactFormData) {
  const { name, email, subject, message } = formData;

  if (!name || !email || !subject) {
    return { success: false, error: "Name, email, and subject are required." };
  }

  try {
    await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: `[Contact Form] ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message || "No message provided.")}</p>
      `,
    });
    return { success: true };
  } catch (err) {
    console.error("Resend sendContactEmail error:", err);
    return { success: false, error: "Failed to send message. Please try again later." };
  }
}

export async function sendHiringEmail(formData: HiringFormData) {
  const { name, email, town } = formData;

  if (!name || !email || !town) {
    return { success: false, error: "Name, email, and town are required." };
  }

  try {
    await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: `[Job Application] ${name}`,
      html: `
        <h2>New Job Application</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Town:</strong> ${escapeHtml(town)}</p>
        <p><strong>Availability:</strong> ${formData.availability.length > 0 ? formData.availability.map(escapeHtml).join(", ") : "Not specified"}</p>
        <hr />
        <p><strong>Driving Experience:</strong></p>
        <p>${escapeHtml(formData.drivingExperience || "Not provided")}</p>
        <p><strong>Cannabis Industry Experience:</strong></p>
        <p>${escapeHtml(formData.cannabisExperience || "Not provided")}</p>
        <p><strong>Microsoft Office Experience:</strong></p>
        <p>${escapeHtml(formData.microsoftOffice || "Not provided")}</p>
        <p><strong>Management / Team Leader Experience:</strong></p>
        <p>${escapeHtml(formData.managementExperience || "Not provided")}</p>
        <p><strong>Attention to Detail:</strong></p>
        <p>${escapeHtml(formData.attentionToDetail || "Not provided")}</p>
        <p><strong>Type of Work Enjoyed:</strong></p>
        <p>${escapeHtml(formData.typeOfWork || "Not provided")}</p>
        <hr />
        <p><strong>Cover Letter / Comments:</strong></p>
        <p>${escapeHtml(formData.coverLetter || "Not provided")}</p>
      `,
    });
    return { success: true };
  } catch (err) {
    console.error("Resend sendHiringEmail error:", err);
    return { success: false, error: "Failed to submit application. Please try again later." };
  }
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
