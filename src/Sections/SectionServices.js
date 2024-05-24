import React from 'react'
import { ServicesCarousel } from '../components/CarouselServicios/ServicesCarousel'
import './../styles/SectionServices.css'



export const SectionServices = () => {
  return (

  <div className='contenedormayor'> <h1 className='tituloServicios'>NUESTROS SERVICIOS</h1>
      <div className='contenedorSectionServices'>
        <div className='contendorTextoServices'> <h1>SERVICIO</h1><p>Texto del servicio / descripción <br></br>Texto del servicio / descripción<br></br>Texto del servicio / descripción<br></br>Texto del servicio / descripción<br></br>Texto del servicio / descripción</p>
        <h1>SERVICIO</h1><p>Texto del servicio / descripción <br></br>Texto del servicio / descripción<br></br>Texto del servicio / descripción<br></br>Texto del servicio / descripción<br></br>Texto del servicio / descripción</p>
        <h1>SERVICIO</h1><p>Texto del servicio / descripción <br></br>Texto del servicio / descripción<br></br>Texto del servicio / descripción<br></br>Texto del servicio / descripción<br></br>Texto del servicio / descripción</p>
        </div>
        <div className='contenedorCarouselServices'><ServicesCarousel/></div>
        
        
        </div>
    </div>
 
   
  )
}
