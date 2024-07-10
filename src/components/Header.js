import React, { useState } from 'react';
import "./../styles/Header.css"
import logo from './../assets/image/LogoGN.png'


const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="header">
            
            <nav className={`menu ${isOpen ? 'open' : ''}`}>
            {isOpen && (
                    <>
                        <span className="close-btn" onClick={toggleMenu}><b>X</b></span>
                        <div className="logo">
                            <a href="/"><img src={logo} alt="Logo" /></a>
                        </div>
                    </>
                )}
                
                <a className="navbar-item" href="#section1" >CONOCEME</a>
                <a className="navbar-item" href="#section2" >SERVICIOS</a>
                <div className="logo">
                            <a href="/"><img src={logo} alt="Logo" /></a>
                        </div>
                 <a className="navbar-item" href="#section3" >PRODUCTOS</a>       
                 <a className="navbar-item" href="#section4" >CONTACTO</a>       

            </nav>
            <div className="hamburger" onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
        </header>
    );
};

export default Header;