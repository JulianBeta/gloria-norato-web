import React, { useState } from 'react';
import ICarousel from './ICarousel.js';
import './../../styles/Carousel/MainCarousel.css'


const MainCarousel = () => { {{

    const Products = () => {
[
    {
        "image" : "image1.json", 
        "price" : "$ 1.000", 
        "name" : "Champu"  
    },
    {
        "image" : "image2.json", 
        "price" : "$ 2.200", 
        "name" : "Champu para la caspa"
    },
    {
        "image" : "image3.json", 
        "price" : "$ 3.500", 
        "name" : "Acondicionador"
    }
]}
;
    }

    // const imageFilenames = ['prod1.png', 'prod2.png', 'prod3.png', 'prod4.png', 'prod5.png', 'prod6.png']; 
    // const precio = {

    }
    const nombreProducto = [] 


  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleImageClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <div className="maincarrusel">
      
      <ICarousel
        images={Products}
        selectedIndex={selectedIndex}
        handleImageClick={handleImageClick}
      />
      
    </div>
  );
};

export default MainCarousel;