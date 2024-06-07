import React from "react";
import MainCarousel from "../components/Carousel/MainCarousel";
import "../styles/sectionProducts.css"


function SectionProducts() {
    return (
        
        <div>
             <div className='circulo'></div>
             <div className='circulo1'></div>
             <div className='circulo2'></div>
            <h1 className="productos">PRODUCTOS</h1>
            <MainCarousel/>
        </div>
        
    );
}

export { SectionProducts }