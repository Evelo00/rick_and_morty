import React from 'react';
import { Link } from 'react-router-dom';

// Finalmente dirígete al componente Card y pasále el id que recibes por props a la funcion onClose cuando se ejecuta.
function Card({ id, name, species, gender, image, onClose }) {
    function handleClick() {
        onClose(id);
    }
    return (
        <div>
            <img src={image} alt={name} />
            <Link to={`/detail/${id}`}>
                <h3 className='card-name'>{name}</h3>
            </Link>
            <p>
                {name} <br />
                {species} <br />
                {gender} <br />
            </p>
            <button onClick={handleClick}>X</button>
        </div>
    );
}

export default Card;