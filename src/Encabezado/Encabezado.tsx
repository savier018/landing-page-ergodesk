import styles from './Encabezado.module.css'

interface EncabezadoProps {
    titulo: string;
}

export default function Encabezado ( { titulo }: EncabezadoProps) {
    return (
        <h2 className={styles.sectionTitle}> {titulo} </h2>
    );
}