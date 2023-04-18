import { ADD_FAVORITE, DELETE_FAVORITE, ORDER, FILTER } from './actionstypes';

export const filterCards = (gender) => {
    return {
        type: FILTER,
        payload: gender
    }
};

export const orderCards = (id) => {
    return {
        type: ORDER,
        payload: id
    }
};
export const addFavorite = (character) => {
    return {
        type: ADD_FAVORITE,
        payload: character
    }
};

export const deleteFavorite = (id) => {
    return {
        type: DELETE_FAVORITE,
        payload: id
    }
};