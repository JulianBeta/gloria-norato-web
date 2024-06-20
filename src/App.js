import './App.css';
// import { SectionHeader } from "./Sections/SectionHeader";
import { SectionIntro } from "./Sections/SectionIntro";
import { SectionServices } from "./Sections/SectionServices";
import { SectionProducts } from "./Sections/SectionProducts";
import { SectionContact } from './Sections/SectionContact';
import SectionFooter from './Sections/SectionFooter';
import logo from './assets/image/LogoGN.png'
import './styles/SectionHeader.css'
import logofondo from './assets/image/fondofinalfinal.jpg'



function App() {
  const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
      section.scrollIntoView({ behavior: 'smooth'});
  }
}
  
  return (
    <div style={{background: `url(${logofondo})`, backgroundRepeat: 'repeat', backgroundAttachment: 'local', backgroundSize: '100%'   } }>
      
            <div>
                <nav className="navbar">
                        <a href="#section1" className="navbar-item"  onClick={() => scrollToSection('section1')}>CONOCEME</a>
                        <a href="#section2" className="navbar-item"  onClick={() => scrollToSection('section2')}>SERVICIOS</a>
                        <img src={logo} className="navbar-logo" alt="Gloria Norato logo"></img>
                        <a href="#section3" className="navbar-item"  onClick={() => scrollToSection('section3')}>PRODUCTOS</a>
                        <a href="#section4" className="navbar-item"  onClick={() => scrollToSection('section4')}>CONTACTO</a>
                </nav>
            </div> 
      
      <div id="section1"><SectionIntro /></div>
      <div id="section2"><SectionServices /></div>
      <div id="section3"><SectionProducts /></div>
      <div id="section4"><SectionContact /></div>
            
      
      <SectionFooter />
    </div>
  );
}

export default App;
