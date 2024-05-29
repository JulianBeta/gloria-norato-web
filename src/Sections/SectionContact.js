import React from 'react'
import Logo_SalonDeBelleza from './../assets/image/Logo_SalonDeBelleza.png'
import SimpleMap from '../components/Maps.js';
import LogoML from './../assets/image/logo-mail.png'
import LogoWA from './../assets/image/logo-wasap.jfif'
import LogoIG from './../assets/image/logo-insta.jpg'
import LogoPequeño from './../assets/image/logo-pequeño.png'
import LogoMP from './../assets/image/logopunteromapa.png'
import './../styles/SectionContact.css'


function SectionContact() {
    return (

        <div className='contenedorconctact'>

            <div className='titlecontact'>
                <h1 c>CONTACTO</h1>
            </div>

            <div className='teesperamos'>
                <h3>Te esperamos</h3>
            </div>

            <div className='contenedormapa'>
                 <SimpleMap />
            </div>
            
            <div className='logosydireccion'>
                <li className='listalogos'>
                    <ul><img src={LogoMP} /> </ul>
                    <ul><img src={LogoWA} /></ul>
                    <a target='_blank' href='https://www.instagram.com/glorianorato_hairdesignstudio?igsh=MWFkdGI0Y3ltMHpqOQ=='> <ul><img src={LogoIG} /></ul></a>
                    <ul><img src={LogoML} /></ul>
                </li>
            </div>

            <div className='imagenlogocontacto'>
                <img src={LogoPequeño} />
            </div>

        </div>
    );
}

export { SectionContact }