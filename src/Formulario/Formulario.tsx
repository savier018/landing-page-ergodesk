import CodigoQR from '../assets/qrcode-generado.png'
import styles from './Formulario.module.css'

export default function Formulario () {
    return (
        <section id='formulario'>
            <div className={styles.formContainer}>
                <div className={styles.firstContainer}>
                    <h3 className={styles.qrTitle}> Código QR </h3>
                    <img src={CodigoQR} className={styles.qrImage}></img>

                    <h3 className={styles.qrTitle}> Link del formulario </h3>
                    <p className={styles.qrTitle}> <a href='https://forms.gle/giTAkRN9tHoLo3p5A'> https://forms.gle/giTAkRN9tHoLo3p5A </a> </p>
                </div>
            </div>
        </section>
    );
}