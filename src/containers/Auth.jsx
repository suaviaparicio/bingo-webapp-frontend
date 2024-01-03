import React, { useState }  from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
      };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://192.168.5.73:3000/api/authenticate', { email });
      
            if (response.data.success) {
              navigate('/home');
            } else {
              console.error('Authentication failed');
            }
          } catch (error) {
            console.error('Error during authentication:', error);
          }
        };


    return (
        <div className="container">
            <div className="row mt-5">
                <h1 className="text-center mb-3">¡Bienvenido a nuestro Bingo virtual!</h1>
                <h3 className="text-center mb-5">Estás a punto de tener una experiencia inolvidable con el juego más divertido.</h3>
                <h4 className="text-center">Para continuar, debes ingresar tu correo electrónico para iniciar el juego</h4>

            </div>
            <div className="row mt-5">
                <form action="" onSubmit={handleFormSubmit}>
                    <div className="mb-3">
                        {/* Revisar el 'htmlFor', en Bootstrap utiliza 'for' */}
                        <label className="form-label" htmlFor="InputEmail1">Correo electrónico</label>
                        <input 
                            className="form-control" 
                            type="email" 
                            id="emailInput" 
                            aria-describedby="emailHelp"
                            value={email}
                            onChange={handleEmailChange}
                        />
                        <div id="emailHelp" class="form-text">No compartiremos tu email ni tus datos personales con ningún tercero</div>
                    </div>
                    {/* <div className="mb-3">
                        <label className="form-label" htmlFor="InputPassword">Contraseña</label>
                        <input className="form-control" type="password" id="passwordInput"/>
                    </div> */}
                    <div className="start-button">
                        <button type="submit" className="btn btn-success">Enviar</button>
                    </div>
                </form>

            </div>

        </div>
    );
};

export default Auth;
