import { ADD_FAVORITE, DELETE_FAVORITE, FILTER, ORDER } from "./actionstypes";

const initialState = {
    myFavorites: [],
    allCharacters: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAVORITE:
            return {
                ...state,
                myFavorites: [...state.myFavorites, action.payload],
                allCharacters: [...state.allCharacters, action.payload],
            };
        case DELETE_FAVORITE:
            return {
                ...state,
                myFavorites: state.myFavorites.filter(item => item.id !== action.payload),
            };
        case FILTER:
            // const { allCharacters } = state;
            const filteredCharacters = state.allCharacters.filter(character => character.gender === action.payload);
            return {
                ...state,
                myFavorites: filteredCharacters,
            };
        case ORDER:
            return {
                ...state,
                myFavorites:
                    action.payload === 'Ascendente'
                        ? state.allCharacters.sort((a, b) => a.id - b.id)
                        : state.allCharacters.sort((a, b) => b.id - a.id),
            };

        default:
            return state;
    }
};

export default reducer;
