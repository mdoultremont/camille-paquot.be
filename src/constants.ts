// Practice details shown on several pages; keep a single source until content moves to a CMS.
export const siteUrl = "https://camille-paquot.be";
export const phone = { display: "+32 470 38 61 55", href: "tel:+32470386155" };
export const email = "camillepaquot.psy@gmail.com";
// Receives reports about the website itself (typos, broken pages).
export const websiteEmail = "hello@camille-paquot.be";
export const booking = "https://rosa.be/fr/hp/camille-paquot-1/";
export const visa = "343006";
export const commission = "962237745";
export const payment = "Paiement en espèces ou par QR code (paiement mobile).";
export const reimbursement =
  "Votre mutuelle peut rembourser une partie des consultations. Les conditions varient d’une mutuelle à l’autre : renseignez-vous directement auprès de la vôtre.";
export const financialHardship =
  "En cas de difficultés financières, les tarifs peuvent être discutés. N’hésitez pas à m’en parler.";
export const cancellationPolicy =
  "Les rendez-vous qui ne sont pas annulés 48 h à l’avance seront facturés.";
export const status = "Psychologue clinicienne agréée, non conventionnée.";
export const languages = "Consultations en français et en anglais.";
export const introduction =
  "J’accompagne toute personne souhaitant entreprendre un travail sur soi dans un cadre bienveillant, respectueux et non-jugeant.";
export const locations = [
  {
    name: "Centre Peps Périnat",
    street: "Avenue de Tervuren 412",
    postalCode: "1150",
    city: "Woluwe-Saint-Pierre",
    region: "Bruxelles",
    url: "https://www.centrepepsperinat.be/",
    schedule: "Mardi toute la journée, jeudi matin",
  },
  {
    name: "Centre périnatal du Brabant wallon",
    street: "Rue Dernier Patard 1",
    postalCode: "1470",
    city: "Genappe",
    region: "Brabant wallon",
    url: "https://centreperinataldubw.com/",
    schedule: "Lundi après-midi",
  },
];
export const consultationArea = locations
  .map((location) => `à ${location.city} (${location.region})`)
  .join(" et ");
