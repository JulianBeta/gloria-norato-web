// Product catalog. Prices in Colombian pesos, transcribed from the original site (2024): confirm before publishing changes.
export const BRANDS = ["L'Oréal", 'Moroccanoil', 'Kérastase'];

export const PRODUCTS = [
  { slug: 'loreal-metal-detox', brand: "L'Oréal", name: 'Metal Detox mascarilla', price: 140000 },
  { slug: 'loreal-absolut-repair-molecular', brand: "L'Oréal", name: 'Absolut Repair Molecular', price: 470000 },
  { slug: 'loreal-aceite-reparador', brand: "L'Oréal", name: 'Aceite reparador', price: 153000 },
  { slug: 'moroccanoil-aceite-corporal-seco', brand: 'Moroccanoil', name: 'Aceite corporal seco', price: 195000 },
  { slug: 'moroccanoil-acondicionador-violetas-rubios', brand: 'Moroccanoil', name: 'Acondicionador violeta para rubios', price: 115000 },
  { slug: 'moroccanoil-shampoo-violetas-rubios', brand: 'Moroccanoil', name: 'Shampoo violeta para rubios', price: 115000 },
  { slug: 'kerastase-aceite-elixir', brand: 'Kérastase', name: 'Aceite Elixir', price: 200000 },
  { slug: 'moroccanoil-acondicionador-hidratante', brand: 'Moroccanoil', name: 'Acondicionador hidratante', price: 105000 },
  { slug: 'kerastase-shampoo-nutritive', brand: 'Kérastase', name: 'Shampoo Nutritive', price: 125000 },
  { slug: 'kerastase-shampoo-seco', brand: 'Kérastase', name: 'Shampoo seco', price: 130000 },
  { slug: 'moroccanoil-tratamiento', brand: 'Moroccanoil', name: 'Tratamiento Moroccanoil', price: 75000 },
  { slug: 'moroccanoil-locion-suavizante', brand: 'Moroccanoil', name: 'Loción suavizante', price: 187000 },
  { slug: 'moroccanoil-crema-manos', brand: 'Moroccanoil', name: 'Crema para manos', price: 105000 },
  { slug: 'moroccanoil-acondicionador-50ml', brand: 'Moroccanoil', name: 'Acondicionador 50 ml', price: 56000 },
];

export const formatCOP = (value) =>
  new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(value);
