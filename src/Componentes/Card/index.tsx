import { CardDto } from "./card.dto"
import styles from './styles.module.css'

const Index = (info: CardDto) => {
    return (<>
        <div className={styles.containerCard}>
            <p>comenzando con las cards</p>
            <p>{info.icono}</p>
            <p>{info.titulo}</p>
            <p>{info.descripcion}</p>

        </div>
    </>)
}

export default Index