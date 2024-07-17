import React, { useState}from "react";
import { ImageCarousel } from "./ImageCarousel";




export function ServicesCarousel() {

  
    const imageFilenames = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg']; 

    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleImageClick = (index) => {
        setSelectedIndex(index);
    };

  return (
    <div className="carousel-container">
      <ImageCarousel
        images={imageFilenames}
        selectedIndex={selectedIndex}
        handleImageClick={handleImageClick}
      />
    </div>
    
  );
}
