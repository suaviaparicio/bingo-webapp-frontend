import React from "react";

const Home = () => {
    return (
        <div className="container">
            <div className="home pt-5 ">
                <h1 className="pb-3 text-center">
                    Bienvenido al bingo virtual
                </h1>
                <h2 className="pb-2 text-center">
                    ¡Estamos  muy contentos de que nos acompañes!
                </h2>
                <h5 className="fw-light">
                    Antes de iniciar, es importante que leas las instrucciones a continuación:
                    <ul>
                        <li>Al presionar 'iniciar juego', serás dirigido a una sala donde esperarás máximo 1 minuto a que otros jugadores se sumen a la partida</li>
                        <li>Luego podrás generar un tarjetón</li>
                        <li>Cuando el juego inicie, leeremos los números uno por uno cada 5 segundos</li>
                        <li>Si los números coinciden con los de tu tarjetón, debes marcarlos haciendo clic sobre el recuadro del número sobre tu tarjetón.</li>
                        <li>Ganarás, en caso de que completes alguna de las siguientes opciones: </li>
                            <ul>
                                <li>Una línea vertical</li>
                                <li>Una línea horizontal</li>
                                <li>Una diagonal en cualquier dirección</li>
                                <li>Las cuatro esquinas del tarjetón</li>
                                <li>Todo el tarjetón</li>

                            </ul>
                        <li>Debes presionar el botón de 'Bingo', para indicar que ganaste y validaremos tus respuestas</li>
                        <li>¡Cuidado! en caso de que presiones el botón 'Bingo' y no hayas ganado, quedarás descalificado de la partida</li>
                    </ul>
                </h5>
                <div className="start-button d-grid gap-2 col-6 mx-auto pt-4 pb-3">
                    <button type="button" className="btn btn-success">Iniciar juego</button>
                </div>
            </div>
        </div>
    );
};
export default Home;