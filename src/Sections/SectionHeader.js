import "./../styles/SectionHeader.css"
import logo from './../assets/image/Logo_SalonDeBelleza.png'

function SectionHeader() {

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth'});
        }
    }

    return (
        <header>
            <div>
                <nav className="navbar">
                        <a className="navbar-item" href="#section1" onClick={() => scrollToSection('section1')}>CONOCEME</a>
                        <a className="navbar-item" href="#section2" onClick={() => scrollToSection('section2')}>SERVICIOS</a>
                        <img src={logo} className="navbar-logo" alt="Gloria Norato logo"></img>
                        <a className="navbar-item" href="#section3" onClick={() => scrollToSection('section3')}>PRODUCTOS</a>
                        <a className="navbar-item" href="#section4" onClick={() => scrollToSection('section4')}>CONTACTO</a>
                </nav>
            </div> 
        </header>  
    );
}

export { SectionHeader }