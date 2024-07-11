import React, { useState } from 'react';
import "./../styles/SectionHeader.css";
import logo from './../assets/image/LogoGN.png';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <header className="header">
            <nav className={`menu ${isOpen ? 'open' : ''}`}>
                <a className="navbar-item" href="#section1" onClick={closeMenu}>CONOCEME</a>
                <a className="navbar-item" href="#section2" onClick={closeMenu}>SERVICIOS</a>
                <div className="logo-container">
                    <a href="/"><img src={logo} alt="Logo" className="logo" /></a>
                </div>
                <a className="navbar-item" href="#section3" onClick={closeMenu}>PRODUCTOS</a>       
                <a className="navbar-item" href="#section4" onClick={closeMenu}>CONTACTO</a>       
                <span className={`close-btn ${isOpen ? 'visible' : ''}`} onClick={closeMenu}><b>X</b></span>
            </nav>
            <div className={`hamburger ${isOpen ? 'hidden' : ''}`} onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
        </header>
    );
};

export default Header;
