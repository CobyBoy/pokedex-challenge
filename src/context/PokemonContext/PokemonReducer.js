import { FETCH_ALL, FETCH_BY_NAME, FETCH_BY_ID, CLEAR_POKEMON_FROM_API, CREATE_GET_BY_NAME_ERROR, CREATE_GET_BY_ID_ERROR, CLEAR_ERRORS, } from '../../constants/actionTypes';

const PokemonReducer = (pokemonsState = [], action) => {
    const { type, payload } = action;
    switch (type) {
        case FETCH_ALL:
            console.log('action', action);
            console.log('pokemonsInit', pokemonsState);
            return { ...pokemonsState, pokemons: payload };
        
        case FETCH_BY_NAME:
            const newPoke = [];

            if (payload.length === 0) {
                return { pokemons: payload };
            }
            else {
                newPoke.push(payload);
            }

            console.log('newPoke', newPoke);
            console.log('pokemonsInit', pokemonsState);
            return { pokemons: newPoke, error: null };
        
        case FETCH_BY_ID:
            const pokeId = [];
            console.log('action', action);
            console.log('pokemonsInit', pokemonsState);
            pokeId.push(payload);
            console.log('new to retunr', pokeId);
            return { ...pokemonsState, pokemons: pokeId, error: null };
        
        case CLEAR_POKEMON_FROM_API:
            console.log('clearing pokemons');
            console.log('clearing pokemons pokemons', action);
            console.log('clearing pokemons pokemonsState', pokemonsState);
            return { ...pokemonsState, pokemons: [], error: null};
        
        case CREATE_GET_BY_NAME_ERROR:
        case CREATE_GET_BY_ID_ERROR:
            return { ...errorReducer(pokemonsState, action), isLoading: false };
        
        case CLEAR_ERRORS:
            console.log('clearing errirs', pokemonsState);
            console.log('clearing errirs', action);
            return { ...pokemonsState, pokemons: [], error: null };
        
        default:
            return pokemonsState;
    }
};

export default PokemonReducer;
const errorReducer = (state, action) => {
    console.log('error reducer state', state);
    console.log('error reducer action', action);
    if (!action.error) {
        return { ...state, error: null };
    }

    return { ...state, error: { errorMessage: action.type, ...action.payload.response.data } };
};

