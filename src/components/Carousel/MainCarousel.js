import React, { useState } from 'react';
import ICarousel from './ICarousel.js';
import './../../styles/Carousel/MainCarousel.css'
import IText from './IText.js';

const MainCarousel = () => { 

  const imageFilenames = ['1.png',  '3.png', '4.png', '5.png', '6.png', '7.png', '8.png', '9.png', '10.png', '11.png', '12.png', '13.png', '14.png', '15.png']; 
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
