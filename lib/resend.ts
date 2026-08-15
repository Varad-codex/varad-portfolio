import { Resend } from 'resend';

// Lazy getter for Resend to prevent build-time initialization errors when key is not set
export function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY || 're_placeholder_key_for_build';
  return new Resend(apiKey);
}

// [EDIT ME] Change this to the email address that receives contact form submissions
export const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL || 'your-email@example.com';
