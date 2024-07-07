import React from 'react'
import { ServicesCarousel } from '../components/CarouselServicios/ServicesCarousel'
import './../styles/SectionServices.css'
import Slider2 from '../components/Carouselservise/CarouselServise'



export const SectionServices = () => {
  return (

  <div className='contenedormayor'> <h1 className='tituloServicios'>NUESTROS SERVICIOS</h1>
      <div className='contenedorSectionServices'>
        <div className='contendorTextoServices'> 
          <ul>
            <li>Últimas Técnicas En Coloración como Balayage, mechas, contoure, highlights, baby lights, tintes, ombré, shatush, blorange.</li><br></br>
            <li>Tratamientos Para Recuperación De La Fibra Capilar</li><br></br>
            <li>Tratamientos Para Regenerar El Folículo Piloso Para Evitar La Caída Del Pelo</li><br></br>
            <li>Tijera térmica para sellar cutículas y evitar horquilla y acelerar crecimiento.</li><br></br>
            <li>Capilografo, microscopio para analizar y conocer las condiciones del cabello para diagnosticar profundamente y brindar el mejor tratamiento.</li><br></br>
            <li>Pistola pulverizadora para nanotecnología capilar con luz azul y láser led.</li><br></br>
          </ul>
        </div>
        <div className='contenedorCarouselServices'><Slider2/></div>
        {/* <div ><ServicesCarousel/></div> */}
        
        
        </div>
    </div>
 
   
  )
}
