import { ADD_FAVORITE, DELETE_FAVORITE} from "./actionstypes";

const initialState = {
    myFavorites: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAVORITE:
            return {
                ...state,
                myFavorites: [...state.myFavorites, action.payload],
                // allCharacters: [...state.allCharacters, action.payload],
            };
        case DELETE_FAVORITE:
            return {
                ...state,
                myFavorites: state.myFavorites.filter(item => item.id !== action.payload),
            };
        // case FILTER:
        //     const filteredCharacters = state.allCharacters.filter(character => character.gender === action.payload);
        //     return {
        //         ...state,
        //         myFavorites: filteredCharacters,
        //     };
        // case ORDER:
        //     const orderedCharacters = [...state.allCharacters];
        //     if (action.payload === 'A') {
        //         orderedCharacters.sort((a, b) => a.id - b.id);
        //     } else if (action.payload === 'D') {
        //         orderedCharacters.sort((a, b) => b.id - a.id);
        //     }
        //     return {
        //         ...state,
        //         myFavorites: orderedCharacters,
        //     };
        default:
            return { ...state }
    }
};

export default reducer;
