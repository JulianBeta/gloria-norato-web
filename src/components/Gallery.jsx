import { useCallback, useEffect, useRef, useState } from 'react';
import Icon from './Icon';

const AUTOPLAY_MS = 4500;
const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Swipeable photo strip (CSS scroll-snap) with arrows, dots and gentle autoplay that pauses on
 * hover, focus, touch and when the user prefers reduced motion. Tapping a photo opens a lightbox.
 */
export default function Gallery({ items }) {
  const track = useRef(null);
  const dialog = useRef(null);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [zoomed, setZoomed] = useState(null);

  const goTo = useCallback(
    (i) => {
      const el = track.current;
      if (!el) return;
      const next = (i + items.length) % items.length;
      const slide = el.children[next];
      const left = slide.offsetLeft - el.offsetLeft - (el.clientWidth - slide.clientWidth) / 2;
      el.scrollTo({ left, behavior: reducedMotion() ? 'auto' : 'smooth' });
    },
    [items.length],
  );

  // The current slide is the one closest to the track's center (several are visible on wide
  // screens). At the two ends the first/last slide can't be centered, so those win outright.
  useEffect(() => {
    const el = track.current;
    let frame = 0;
    const update = () => {
      const max = el.scrollWidth - el.clientWidth;
      if (el.scrollLeft <= 2) return setIndex(0);
      if (el.scrollLeft >= max - 2) return setIndex(items.length - 1);
      const center = el.scrollLeft + el.clientWidth / 2 + el.offsetLeft;
      let best = 0;
      [...el.children].forEach((c, i) => {
        const d = Math.abs(c.offsetLeft + c.clientWidth / 2 - center);
        const bestD = Math.abs(el.children[best].offsetLeft + el.children[best].clientWidth / 2 - center);
        if (d < bestD) best = i;
      });
      setIndex(best);
    };
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      el.removeEventListener('scroll', onScroll);
    };
  }, [items.length]);

  useEffect(() => {
    if (paused || zoomed !== null || reducedMotion()) return;
    const t = setTimeout(() => goTo(index + 1), AUTOPLAY_MS);
    return () => clearTimeout(t);
  }, [index, paused, zoomed, goTo]);

  const open = (i) => {
    setZoomed(i);
    dialog.current?.showModal();
  };
  const close = () => {
    dialog.current?.close();
  };
  const step = (d) => setZoomed((z) => (z + d + items.length) % items.length);

  return (
    <div
      className="gallery"
      role="region"
      aria-roledescription="carrusel"
      aria-label="Fotos de nuestro trabajo"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
    >
      <ul className="gallery-track" ref={track}>
        {items.map((it, i) => (
          <li key={it.src} data-index={i} className="gallery-slide" aria-label={`${i + 1} de ${items.length}`}>
            <button type="button" className="gallery-open" onClick={() => open(i)} aria-label={`Ampliar foto: ${it.alt}`}>
              <img src={`/img/gallery/${it.src}-sm.webp`} alt={it.alt} loading="lazy" width="520" height="650" />
            </button>
          </li>
        ))}
      </ul>
      <button type="button" className="gallery-arrow prev" onClick={() => goTo(index - 1)} aria-label="Foto anterior">
        <Icon name="chevron-left" size={26} />
      </button>
      <button type="button" className="gallery-arrow next" onClick={() => goTo(index + 1)} aria-label="Foto siguiente">
        <Icon name="chevron-right" size={26} />
      </button>
      <div className="gallery-dots">
        {items.map((it, i) => (
          <button
            key={it.src}
            type="button"
            className={i === index ? 'is-active' : undefined}
            aria-label={`Ir a la foto ${i + 1}`}
            aria-current={i === index ? 'true' : undefined}
            onClick={() => goTo(i)}
          />
        ))}
      </div>

      <dialog
        ref={dialog}
        className="lightbox"
        aria-label="Foto ampliada"
        onClose={() => setZoomed(null)}
        onClick={(e) => e.target === dialog.current && close()}
        onKeyDown={(e) => {
          if (e.key === 'ArrowRight') step(1);
          if (e.key === 'ArrowLeft') step(-1);
        }}
      >
        {zoomed !== null && (
          <figure>
            <img src={`/img/gallery/${items[zoomed].src}.webp`} alt={items[zoomed].alt} />
            <figcaption>{items[zoomed].alt}</figcaption>
          </figure>
        )}
        <button type="button" className="lightbox-close" onClick={close} aria-label="Cerrar">
          <Icon name="x" size={26} />
        </button>
        <button type="button" className="gallery-arrow prev" onClick={() => step(-1)} aria-label="Foto anterior">
          <Icon name="chevron-left" size={26} />
        </button>
        <button type="button" className="gallery-arrow next" onClick={() => step(1)} aria-label="Foto siguiente">
          <Icon name="chevron-right" size={26} />
        </button>
      </dialog>
    </div>
  );
}
