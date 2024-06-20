import gloria from "./../assets/image/fotoglo.png"
import "./../styles/SectionIntro.css"

function SectionIntro() {
    return (
        <div className="section-intro">
            <div className="section-left">
                <img src={gloria} alt="Gloria Norato" className="imagen-gloria"></img>
            </div>
            <div className="section-right">
                <h2 className="title">Gloria Norato</h2>
                <p className="text">¡Bienvenidos a Gloria Norato Hair Design Studio!<br></br>
                    <br></br>Con más de 30 años de experiencia en el apasionante mundo de la belleza, 
                    me complace presentarte mi propio espacio dedicado a realzar tu belleza y resaltar 
                    tu estilo único. A lo largo de mi carrera, he tenido el privilegio de trabajar en 
                    reconocidos salones de belleza y de viajar por todo el mundo para mantenerme actualizada 
                    con las últimas tendencias y técnicas en el arte del cabello.<br></br>

                    <br></br>En mi estudio, te ofrezco un ambiente acogedor y profesional donde tu satisfacción 
                    es mi prioridad. Además, como parte de mi compromiso con la excelencia, utilizo productos de 
                    la más alta calidad, incluyendo las prestigiosas líneas de Moroccanoil, Kérastase y L'Oréal. La reputación de 
                    Moroccanoil en la industria de la belleza es incomparable, gracias a sus fórmulas innovadoras 
                    que nutren, protegen y embellecen el cabello.<br></br>

                    <br></br>Te invito a descubrir una experiencia única en cuidado capilar en Gloria Norato Hair 
                    Design Studio.<br></br> 

                    <br></br>¡Déjame ayudarte a alcanzar el look que siempre has deseado!</p>
                <a target='_blank' href='https://api.whatsapp.com/send/?phone=573006822639' rel="noreferrer" ><button className="botonintro"> <b>AGENDA TU CITA</b></button></a>
            </div>
        </div>
    );
}

export { SectionIntro }