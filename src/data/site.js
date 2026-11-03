// Business details in one place. Everything on the page (links, map, structured data) reads from here.
export const SITE = {
  name: 'Gloria Norato',
  studio: 'Gloria Norato Hair Design Studio',
  tagline: 'Hair Design Studio · Bogotá',
  phoneDisplay: '+57 310 334 96 16',
  whatsapp: '573103349616',
  // TODO(Julian): confirm the handle and email; both read "glorialorato" (L) on the original site.
  instagram: 'glorialorato',
  email: 'glorialorato@gmail.com',
  address: 'Carrera 53 No. 141-69, Local 102',
  city: 'Bogotá, Colombia',
  mapsUrl: 'https://maps.app.goo.gl/A4QojNyJgwrAt5Fp8',
  coords: [4.726776034581482, -74.05545738674704],
  /**
   * Opening hours, Bogotá time. Leave null until confirmed: the "Abierto ahora" badge and the
   * hours list only appear when this is set. Days: 0 = Sunday … 6 = Saturday.
   * Example: [{ days: [1, 2, 3, 4, 5], open: '09:00', close: '18:00' }, { days: [6], open: '09:00', close: '14:00' }]
   */
  hours: null,
};

export const whatsappLink = (message) =>
  `https://wa.me/${SITE.whatsapp}${message ? `?text=${encodeURIComponent(message)}` : ''}`;

export const directionsLink = () =>
  `https://www.google.com/maps/dir/?api=1&destination=${SITE.coords.join(',')}`;
