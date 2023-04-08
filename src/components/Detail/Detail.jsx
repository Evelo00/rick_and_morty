import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Detail.css";

// Ahora en el estado local character ya tenemos disponible toda la información que necesitamos de nuestro personaje.Por lo que:

// Renderiza condicionalmente cada una de estas propiedades.
//     name
// status
// species
// gender
// origin(ten en cuenta que el nombre se guarda dentro de otra propiedad "name")
// image

const Detail = () => {
    const [character, setCharacter] = useState([]);

    const { id } = useParams();
    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
            if (data.name) {
                setCharacter(data);
            } else {
                window.alert('No hay personajes con ese ID');
            }
        });
        return setCharacter({});
    }, [id]);



    return <div className="character-info">
        <div className="character-image-container">
            {character.image && <img className="character-image" src={character.image} alt={character.name} />}
        </div>
        <div className="character-info-container">

            {character.name && <p className="characters">Name: {character.name}</p>}
            {character.species && <p className="characters">Species: {character.species}</p>}
            {character.gender && <p className="characters">Gender: {character.gender}</p>}
            {character.status && <p className="characters">Status: {character.status}</p>}
            {character.origin && character.origin.name && (
                <p className="characters">Origin: {character.origin.name}</p>
                )}
        </div>
        </div>
};


export default Detail;