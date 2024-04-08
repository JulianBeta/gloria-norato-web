import React from 'react';
import './../../styles/Image.css';

function Image ({ src, isSelected, onClick }) {
  const imageSize = isSelected ? 'main-image' : 'side-image';

  return (
    <img
      src={src}
      alt="carousel"
      className={`carousel-image ${imageSize}`}
      onClick={onClick}
    />
  );
};

export { Image };