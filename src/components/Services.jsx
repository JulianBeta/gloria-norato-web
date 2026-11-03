import { GALLERY, SERVICES } from '../data/services';
import { whatsappLink } from '../data/site';
import Gallery from './Gallery';
import Icon from './Icon';
import Reveal from './Reveal';

export default function Services() {
  return (
    <section id="servicios" className="section" aria-labelledby="servicios-title">
      <div className="container">
        <Reveal as="h2" id="servicios-title" className="section-title">Nuestros servicios</Reveal>
        <ul className="service-grid">
          {SERVICES.map((s, i) => (
            <Reveal as="li" key={s.title} className="service-card" delay={i * 70}>
              <span className="service-icon"><Icon name={s.icon} size={26} /></span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <a
                className="service-ask"
                href={whatsappLink(`Hola Gloria, quiero información sobre ${s.ask}.`)}
                target="_blank"
                rel="noopener"
                aria-label={`Consultar por WhatsApp: ${s.title}`}
              >
                <Icon name="brand-whatsapp" size={18} /> Consultar
              </a>
            </Reveal>
          ))}
        </ul>

        <Reveal as="h3" className="subsection-title">Nuestro trabajo</Reveal>
        <Gallery items={GALLERY} />
      </div>
    </section>
  );
}
