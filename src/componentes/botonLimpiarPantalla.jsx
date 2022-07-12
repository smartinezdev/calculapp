import React from 'react';
import '../hojas-de-estilos/botonLimpiarPantalla.css';

const BotonLimpiarPantalla = (props) => (
    <div className="boton-limpiar" onClick={props.manejarLimpieza}>
        {props.children}
    </div>
);

export default BotonLimpiarPantalla;
