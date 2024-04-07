import React from 'react'
import Logo_SalonDeBelleza from './../assets/image/Logo_SalonDeBelleza.png'
import SimpleMap from '../components/Maps.js';
import LogoFB from './../assets/image/logo-fb.png'
import LogoWA from './../assets/image/logo-wasap.jfif'
import LogoIG from './../assets/image/logo-insta.jpg'
import './../styles/SectionContact.css'


function SectionContact() {
    return (
        <div >
            <div className='titlecontact'>
            <h1>CONTACTOS</h1></div>
            <div className='titlecontact'>
            <h3>Te esperamos</h3></div>

            <div className='contenedorsectioncontact'>

                <div className='contenedormapa'> <SimpleMap /></div>

                <div className='logosydireccion'>
                <li><ul>Cra. 53 #141-69 local 102, Bogotá</ul>
                    <ul><img src={LogoWA} /></ul>
                    <ul><img src={LogoFB} /></ul>
                    <ul><img src={LogoIG} /></ul>
                    <ul>Correo</ul>
                </li></div>
            </div>

            
            <div className='imagenlogocontacto'><img src={Logo_SalonDeBelleza} /></div>

        </div>
    );
}

export { SectionContact }