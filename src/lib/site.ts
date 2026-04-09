/** Adresse de la boutique HOREVA (Limoges) — affichage court */
export const BOUTIQUE_ADDRESS_SHORT = "36 bd Victor Hugo, 87000 Limoges";
export const BOUTIQUE_ADDRESS_LINES = [
  "36 bd Victor Hugo",
  "87000 Limoges",
] as const;

/** Siège / correspondance (libellé complet) */
export const SIEGE_SOCIAL = "36 boulevard Victor Hugo, 87000 Limoges";
export const SIEGE_SOCIAL_FR = `${SIEGE_SOCIAL}, France`;

/** Lien Google Maps (itinéraire / fiche lieu) */
export const BOUTIQUE_GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent("36 Boulevard Victor Hugo, 87000 Limoges, France");
