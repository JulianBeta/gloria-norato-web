import React, { useState } from 'react';
import './../../styles/Carousel/MainCarousel.css'
import IText from './IText.js';


const MainCarouselText = () => { {
    


;
    }

    const textFilenames = ['prod1.png', 'prod2.png', 'prod3.png', 'prod4.png', 'prod5.png', 'prod6.png'
      
    ];
   

  const [selectedIndexText, setSelectedIndexText] = useState(0);

  const handleImageClicktext = (indextext) => {
    setSelectedIndexText(indextext);
  };
  


  return (
    <div className="maincarrusel">
      <div className="carrusel">
        <IText 
        images={textFilenames}
        selectedIndexText={selectedIndexText}
        handleImageClicktext={handleImageClicktext}
        
      />
      </div>
            
    </div>
  );
};

export default MainCarouselText;