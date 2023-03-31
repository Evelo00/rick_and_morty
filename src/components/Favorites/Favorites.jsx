import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";
import { orderCards, filterCards } from "../../redux/actions";
import { useDispatch } from "react-redux";
import Card from '../Card';

const Favorites = () => {
    const dispatch = useDispatch();
    const { myFavorites } = useSelector((state) => state.favorites) || {};

    let aux = false;
    const handleOrder = (e) => {
        aux = !aux;
        dispatch(orderCards(e.target.value))
    }

    const handleFilter = (e) => {
        dispatch(filterCards(e.target.value))
    }




    return (
        <div className="favorites">
            
            <h1 className="favorites-title">My Favorites</h1>
            <select onChange={handleOrder}>
            <option value="A">Ascendente</option>
            <option value="D">Descendente</option>
            </select>
            <select onChange={handleFilter}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">unknown</option>
            </select>

            {myFavorites.map(character => {
                < Card 
                    key={character.id}
                    id={character.id}
                    name={character.name}
                    age={character.age}
                    gender={character.gender}
                    image={character.image}
                    species={character.species}
                    location={character.location}
                    origin={character.origin}
                    // onClose={onClose}
                    />
            })
                
                //     return (
                //         <div key={character.id}>
                //             <img src={character.image} alt={character.name} />
                //             <Link to={`/detail/${character.id}`}>
                //                 <h2 className='card-name'>{character.name}</h2>
                //             </Link>
                //             <p>
                //                 <h2> {character.species} <br /></h2> 
                //                 <h2>{character.gender} <br /></h2> 
                //             </p>
                //         </div>
                //     )
                // })
    // ) : ( <h1> No hay personajes favoritos </h1>)

            }
            
        </div>
    )
}


export default Favorites;