export const clinic = {
  name: "Oral 360",
  whatsapp: "5521998133001",
  phone: "(21) 99813-3001",
  message:
    "Olá! Conheci a Oral 360 pelo site e gostaria de saber mais sobre os atendimentos.",
  images: { hero: "/images/acolhimento.jpg", about: "/images/experiencia.jpg" },
};
export const navigation = [
  ["Início", "inicio"],
  ["Sobre nós", "sobre"],
  ["Tratamentos", "tratamentos"],
  ["Diferenciais", "diferenciais"],
  ["Unidades", "unidades"],
  ["Contato", "contato"],
] as const;
export const units: {
  name: string;
  city: string;
  address?: string;
  mapUrl?: string;
}[] = [
  { name: "Tijuca", city: "Rio de Janeiro, RJ" },
  { name: "Copacabana", city: "Rio de Janeiro, RJ" },
  { name: "Nova Iguaçu", city: "Nova Iguaçu, RJ" },
];
export function whatsappUrl(message = clinic.message) {
  return `https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent(message)}`;
}
