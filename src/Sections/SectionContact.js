import React from 'react'
import SimpleMap from '../components/Maps.js';
import LogoML from './../assets/image/Imagenmail.jpg'
import LogoWA from './../assets/image/ImagenWA.jpg'
import LogoIG from './../assets/image/ImagenInstagram.jpg'

import LogoMP from './../assets/image/imagenubicacion.jpg'
import './../styles/SectionContact.css'


function SectionContact() {
    return (

        <div className='contenedorconctact'>

            <div className='titlecontact'>
                <h1 c>CONTACTO</h1>
            </div>

            {/* <div className='teesperamos'>
                <h2>Te esperamos</h2>
            </div> */}

            <div className='contenedormapa'>
            <a className='mapa' target='_blank' href='https://maps.app.goo.gl/A4QojNyJgwrAt5Fp8'><SimpleMap /></a>
             </div>
            
            <div className='logosydireccion'>
                <li className='listalogos'>
                    <ul><img src={LogoMP} /> Carrera 53 No. 141 - 69 Local 102</ul>
                    <ul><img src={LogoWA} /> +57 310 334 96 16</ul>
                    <ul><img src={LogoIG} /> @glorialorato</ul>
                     <ul><img src={LogoML} />glorialorato@gmail.com</ul>
                </li>
            </div>
           

    

            {/* <div className='imagenlogocontacto'>
                <img className='franja' src={LogoPequeño} />
            </div>  */}
            
        </div>
        // <div ></div>
        
    );
}

export { SectionContact }