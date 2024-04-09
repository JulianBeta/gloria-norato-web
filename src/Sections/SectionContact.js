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
            <div className='titlemaincontact'>
                <h1>CONTACTOS</h1></div>


            <div className='contenedorsectioncontact'>
                <div className='titlecontact'>
                    <h3>Te esperamos</h3></div>
                <div className='contenedormapa'> <SimpleMap /></div>
                <div className='logosydireccion'>
                    <li className='listalogos'>
                        <ul><img src={LogoMP} /> <><><></></></>Cra. 53 #141-69 local 102, Bogotá</ul>
                        <ul><img src={LogoWA} /></ul>
                        <ul><img src={LogoIG} /></ul>
                        <ul><img src={LogoML} /><><><></></></> cccccccc@asdsadasdd.com</ul>
                    </li></div>
            </div>


            <div className='imagenlogocontacto'><img src={LogoPequeño} /></div>

        </div>
    );
}

export { SectionContact }