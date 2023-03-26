import React from 'react';
import { login } from './validation';

const Form = () => {
    const [userData, setUserData] = React.useState({
        email: '',
        password: '',
    });
    const handleChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value,
        });
    };
    //   En el componente Form crea una función "handleSubmit".Esta función recibe un evento por parámetro.Deberás ejecutas la función e.preventDefault().Luego ejecuta la función "login" recibida por props. ¡No te olvides de pasarle por parámetro tu estado local userData!
    
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    

    const [error, setError] = React.useState({});


    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
            <button type="submit">Submit</button>
        </form>
    );
}

export default Form;