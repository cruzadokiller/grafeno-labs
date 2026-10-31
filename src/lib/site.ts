export const SITE_URL = "https://grafenolabs.cl";
export const CONTACT_EMAIL = "hola@grafenolabs.cl";

const WHATSAPP_NUMBER = "56981428348";

export function whatsappUrl(text: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}
