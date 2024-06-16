import "./../styles/SectionHeader.css"
import logo from './../assets/image/LogoGN.png'
import React, { useState } from 'react';

function SectionHeader() {

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth'});
        }
    }

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header>
            <div className="navbar">
                <div className="navbar-logo">
                <img className="navbar-logo" src={logo}  alt="Gloria Norato logo" />
                </div>
                <div className="hamburger" onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className={`navbar-menu ${menuOpen ? 'active' : ''}`}>
                        <a className="navbar-item" href="#section1" onClick={() => scrollToSection('section1')}>CONOCEME</a>
                        <a className="navbar-item" href="#section2" onClick={() => scrollToSection('section2')}>SERVICIOS</a>
                        <a className="navbar-item" href="#section3" onClick={() => scrollToSection('section3')}>PRODUCTOS</a>
                        <a className="navbar-item" href="#section4" onClick={() => scrollToSection('section4')}>CONTACTO</a>
                </div>
            </div> 
        </header>  
    );
}

export { SectionHeader }