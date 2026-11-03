import { useEffect, useState } from 'react';
import { SITE } from '../data/site';
import { useInView } from '../hooks/useInView';
import Icon from './Icon';
import Reveal from './Reveal';

const SHOW = 8;
const profileUrl = `https://www.instagram.com/${SITE.instagram}/`;
const formatDate = (iso) => new Intl.DateTimeFormat('es-CO', { day: 'numeric', month: 'short' }).format(new Date(iso));

/**
 * Latest Instagram posts, served by the /api/instagram Netlify Function (token stays server-side).
 * Loads only when the section is near the viewport. Without posts (no token yet, API down,
 * local preview) it shows a follow card instead of an empty grid.
 */
export default function InstagramFeed() {
  const [ref, near] = useInView({ rootMargin: '400px' });
  const [state, setState] = useState({ status: 'idle', posts: [] });

  useEffect(() => {
    if (!near || state.status !== 'idle') return;
    setState({ status: 'loading', posts: [] });
    fetch('/api/instagram')
      .then((r) => (r.ok ? r.json() : { posts: [] }))
      .then(({ posts = [] }) => setState({ status: posts.length ? 'ready' : 'empty', posts: posts.slice(0, SHOW) }))
      .catch(() => setState({ status: 'empty', posts: [] }));
  }, [near, state.status]);

  return (
    <section id="instagram" className="section" aria-labelledby="instagram-title" ref={ref}>
      <div className="container">
        <Reveal as="h2" id="instagram-title" className="section-title">Síguenos en Instagram</Reveal>
        <Reveal as="p" className="section-intro">
          Mis trabajos más recientes, directo desde{' '}
          <a href={profileUrl} target="_blank" rel="noopener">@{SITE.instagram}</a>.
        </Reveal>

        {state.status === 'ready' ? (
          <ul className="ig-grid" aria-label="Últimas publicaciones de Instagram">
            {state.posts.map((p, i) => (
              <li key={p.id} className="ig-tile" style={{ '--i': i }}>
                <a href={p.url} target="_blank" rel="noopener" aria-label={`Ver publicación del ${formatDate(p.date)} en Instagram${p.caption ? `: ${p.caption}` : ''}`}>
                  <img src={p.image} alt="" loading="lazy" referrerPolicy="no-referrer" />
                  {p.type !== 'IMAGE' && (
                    <span className="ig-type" aria-hidden="true">
                      <Icon name={p.type === 'VIDEO' ? 'player-play-filled' : 'stack-2'} size={18} />
                    </span>
                  )}
                  <span className="ig-overlay" aria-hidden="true">
                    <Icon name="brand-instagram" size={26} />
                    <span className="ig-date">{formatDate(p.date)}</span>
                    {p.caption && <span className="ig-caption">{p.caption}</span>}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        ) : state.status === 'empty' ? (
          <Reveal className="ig-follow panel" data-testid="ig-follow">
            <span className="ig-avatar"><img src="/img/logo-gn.webp" alt="" width="72" height="72" /></span>
            <p className="ig-handle">@{SITE.instagram}</p>
            <p>Mira mis últimos trabajos de color, cortes y tratamientos en Instagram.</p>
          </Reveal>
        ) : (
          <ul className="ig-grid" aria-hidden="true">
            {Array.from({ length: SHOW }, (_, i) => <li key={i} className="ig-tile ig-skeleton" />)}
          </ul>
        )}

        <div className="cta-row cta-center">
          <a className="btn btn-primary" href={profileUrl} target="_blank" rel="noopener" data-testid="ig-profile">
            <Icon name="brand-instagram" /> Seguir en Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
