import React from 'react'

const TextoProducto = ({ selectedIndex, handleTextClick, texto}) => {
        const containerRef = useRef(null);

        let texto = ""

        
      
             
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
              <Image
                key={index}
                src={`/image/${images[index]}`}
                isSelected = { offset === 0}
                onClick = {() => handleImageClick(index)}
                
              />
            );
          });
        };
      
      return (
        <div className="image-carousel-container" ref={containerRef}>
          <div className="image-carousel">{renderImages()}</div>
          
        </div>
      );
      
      
        
        
      };
      
      export default ICarousel;</div>
  )
}

export default TextoProducto