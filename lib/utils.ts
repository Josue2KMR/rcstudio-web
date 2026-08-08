type WhatsappContact = {
  phone: string;
  message: string;
};

export function getWhatsappLink(contact: WhatsappContact) {
  return `https://wa.me/${contact.phone}?text=${encodeURIComponent(contact.message)}`;
}
