import React from "react";

const Auth = () => {
    return (
        <div className="container">
            <div className="row mt-5">
                <h1 className="text-center mb-3">¡Bienvenido a nuestro Bingo virtual!</h1>
                <h3 className="text-center mb-5">Estás a punto de tener una experiencia inolvidable con el mejor juego de todos.</h3>
                <h4 className="text-center">Para continuar, debes ingresar tu correo electrónico a continuación para iniciar el juego</h4>

            </div>
            <div className="row mt-5">
                <form action="">
                    <div className="mb-3">
                        {/* Revisar el 'htmlFor', en Bootstrap utiliza 'for' */}
                        <label className="form-label" htmlFor="InputEmail1">Correo electrónico</label>
                        <input className="form-control" type="email" id="emailInput" aria-describedby="emailHelp"/>
                        <div id="emailHelp" class="form-text">No compartiremos tu email ni tus datos personales con ningún tercero</div>
                    </div>
                    <div className="mb-3">
                        {/* Revisar el 'htmlFor', en Bootstrap utiliza 'for' */}
                        <label className="form-label" htmlFor="InputPassword">Contraseña</label>
                        <input className="form-control" type="password" id="passwordInput"/>
                    </div>
                    <div className="start-button d-grid gap-2 col-6 mx-auto">
                        <button type="submit" className="btn btn-info">Enviar</button>
                    </div>
                </form>

            </div>

        </div>
    );
};
export default Auth;
