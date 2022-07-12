import React from 'react';
import '../hojas-de-estilos/botonBorrarUnidad.css';

function BotonBorrarUnidad(props) {
    return (
        <div className="boton-borrar-unidad" onClick={props.borrarUnidad}>
            {props.children}
        </div>
    );
}

export default BotonBorrarUnidad;
