import { SITE, whatsappLink } from '../data/site';
import Icon from './Icon';

export default function Hero() {
  return (
    <section id="conoceme" className="hero" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-photo">
          <img src="/img/gloria.webp" alt="Gloria Norato en su estudio" width="752" height="900" fetchpriority="high" />
        </div>
        <div className="hero-text panel">
          <p className="eyebrow">{SITE.tagline}</p>
          <h1 id="hero-title">Gloria Norato</h1>
          <ul className="hero-highlights">
            <li><strong>+30 años</strong> de experiencia</li>
            <li>Moroccanoil · Kérastase · L'Oréal</li>
          </ul>
          <p>¡Bienvenidos a Gloria Norato Hair Design Studio!</p>
          <p>
            Con más de 30 años de experiencia en el apasionante mundo de la belleza, me complace presentarte mi propio
            espacio dedicado a realzar tu belleza y resaltar tu estilo único. A lo largo de mi carrera he trabajado en
            reconocidos salones de belleza y he viajado por todo el mundo para mantenerme actualizada con las últimas
            tendencias y técnicas en el arte del cabello.
          </p>
          <p>
            En mi estudio te ofrezco un ambiente acogedor y profesional donde tu satisfacción es mi prioridad. Trabajo con
            productos de la más alta calidad, incluyendo las líneas de Moroccanoil, Kérastase y L'Oréal.
          </p>
          <p>¡Déjame ayudarte a alcanzar el look que siempre has deseado!</p>
          <div className="cta-row">
            <a className="btn btn-primary" href={whatsappLink('Hola Gloria, quiero agendar una cita.')} target="_blank" rel="noopener" data-testid="cta-book">
              <Icon name="calendar-heart" /> Agenda tu cita
            </a>
            <a className="btn btn-ghost" href="#servicios">Ver servicios</a>
          </div>
        </div>
      </div>
    </section>
  );
}
