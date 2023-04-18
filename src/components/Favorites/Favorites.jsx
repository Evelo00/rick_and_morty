import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { orderCards, filterCards } from "../../redux/actions";
import "./Favorites.css";



const Favorites = () => {
    const dispatch = useDispatch();
    const { myFavorites } = useSelector((state) => state);

    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value))
    }

    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value))
    }




    return (
        <div className="favorites">
            <>
                <h1 className="favorites-title">My Favorites</h1>
                <div className="favorites-container">
                    <select onChange={handleOrder} className="select">
                        <option className="option" value="order" disabled='disabled'>Order By</option>
                        <option className="option" value="Ascendente">Ascendente</option>
                        <option className="option" value="Descendente">Descendente</option>
                    </select>
                    <select onChange={handleFilter} className="select">
                        <option className="option" value="filter" disabled='disabled'>Filter By</option>
                        <option className="option" value="Male">Male</option>
                        <option className="option" value="Female">Female</option>
                        <option className="option" value="unknown">unknown</option>
                        <option className="option" value="Genderless">Genderless</option>
                    </select>
                </div>
            </>
            <div className="cards">
                {myFavorites && myFavorites.length > 0 ? (
                    myFavorites.map((character) => (

                        <div className="card-container">
                            <img src={character.image} alt={character.name} />
                            <Link className='card-link' to={`/detail/${character.id}`}>
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
                    <h1 className="favorites-title">No hay personajes favoritos</h1>
                )}
            </div>
        </div>
    );
}


export default Favorites;