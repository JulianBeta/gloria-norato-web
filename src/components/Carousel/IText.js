import React, { useRef } from 'react';
import TextProduct from './text';
import './../../styles/Carousel/ICarousel.css'

const IText = ({ images, selectedIndex, handleImageClick}) => {
  const containerRef = useRef(null);

  const getNormalizedIndexText = (indextext) => {
    const lengthtext = images.length;
    if (indextext < 0) {
      return lengthtext + (indextext % lengthtext);
      console.log (indextext)
    }
    return indextext % lengthtext;
  };

  const renderText = () => {
    const normalizedIndexText = getNormalizedIndexText(selectedIndex);

    return [-1, 0, 1].map((offset) => {
      const indextext = getNormalizedIndexText(normalizedIndexText + offset);
      return (
        <TextProduct
          key={indextext}
          src={`/image/${images[indextext]}`}
          isSelected = { offset === 0}
          onClick = {() => handleImageClick(indextext)}
          
        />
        
      );
    });
  };

return (
  <div className="image-carousel-container" ref={containerRef}>
    <div className="image-carousel">{renderText()}</div>
    
  </div>
);
};

export default IText;