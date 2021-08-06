import { FETCH_ALL, FETCH_BY_NAME, FETCH_BY_ID, CLEAR_POKEMON_FROM_API, CREATE_GET_BY_NAME_ERROR, CREATE_GET_BY_ID_ERROR, CLEAR_ERRORS, } from '../../constants/actionTypes';

const PokemonReducer = (pokemonsState = [], action) => {
    const { type, payload } = action;
    switch (type) {
        case FETCH_ALL:

            return { ...pokemonsState, loading: false, pokemons: payload };
        
        case FETCH_BY_NAME:
    
            return { ...pokemonsState, selectedPokemon: payload, error: null, loading: false };
        
        case FETCH_BY_ID:

            return { ...pokemonsState, selectedPokemon: payload, error: null, loading: false };
        
        case CLEAR_POKEMON_FROM_API:

            return { ...pokemonsState, pokemons: payload, error: null, loading: true};

        case CREATE_GET_BY_NAME_ERROR:
        case CREATE_GET_BY_ID_ERROR:
            return { ...errorReducer(pokemonsState, action), isLoading: false };
        
        case CLEAR_ERRORS:
            
            return { ...pokemonsState, pokemons: [], error: null };
        
        default:
            return pokemonsState;
    }
};

export default PokemonReducer;
const errorReducer = (state, action) => {
    if (!action.error) {
        return { ...state, error: null };
    }

    return { ...state, error: { errorMessage: action.type, ...action.payload.response.data } };
};

