import styles from './Beneficios.module.css';

interface BeneficiosProps {
    cardName: string;
    cardDescriptions: string[]; 
}

export default function Beneficios({ cardName, cardDescriptions }: BeneficiosProps) {
    return (
        <section id='beneficios'>
            <div className={styles.card}>
                <h2 className={styles.cardTitle}>{cardName}</h2>
                <ul className={styles.cardDescriptionList}>
                    {cardDescriptions.map((description, index) => (
                        <li key={index} className={styles.cardDescriptionItem}>
                            {description}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
        
    );
}