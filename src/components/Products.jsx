import { useMemo, useState } from 'react';
import { BRANDS, PRODUCTS, formatCOP } from '../data/products';
import { whatsappLink } from '../data/site';
import Icon from './Icon';
import Reveal from './Reveal';

const ALL = 'Todas';

export default function Products() {
  const [brand, setBrand] = useState(ALL);
  const shown = useMemo(() => (brand === ALL ? PRODUCTS : PRODUCTS.filter((p) => p.brand === brand)), [brand]);
  const count = (b) => (b === ALL ? PRODUCTS.length : PRODUCTS.filter((p) => p.brand === b).length);

  return (
    <section id="productos" className="section" aria-labelledby="productos-title">
      <div className="container">
        <Reveal as="h2" id="productos-title" className="section-title">Productos</Reveal>
        <Reveal as="p" className="section-intro">
          Los productos profesionales que uso en el estudio, para que cuides tu cabello en casa.
        </Reveal>

        <div className="filters" role="group" aria-label="Filtrar por marca">
          {[ALL, ...BRANDS].map((b) => (
            <button key={b} type="button" className="chip" aria-pressed={brand === b} onClick={() => setBrand(b)}>
              {b} <span className="chip-count">{count(b)}</span>
            </button>
          ))}
        </div>

        <p className="sr-only" aria-live="polite">{`${shown.length} productos`}</p>
        <ul className="product-grid">
          {shown.map((p) => (
            <li key={p.slug} className="product-card" data-brand={p.brand}>
              <div className="product-media">
                <img src={`/img/products/${p.slug}.webp`} alt={`${p.brand} ${p.name}`} loading="lazy" width="400" height="400" />
              </div>
              <p className="product-brand">{p.brand}</p>
              <h3 className="product-name">{p.name}</h3>
              <p className="product-price">{formatCOP(p.price)}</p>
              <a
                className="btn btn-small btn-primary"
                href={whatsappLink(`Hola Gloria, me interesa el producto ${p.brand} ${p.name} (${formatCOP(p.price)}). ¿Está disponible?`)}
                target="_blank"
                rel="noopener"
                aria-label={`Lo quiero: ${p.brand} ${p.name}`}
              >
                <Icon name="shopping-bag" size={18} /> Lo quiero
              </a>
            </li>
          ))}
        </ul>
        <p className="fine-print">Precios en pesos colombianos, sujetos a cambio. Confirma disponibilidad por WhatsApp.</p>
      </div>
    </section>
  );
}
