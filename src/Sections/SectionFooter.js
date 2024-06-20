import React from "react";
import './../styles/SectionFooter.css';
import LogoPequeño from './../assets/image/LogoGN.png' 

const SectionFooter = () => {
    return (
        <div className="footerprobe">
            <div >
            <div className='imagenlogocontacto'>
                <img className='franja' alt="logo pequeño" src={LogoPequeño} />
            </div> 
                    <div >
                     <div className="textfooter">Todos los derechos reservados</div><div className="textfooter">Gloria Norato</div>
                     <div className="textfooter">Copyright © 2023</div>
                       </div>
                </div>
        </div>
    );
};




export default SectionFooter;