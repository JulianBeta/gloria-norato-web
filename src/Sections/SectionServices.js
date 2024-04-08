import { ServicesCarousel } from "../components/ServicesCarousel/ServicesCarousel";
import "./../styles/SectionServices.css"

function SectionServices() {
    return (
        <div className="Services">
            <h1 className="ServicesTitle">
                Nuestros Servicios
            </h1>
            <div className="Columns">
                <div className="LeftColumn">
                    <div className="ServiceContainer">
                        <h3 className="ServiceTitle">MECHAS BABYLIGHTS</h3>
                        <p className="ServiceText">
                            Esta tendencia todavía sigue en tendencia por su naturalidad. 
                            Son mechas muy finas que parten de la raíz, y suelen aclarar 
                            2 o 3 tonalidades del color de tu base. Si estas pensando en 
                            hacerte color por primera vez esta, es una buena opción.  
                        </p>
                    </div>
                    <div className="ServiceContainer">
                        <h3 className="ServiceTitle">BALAYAGE</h3>
                        <p className="ServiceText">
                            Esta técnica francesa significa Barrido. Se suele realizar con 
                            pincel y a mano alzada. Lo que se consigue es un degradado de raíz 
                            a puntas muy natural.
                        </p>
                    </div>
                    <div className="ServiceContainer">
                        <h3 className="ServiceTitle">BRONDE</h3>
                        <p className="ServiceText">
                            Esta técnica es para tonos más oscuros, castaños y también para colores cobrizos. 
                            Consiste en mezclar un par de tonos, uno más rubio claro dorado y otro más 
                            castaño claro, pero también cálido, dejando las raíces del color natural.
                        </p>
                    </div>
                    <div className="ServiceContainer">
                        <h3 className="ServiceTitle">MECHAS SHATUSH</h3>
                        <p className="ServiceText">
                            Una técnica que se aplica con el cabello bien crepado en raíces y medios. 
                            Decolorando todas las puntas sobrantes, el difuminado que queda con esta 
                            técnica es super natural, aunque se aplique un color muy clarito. La única 
                            pega es que si tienes el cabello muy frágil no te la recomiendo, ya que 
                            puedes acabar rompiendo demasiado el cabello por culpa del crepado.
                        </p>
                    </div>
                </div>
                <div className="RightColumn">
                    <ServicesCarousel />
                </div>
            </div>
        </div>
    );
}

export { SectionServices }