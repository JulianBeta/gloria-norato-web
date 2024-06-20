import React from 'react';
// import './../../styles/Carousel/Image.css'

const ImageServices = ({ src, isSelected, onClick }) => {
  const imageSize = isSelected ? 'main-image' : 'side-image';

  return (
    
    <img
      src={src}
      alt="Servicios"
      className={`carousel-image ${imageSize}`}
      onClick={onClick}
    ></img>
      
    
  );
};

export default ImageServices;