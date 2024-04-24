import React, { useState }from "react";
import { ImageCarousel } from "./ImageCarousel";


function ServicesCarousel() {

    const imageFilenames = ['servicios1.jpg', 'servicios2.jpg', 'servicios3.jpg', 'servicios4.jpg', 'servicios5.jpg', 'servicios6.jpg']; 

    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleImageClick = (index) => {
        setSelectedIndex(index);
    };

  return (
    <div className="maincarrusel">
      
      <ImageCarousel
        images={imageFilenames}
        selectedIndex={selectedIndex}
        handleImageClick={handleImageClick}
      />
    </div>
  );
}

export { ServicesCarousel }