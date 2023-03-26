import React from "react";
import axios from "axios";
import { useParams} from "react-router-dom";
import { useState, useEffect } from "react";

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



    return <div>
        {character.name && <p>Name: {character.name}</p>}
        {character.status && <p>Status: {character.status}</p>}
        {character.species && <p>Species: {character.species}</p>}
        {character.gender && <p>Gender: {character.gender}</p>}
        {character.origin && character.origin.name && (
            <p>Origin: {character.origin.name}</p>
        )}
        {character.image && <img src={character.image} alt={character.name} />}
    </div>;
    };


export default Detail;