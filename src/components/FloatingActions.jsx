import { whatsappLink } from '../data/site';
import { useScrollY } from '../hooks/useScroll';
import Icon from './Icon';

/** WhatsApp button (always) and back-to-top (after scrolling), stacked in the bottom-right corner. */
export default function FloatingActions() {
  const showTop = useScrollY() > 700;
  return (
    <div className="fab-stack">
      <button
        type="button"
        className={`fab fab-top ${showTop ? 'is-visible' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Volver arriba"
        tabIndex={showTop ? 0 : -1}
      >
        <Icon name="arrow-up" size={22} />
      </button>
      <a className="fab fab-whatsapp" href={whatsappLink('Hola Gloria, quiero agendar una cita.')} target="_blank" rel="noopener" aria-label="Escribir por WhatsApp" data-testid="fab-whatsapp">
        <Icon name="brand-whatsapp" size={30} />
      </a>
    </div>
  );
}
