import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import { useState, useEffect} from 'react';
import { addFavorite, deleteFavorite } from '../../redux/actions';
import './Card.css';


// Finalmente dirígete al componente Card y pasále el id que recibes por props a la funcion onClose cuando se ejecuta.
function Card({ id, name, species, gender, image, onClose, location, origin, age }) {
    const dispatch = useDispatch();
    const [isFav, setIsFav] = useState(false);
    const myFavorites = useSelector((state) => state.myFavorites);

    const handleFavorite = () => {
        if (isFav) {
            setIsFav(false)
            dispatch(deleteFavorite(id))
        }
        else {
            setIsFav(true)
            dispatch(addFavorite({ id, name, species, gender, image, location, origin, age }))
        }
    }

    useEffect(() => {
        myFavorites.forEach((fav) => {
            if (fav.id === id) {
                setIsFav(true);
            }
        })
}, [myFavorites, id])


    const handleClick = () => {
        onClose(id);
    }

    return (
        <div className="card-container">
            <div className="card-buttons">
            {
                isFav ? (
                    <button onClick={handleFavorite}>❤️</button>
                ) : (
                    <button onClick={handleFavorite}>🤍</button>
                )
            }
            <button onClick={handleClick}>X</button>
            </div>
            <img src={image} alt={name} />
            <Link className='card-link' to={`/detail/${id}`}>
                <h2 className='card-name'>{name}</h2>
            </Link>
            <p className='card-text'>
                <div>
                {species}
                </div>
                <div>
                {gender}
                </div>
            </p>
        </div>
    );
}

export default Card;