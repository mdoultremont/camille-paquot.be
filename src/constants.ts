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
// The hours of the offices she rents. Her free slots are on Rosa.
type OpeningHours = { day: Day; opens: string; closes: string };
type Day = keyof typeof dayNames;
const dayNames = { Monday: "lundi", Tuesday: "mardi", Thursday: "jeudi" } as const;

type Location = {
  name: string;
  street: string;
  postalCode: string;
  city: string;
  region: string;
  url: string;
  hours: OpeningHours[];
};

export const locations: Location[] = [
  {
    name: "Centre Pep’s Périnat",
    street: "Avenue de Tervuren 412",
    postalCode: "1150",
    city: "Woluwe-Saint-Pierre",
    region: "Bruxelles",
    url: "https://www.centrepepsperinat.be/",
    hours: [
      { day: "Tuesday", opens: "09:00", closes: "18:00" },
      { day: "Thursday", opens: "09:00", closes: "12:00" },
    ],
  },
  {
    name: "Centre Périnatal du Brabant Wallon",
    street: "Rue Dernier Patard 1",
    postalCode: "1470",
    city: "Genappe",
    region: "Brabant Wallon",
    url: "https://centreperinataldubw.com/",
    hours: [{ day: "Monday", opens: "13:00", closes: "18:00" }],
  },
];

function hour(time: string) {
  return `${Number(time.slice(0, 2))} h${time.slice(3) === "00" ? "" : time.slice(3)}`;
}

// "Mardi de 9 h à 18 h, jeudi de 9 h à 12 h"
export function schedule(hours: readonly OpeningHours[]) {
  const text = hours
    .map(({ day, opens, closes }) => `${dayNames[day]} de ${hour(opens)} à ${hour(closes)}`)
    .join(", ");
  return text[0].toUpperCase() + text.slice(1);
}
export const consultationArea = locations
  .map((location) => `à ${location.city} (${location.region})`)
  .join(" et ");
