import logoCalculadora from '../src/imagenes/logo.svg';
import './App.css';
import Boton from './componentes/botones';
import BotonLimpiarPantalla from './componentes/botonLimpiarPantalla';
import Pantalla from './componentes/pantalla';
import { useState } from 'react';
import { evaluate } from 'mathjs';
import Swal from 'sweetalert2';
import BotonBorrarUnidad from './componentes/botonBorrarUnidad';
import { BsBackspace } from 'react-icons/bs';
import { BsTrash } from 'react-icons/bs';

function App() {
    const [input, setInput] = useState('');

    const agregarInput = (valor) => {
        setInput(input + valor);
    };

    const mostrarError = () => {
        Swal.fire({
            icon: 'error',
            title: '¡Oops!',
            text: 'Error de cálculo',
        });
    };

    const calcularResultado = () => {
        if (input) {
            try {
                setInput(evaluate(input));
            } catch (e) {
                mostrarError();
            }
        } else {
            return null;
        }
    };

    return (
        <div className="App">
            <div className="contenedor-calculadora">
                <div className="contenedor-logo">
                    <img
                        src={logoCalculadora}
                        className="logo-calculadora"
                        alt="Calculadora App"
                        title="CalculApp"
                    />
                </div>
                <Pantalla input={input} />
                <div className="fila">
                    <Boton manejarClick={agregarInput}>1</Boton>
                    <Boton manejarClick={agregarInput}>2</Boton>
                    <Boton manejarClick={agregarInput}>3</Boton>
                    <Boton manejarClick={agregarInput}>+</Boton>
                </div>
                <div className="fila">
                    <Boton manejarClick={agregarInput}>4</Boton>
                    <Boton manejarClick={agregarInput}>5</Boton>
                    <Boton manejarClick={agregarInput}>6</Boton>
                    <Boton manejarClick={agregarInput}>-</Boton>
                </div>
                <div className="fila">
                    <Boton manejarClick={agregarInput}>7</Boton>
                    <Boton manejarClick={agregarInput}>8</Boton>
                    <Boton manejarClick={agregarInput}>9</Boton>
                    <Boton manejarClick={agregarInput}>*</Boton>
                </div>
                <div className="fila">
                    <Boton manejarClick={calcularResultado}>=</Boton>
                    <Boton manejarClick={agregarInput}>0</Boton>
                    <Boton manejarClick={agregarInput}>.</Boton>
                    <Boton manejarClick={agregarInput}>/</Boton>
                </div>
                <div className="fila">
                    <BotonLimpiarPantalla manejarLimpieza={() => setInput('')}>
                        <BsTrash />
                    </BotonLimpiarPantalla>
                    <BotonBorrarUnidad
                        borrarUnidad={() =>
                            setInput(input.substr(0, input.length - 1))
                        }
                    >
                        <BsBackspace />
                    </BotonBorrarUnidad>
                </div>
            </div>
        </div>
    );
}

export default App;
