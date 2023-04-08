import React from 'react';
import { login } from '../Validation/validation';
 import './Form.css';

const Form = ({ isAuth }) => {
    const [userData, setUserData] = React.useState({
        email: '',
        password: '',
    });

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value,
        });
    };
    //   En el componente Form crea una función "handleSubmit".Esta función recibe un evento por parámetro.Deberás ejecutas la función e.preventDefault().Luego ejecuta la función "login" recibida por props. ¡No te olvides de pasarle por parámetro tu estado local userData!

    const handleSubmit = (event) => {
        event.preventDefault();
        const { email, password } = userData;
        const isAuth = login(email, password);

        if (loginSuccess) {
            // Redirige al usuario a la página principal de la aplicación
            // Ejemplo: history.push('/home');
        } else {
            // Muestra un mensaje de error al usuario
            setError('Email o contraseña incorrectos');
        }
    };


    const [error, setError] = React.useState('');


    return (           
            <form className='form-box' onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input className='inputForm'
                    type="email"
                    name="email"
                    id="email"
                    value={userData.email}
                    onChange={handleChange}
                />
                <label htmlFor="password">Password</label>
                <input className='inputForm'
                    type="password"
                    name="password"
                    id="password"
                    value={userData.password}
                    onChange={handleChange}
                />
                <button className='form-button' type="submit">Submit</button>
                {error && <p>{error}</p>}
            </form>
    );
}

export default Form;