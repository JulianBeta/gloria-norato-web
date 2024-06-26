import React from 'react';
import './../../styles/Carousel/Image.css'

const Image = ({ src, isSelected, onClick }) => {
  const imageSize = isSelected ? 'main-image' : 'side-image';

  return (
    
    <img
      alt='carouselimage'
      src={src}
      className={`carousel-image ${imageSize}`}
      onClick={onClick}
    ></img>
      
    
  );
};

export default Image;