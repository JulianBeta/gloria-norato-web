import React, { useState } from 'react';
import ICarousel from './ICarousel.js';
import './../../styles/Carousel/MainCarousel.css'


const MainCarousel = () => { {

    
;
    }

    const imageFilenames = ['prod1.png', 'prod2.png', 'prod3.png', 'prod4.png', 'prod5.png', 'prod6.png']; 
    const precio = {

    }
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
      
    </div>
  );
};

export default MainCarousel;