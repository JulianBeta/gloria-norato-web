import { useEffect } from 'react';
import Contact from './components/Contact';
import FloatingActions from './components/FloatingActions';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import InstagramFeed from './components/InstagramFeed';
import Products from './components/Products';
import Services from './components/Services';

export default function App() {
  // Links like /#contacto arrive before React has rendered the section, so the browser can't
  // jump to it on load. Scroll there once the page exists.
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (id) document.getElementById(id)?.scrollIntoView();
  }, []);

  return (
    <>
      <a className="skip-link" href="#main">Saltar al contenido</a>
      <Header />
      <main id="main">
        <Hero />
        <Services />
        <Products />
        <InstagramFeed />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
