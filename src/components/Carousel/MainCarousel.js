import React, { useState } from 'react';
import ICarousel from './ICarousel.js';
import './../../styles/Carousel/MainCarousel.css'


const MainCarousel = () => {

    const imageFilenames = ['prod1.png', 'prod2.png', 'prod3.png', 'prod4.png', 'prod5.png', 'prod6.png']; 

  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleImageClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <div className="maincarrusel">
      
      <ICarousel
        images={imageFilenames}
        selectedIndex={selectedIndex}
        handleImageClick={handleImageClick}
      />
    </div>
  );
};

export default MainCarousel;