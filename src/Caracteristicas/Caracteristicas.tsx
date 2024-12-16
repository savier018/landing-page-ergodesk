import styles from './Caracteristicas.module.css'

interface CaracteristicasProps {
    caracteristicas: string[]; 
}

export default function Caracteristicas ({ caracteristicas }: CaracteristicasProps) {
    return (
        <section id='caracteristicas'>
            <div className={styles.card}>
                <h2 className={styles.cardTitle}> Características </h2>
                <ul className={styles.cardDescriptionList}>
                    {caracteristicas.map((caracteristica, index) => (
                        <li key={index} className={styles.cardDescriptionItem}>
                            {caracteristica}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}