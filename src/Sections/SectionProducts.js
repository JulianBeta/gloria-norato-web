import React from "react";
import MainCarousel from "../components/Carousel/MainCarousel";
import Products from "../styles/sectionProducts.css"


function SectionProducts() {
    return (
        
        <div>
            <h1 className="productos">PRODUCTOS</h1>
            <MainCarousel/>
        </div>
        
    );
}

export { SectionProducts }