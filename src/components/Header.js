import React, { useState, useEffect } from 'react';
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

    useEffect(() => {
        const handleHashChange = () => {
            const offset = document.querySelector('.header').offsetHeight;
            window.scrollBy(0, -offset);
        };

        window.addEventListener('hashchange', handleHashChange);

        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);

    return (
        <header className="header">
            {/* Logo always displayed */}
            <div className="logo-container">
                <img className="logo" src={logo} alt="Logo" />
            </div>
            <nav className={`menu ${isOpen ? 'open' : ''}`}>
                <a className="navbar-item" href="#section1" onClick={closeMenu}>CONOCEME</a>
                <a className="navbar-item" href="#section2" onClick={closeMenu}>SERVICIOS</a>
                {/* Logo hidden on big screens */}
                <div className="logo-container-desktop">
                    <img className="logo-desktop" src={logo} alt="Logo" />
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
