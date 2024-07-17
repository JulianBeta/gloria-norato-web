import './App.css';
import { SectionIntro } from "./Sections/SectionIntro";
import { SectionServices } from "./Sections/SectionServices";
import { SectionProducts } from "./Sections/SectionProducts";
import { SectionContact } from './Sections/SectionContact';
import Header from './components/Header';
import SectionFooter from './Sections/SectionFooter';
import './styles/SectionHeader.css'
import logofondo from './assets/image/fondofinalfinal.jpg'



function App() {

  return (
    <div style={{background: `url(${logofondo})`, backgroundRepeat: 'repeat', backgroundAttachment: 'local', backgroundSize: '100%'   } }>
      <Header/>
      <div id="section1"><SectionIntro /></div>
      <div id="section2"><SectionServices /></div>
      <div id="section3"><SectionProducts /></div>
      <div id="section4"><SectionContact /></div>
      <SectionFooter />
    </div>
  );

}

export default App;
