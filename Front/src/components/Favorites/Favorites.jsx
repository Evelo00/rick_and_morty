import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { orderCards, filterCards } from "../../redux/actions";
import { useDispatch } from "react-redux";


const Favorites = () => {
    const dispatch = useDispatch();
    const { myFavorites } = useSelector((state) => state);

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

            {myFavorites && myFavorites.length > 0 ? (
                myFavorites.map((character) => (
                    <div>
                        <img src={character.image} alt={character.name} />
                        <Link to={`/detail/${character.id}`}>
                            <h2 className='card-name'>{character.name}</h2>
                        </Link>
                        <p className='card-text'>
                            <div>
                                {character.species}
                            </div>
                            <div>
                                {character.gender}
                            </div>
                        </p>
                    </div>
                ))
            ) : (
                <h1>No hay personajes favoritos</h1>
            )}
        </div>
    );
}


export default Favorites;