import { ADD_FAVORITE, DELETE_FAVORITE, ORDER, FILTER} from './actionstypes';

export const filterCards = (gender) => {
    return {
        type: FILTER,
        payload: gender
    }
};

export const orderCards = (orden) => {
 return {
        type: ORDER,
        payload: orden
    }
};
export const addFavorite = (payload) => {
    return { type: ADD_FAVORITE, payload: payload }
};

export const deleteFavorite = (id) => {
    return {
        type: DELETE_FAVORITE,
        payload: id
    }
};