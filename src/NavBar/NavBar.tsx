import styles from './NavBar.module.css'

export default function NavBar () { 
    return (
        <nav className={styles.navBar}>
            <span className={styles.websiteTitle}> ErgoMinds: ErgoDesk </span>

            <ul className={styles.websiteSections}>
                <li> <a href='#producto'> Producto </a> </li>
                <li> <a href='#caracteristicas'> Características </a> </li>
                <li> <a href='#beneficios'> Beneficios </a> </li>
                <li> <a href='#formulario'> Formulario </a> </li>
            </ul>
        </nav>
    );
}