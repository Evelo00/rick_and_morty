import Card from '../Card/Card';
import './Cards.css';



function Cards({ characters, onClose }) {
    return <div className="cards-container">
        {characters.map((character) => (
            <Card
                key={character.id}
                id={character.id}
                name={character.name}
                age={character.age}
                gender={character.gender}
                image={character.image}
                species={character.species}
                location={character.location.name}
                origin={character.origin.name}
                onClose={onClose}
            />
        ))}
    </div>;
}


export default Cards;   