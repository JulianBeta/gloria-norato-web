import './App.css';
import { SectionHeader } from "./Sections/SectionHeader";
import { SectionIntro } from "./Sections/SectionIntro";
import { SectionServices } from "./Sections/SectionServices";
import { SectionProducts } from "./Sections/SectionProducts";
import { SectionContact } from './Sections/SectionContact';
import SectionFooter from './Sections/SectionFooter';
import { ServicesCarousel } from "./components/ServicesCarousel";

function App() {
  return (
    <div>
      <SectionHeader />
      <SectionIntro />
      <SectionServices />
      <ServicesCarousel />
      <SectionProducts />
      <SectionContact />
      <SectionFooter />
    </div>
  );
}

export default App;
