import styles from './NavBar.module.css'
import logoIcon from '../assets/logo.jpeg'

export default function NavBar () { 
    return (
        <nav className={styles.navBar}>
            <div className={styles.logoTitle}>
                <img src={logoIcon} className={styles.logoImage}></img>
                <span className={styles.websiteTitle}> ErgoMinds: ErgoDesk </span>
            </div>

            <ul className={styles.websiteSections}>
                <li> <a href='#producto'> Producto </a> </li>
                <li> <a href='#caracteristicas'> Características </a> </li>
                <li> <a href='#beneficios'> Beneficios </a> </li>
                <li> <a href='#formulario'> Formulario </a> </li>
            </ul>
        </nav>
    );
}