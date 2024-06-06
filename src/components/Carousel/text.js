import React from 'react';

import './../../styles/Carousel/Image.css'

const TextProduct = ({ src, isSelected, onClick }) => {
  const textSize = isSelected ? 'main-text' : 'side-text';

  return (
    
    <img
      src={src}
      alt="carousel-text"
      className={`carousel-image ${textSize}`}
      onClick={onClick}
    ></img>
      
    
  );
};

export default TextProduct;