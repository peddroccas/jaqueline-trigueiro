import { contact, whatsappMessages, type WhatsappMessageKey } from "@/content/site";

export function whatsappUrl(message: WhatsappMessageKey = "default") {
  const digits = contact.whatsapp.replace(/\D/g, "");
  return `https://wa.me/${digits}?text=${encodeURIComponent(whatsappMessages[message])}`;
}
