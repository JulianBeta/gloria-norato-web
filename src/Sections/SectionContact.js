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
            <a className='mapa' target='_blank' rel='noreferrer' href='https://maps.app.goo.gl/A4QojNyJgwrAt5Fp8'><SimpleMap /></a>
             </div>
            
            <div className='logosydireccion'>
                <li className='listalogos'>
                    <ul className='elementoslista'><img src={LogoMP} alt='logoMapa'/> Carrera 53 No. 141 - 69 Local 102</ul>
                    <ul className='elementoslista'><img src={LogoWA} alt='logoWhatsApp'/> +57 310 334 96 16</ul>
                    <ul className='elementoslista'><img src={LogoIG} alt='logoInstagram'/> @glorialorato</ul>
                     <ul className='elementoslista'><img src={LogoML} alt='logoMail'/>glorialorato@gmail.com</ul>
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