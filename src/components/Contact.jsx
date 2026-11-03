import { lazy, Suspense, useState } from 'react';
import { useInView } from '../hooks/useInView';
import { isOpen } from '../lib/hours';
import { directionsLink, SITE, whatsappLink } from '../data/site';
import Icon from './Icon';
import Reveal from './Reveal';

// Leaflet is only downloaded when the map scrolls into view.
const Map = lazy(() => import('./Map'));

const DAY_NAMES = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

function CopyButton({ value, label }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button type="button" className="copy-btn" onClick={copy} aria-label={copied ? `${label} copiado` : `Copiar ${label}`}>
      <Icon name={copied ? 'check' : 'copy'} size={18} />
      <span aria-live="polite">{copied ? 'Copiado' : 'Copiar'}</span>
    </button>
  );
}

export default function Contact() {
  const [mapRef, mapVisible] = useInView({ rootMargin: '300px' });
  const open = isOpen(SITE.hours);

  return (
    <section id="contacto" className="section" aria-labelledby="contacto-title">
      <div className="container">
        <Reveal as="h2" id="contacto-title" className="section-title">Contacto</Reveal>
        <div className="contact-grid">
          <Reveal className="contact-map panel">
            <div ref={mapRef} className="map-slot">
              {mapVisible && (
                <Suspense fallback={<div className="map map-loading">Cargando mapa…</div>}>
                  <Map />
                </Suspense>
              )}
            </div>
            <div className="cta-row">
              <a className="btn btn-primary btn-small" href={directionsLink()} target="_blank" rel="noopener" data-testid="directions">
                <Icon name="navigation" size={18} /> Cómo llegar
              </a>
              <a className="btn btn-ghost btn-small" href={SITE.mapsUrl} target="_blank" rel="noopener">
                <Icon name="external-link" size={18} /> Ver en Google Maps
              </a>
            </div>
          </Reveal>

          <Reveal className="contact-info panel" delay={100}>
            {open !== null && (
              <p className={`open-badge ${open ? 'is-open' : ''}`} data-testid="open-badge">
                {open ? 'Abierto ahora' : 'Cerrado ahora'}
              </p>
            )}
            <ul className="contact-list">
              <li>
                <Icon name="map-pin" />
                <span>
                  {SITE.address}
                  <br />
                  <small>{SITE.city}</small>
                </span>
                <CopyButton value={`${SITE.address}, ${SITE.city}`} label="dirección" />
              </li>
              <li>
                <Icon name="brand-whatsapp" />
                <a href={whatsappLink('Hola Gloria, quiero agendar una cita.')} target="_blank" rel="noopener">{SITE.phoneDisplay}</a>
              </li>
              <li>
                <Icon name="phone" />
                <a href={`tel:+${SITE.whatsapp}`}>Llamar</a>
              </li>
              <li>
                <Icon name="brand-instagram" />
                <a href={`https://www.instagram.com/${SITE.instagram}/`} target="_blank" rel="noopener">@{SITE.instagram}</a>
              </li>
              <li>
                <Icon name="mail" />
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
                <CopyButton value={SITE.email} label="correo" />
              </li>
            </ul>
            {SITE.hours && (
              <dl className="hours">
                {SITE.hours.map((r) => (
                  <div key={r.days.join()}>
                    <dt>{r.days.map((d) => DAY_NAMES[d]).join(', ')}</dt>
                    <dd>{r.open} – {r.close}</dd>
                  </div>
                ))}
              </dl>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
