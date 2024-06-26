import React, { useState } from 'react';
import ICarousel from './ICarousel.js';
import './../../styles/Carousel/MainCarousel.css'
import IText from './IText.js';

const MainCarousel = () => { 

  const imageFilenames = ['prod1.png', 'prod2.png', 'prod3.png', 'prod4.png', 'prod5.png', 'prod6.png']; 
  const textFilenames = ['pruebatexto.png', 'champú.png', 'cremamanos.png', 'AcondicionadorHiDratante.png', 'Aceite.png', 'keraschampu.png'];
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleImageClick = (index, indextext) => {
  setSelectedIndex(index, indextext);
  };

  return (
    <div className="maincarrusel">
      <div className="carrusel">
      <ICarousel 
        images={imageFilenames}
        selectedIndex={selectedIndex}
        handleImageClick={handleImageClick}
        
      />
      </div>
      <div >
      <IText className='textoProducto'
        images={textFilenames}
        selectedIndex={selectedIndex}
        handleImageClick={handleImageClick}
        
      />
      </div>
            
    </div>
  );
};

export default MainCarousel;
