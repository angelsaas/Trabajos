import { CardDto } from "./card.dto"

const Index=(info: CardDto)=>{
    return(<>
        <p>comenzando con las cards</p> 
        <p>{info.icono}</p>
        <p>{info.titulo}</p>
        <p>{info.descripcion}</p>
    </>)
}

export default Index