import Imagen1 from '../assets/Imagen1.png'
import Imagen2 from '../assets/Imagen2.png'
import Imagen3 from '../assets/Imagen3.png'
import Imagen4 from '../assets/Imagen4.png'
import Imagen5 from '../assets/Imagen5.png'
import styles from './Imagenes.module.css'

export default function Imagenes () {
    return (
        <section id='producto'>
            <div className={styles.imageContainer}>
                <img src={Imagen1} className={styles.image}></img>
                <img src={Imagen2} className={styles.image}></img>
                <img src={Imagen3} className={styles.image}></img>
                <img src={Imagen4} className={styles.image}></img>
                <img src={Imagen5} className={styles.image}></img>
            </div>
        </section>
    );
}