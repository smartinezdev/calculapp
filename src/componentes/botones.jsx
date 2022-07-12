import React from 'react';
import '../hojas-de-estilos/boton.css';

function Boton(props) {
    const esOperador = (valor) => {
        return isNaN(valor) && valor !== '.' && valor !== '=';
    };

    if (esOperador(props.children)) {
        return (
            <div
                className="contenedor-boton operador"
                onClick={() => props.manejarClick(props.children)}
            >
                {props.children}
            </div>
        );
    } else {
        return (
            <div
                className="contenedor-boton"
                onClick={() => props.manejarClick(props.children)}
            >
                {props.children}
            </div>
        );
    }
}

export default Boton;
