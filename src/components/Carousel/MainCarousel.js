import React, { useState } from 'react';
import ICarousel from './ICarousel.js';
import './../../styles/Carousel/MainCarousel.css'


const MainCarousel = () => { {


    
;
    }

    const imageFilenames = ['prod1.png', 'prod2.png', 'prod3.png', 'prod4.png', 'prod5.png', 'prod6.png']; 
    const textoProducto = [
      {
       price:"$US9000", 
       description: "Crema Hidratante" 
      },
      {
        price:"$2000", 
        description: "Champú Reparador" 
       },
       {
        price:"$100", 
        description: "Mascarilla Hidratante Intensa" 
       },
       {
        price:"$100", 
        description: "Crema Hidratante" 
       },
       {
        price:"$100", 
        description: "Crema Hidratante" 
       },
       {
        price:"$100", 
        description: "Crema Hidratante" 
       }           
    ]
    const nombreProducto = [] 


  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleImageClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <div className="maincarrusel">
      <div className="carrusel">
      <ICarousel 
        images={imageFilenames}
        selectedIndex={selectedIndex}
        handleImageClick={handleImageClick}
        
      />
      {/* <p className='preciocarrusel'>Precio Producto</p> */}
      </div>
      <div className='textoProducto'>
        <p className='descripcion'>{textoProducto[0].description}</p>
        <p className='precio'>{textoProducto[0].price}</p>
      </div>
      
    </div>
  );
};

export default MainCarousel;