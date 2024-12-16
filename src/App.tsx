import './App.css'
import NavBar from "./NavBar/NavBar"
import PropValor from "./PropValor/PropValor"
import Caracteristicas from './Caracteristicas/Caracteristicas'
import Beneficios from "./Beneficios/Beneficios"
import Encabezado from "./Encabezado/Encabezado";
import Imagenes from './Imagenes/Imagenes';

function App() {

  const descripcionFuncional = ["Disminuye las molestias musculares, gracias al soporte acolchonado y evita lesiones por movimientos repetitivos.", "Incremento de horas de trabajo continuo sin molestias, reduciendo las pausas por incomodidad física.", "Adaptable para diferentes posiciones, compatible con superficies comunes: mesas, camas, sofás; con ajuste personalizado para usuarios entre 1.50 m y 1.90 m de altura."];

  const descripcionEmocional = ["Sensación de inversión inteligente en salud y bienestar, con mayor motivación para trabajar o estudiar por períodos prolongados.", "Seguridad de contar con un espacio de trabajo adecuado en cualquier lugar, reduciendo el estrés asociado a malas posturas."]

  const descripcionSocial = ["Contribución al medio ambiente por uso de materiales eco-amigables, además de que la huella de carbono se reduce en comparación con escritorios tradicionales.", "Proyección de una imagen moderna y consciente de la saludad, adaptado a la nueva cultura de trabajo híbrido y remoto."]

  const caracteristicasProducto = ["Soporte acolchado y ergonómico para apoyar la muñeca, aliviando la presión y reduciendo el dolor y tensión en esa zona.", "Cuenta con brazos articulados y patas ajustables que permiten ajustar la altura e inclinación.", "Fabricado con materiales sostenibles de alta calidad, que permitan una resistencia y portabilidad adecuadas.", "Ligero con un peso máximo de 1.2 kg y fácil de transportar.", "Dimensiones de 25 x 50 x 2.5 cm", "Precio aproximado de $40.", ]

  return (
    <>
      <NavBar/>
      <Encabezado titulo={"¡Bienvenido a nuestro proyecto de Emprendimiento!"}/>
      <Imagenes/>
      <div className='app-container'>
        <PropValor/>
        <Caracteristicas caracteristicas={caracteristicasProducto}/>
      </div>
      <Encabezado titulo={"Beneficios de nuestro producto"}/>
      <div className='app-container'>
        <Beneficios cardName={"Funcionales"} cardDescriptions={descripcionFuncional}/>
        <Beneficios cardName={"Emocionales"} cardDescriptions={descripcionEmocional}/>
        <Beneficios cardName={"Sociales"} cardDescriptions={descripcionSocial}/>
      </div>
      <Encabezado titulo={"Formulario para retroalimentación"}/>
    </>
  )

}

export default App
