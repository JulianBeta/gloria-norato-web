import { SITE, whatsappLink } from '../data/site';
import Icon from './Icon';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <img src="/img/logo-gn.webp" alt="" width="72" height="72" loading="lazy" />
        <p className="footer-name">{SITE.studio}</p>
        <ul className="footer-social">
          <li>
            <a href={whatsappLink()} target="_blank" rel="noopener" aria-label="WhatsApp"><Icon name="brand-whatsapp" size={24} /></a>
          </li>
          <li>
            <a href={`https://www.instagram.com/${SITE.instagram}/`} target="_blank" rel="noopener" aria-label="Instagram"><Icon name="brand-instagram" size={24} /></a>
          </li>
          <li>
            <a href={`mailto:${SITE.email}`} aria-label="Correo electrónico"><Icon name="mail" size={24} /></a>
          </li>
        </ul>
        <p className="footer-copy">© {new Date().getFullYear()} {SITE.name}. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
