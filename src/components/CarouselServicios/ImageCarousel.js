import React, { useRef } from 'react';
import ImageServices from './ImageServices';
import './../../styles/SectionServices.css'


function ImageCarousel ({ images, selectedIndex, handleImageClick }) {
  const containerRef = useRef(null);

  const handleScroll = (scrollDirection) => {
    const container = containerRef.current;
    const scrollAmount = 300; 

    if (scrollDirection === 'left') {
      container.scrollLeft -= scrollAmount;
    } else if (scrollDirection === 'right') {
      container.scrollLeft += scrollAmount;
    }
  };

  const getNormalizedIndex = (index) => {
    const length = images.length;
    if (index < 0) {
      return length + (index % length);
    }
    return index % length;
  };

  const renderImages = () => {
    const normalizedIndex = getNormalizedIndex(selectedIndex);

    return [-1, 0, 1].map((offset) => {
      const index = getNormalizedIndex(normalizedIndex + offset);
      return (
        <ImageServices
          key={index}
          src={`./../image/${images[index]}`}
          
          isSelected = { offset === 0}
          onClick = {() => handleImageClick(index)}
        />
      );
    });
  };

return (
  <div className='stylecarouselservices' ref={containerRef}>
    {renderImages()}</div>
  
);

};

export { ImageCarousel };