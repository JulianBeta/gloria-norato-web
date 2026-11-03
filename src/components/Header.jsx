import { useEffect, useState } from 'react';
import { useActiveSection, useScrollY } from '../hooks/useScroll';
import Icon from './Icon';

const LINKS = [
  { id: 'conoceme', label: 'Conóceme' },
  { id: 'servicios', label: 'Servicios' },
  { id: 'productos', label: 'Productos' },
  { id: 'contacto', label: 'Contacto' },
];
const IDS = LINKS.map((l) => l.id);

export default function Header() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrollY() > 40;
  const active = useActiveSection(IDS);

  // Esc closes the mobile menu; the page behind it doesn't scroll while it's open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    document.body.classList.add('no-scroll');
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.classList.remove('no-scroll');
    };
  }, [open]);

  const link = (l) => (
    <li key={l.id}>
      <a href={`#${l.id}`} className={active === l.id ? 'is-active' : undefined} aria-current={active === l.id ? 'true' : undefined} onClick={() => setOpen(false)}>
        {l.label}
      </a>
    </li>
  );

  return (
    <header className={`header ${scrolled ? 'is-scrolled' : ''}`}>
      <nav className="nav" aria-label="Principal">
        <ul className={`nav-links ${open ? 'is-open' : ''}`} id="menu">
          {LINKS.slice(0, 2).map(link)}
          <li className="nav-logo-slot" aria-hidden="true" />
          {LINKS.slice(2).map(link)}
        </ul>
        <a href="#conoceme" className="nav-logo" aria-label="Gloria Norato, inicio">
          <img src="/img/logo-gn.webp" alt="" width="64" height="64" />
        </a>
        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="menu"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setOpen((o) => !o)}
        >
          <Icon name={open ? 'x' : 'menu-2'} size={28} />
        </button>
      </nav>
    </header>
  );
}
