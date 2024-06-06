import React from 'react'
import Logo_SalonDeBelleza from './../assets/image/Logo_SalonDeBelleza.png'
import SimpleMap from '../components/Maps.js';
import LogoML from './../assets/image/Imagenmail.jpg'
import LogoWA from './../assets/image/ImagenWA.jpg'
import LogoIG from './../assets/image/ImagenInstagram.jpg'
import LogoPequeño from './../assets/image/logo-pequeño.png'
import LogoMP from './../assets/image/imagenubicacion.jpg'
import './../styles/SectionContact.css'


function SectionContact() {
    return (

        <div className='contenedorconctact'>

            <div className='titlecontact'>
                <h1 c>CONTACTO</h1>
            </div>

            <div className='teesperamos'>
                <h2>Te esperamos</h2>
            </div>

            <div className='contenedormapa'>
            <a className='mapa' target='_blank' href='https://maps.app.goo.gl/A4QojNyJgwrAt5Fp8'><SimpleMap /></a>
             </div>
            
            <div className='logosydireccion'>
                <li className='listalogos'>
                    <ul><img src={LogoMP} /> </ul>
                    <ul><img src={LogoWA} /></ul>
                     <ul><img src={LogoML} /></ul>
                </li>
            </div>
           

    

            <div className='imagenlogocontacto'>
                <img className='franja' src={LogoPequeño} />
            </div> 
            
        </div>
        // <div ></div>
        
    );
}

export { SectionContact }