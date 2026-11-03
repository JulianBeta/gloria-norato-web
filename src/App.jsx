import Contact from './components/Contact';
import FloatingActions from './components/FloatingActions';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import Services from './components/Services';

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Saltar al contenido</a>
      <Header />
      <main id="main">
        <Hero />
        <Services />
        <Products />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
