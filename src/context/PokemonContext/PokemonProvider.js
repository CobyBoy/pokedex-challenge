import { useReducer, useState, useEffect } from 'react';
import PokemonContext from './PokemonContext';
import PokemonReducer from './PokemonReducer';
import { getAll, getPokemonCard } from '../../services/index';
import { LIMIT, OFFSET } from '../../constants/constants';

const PokemonProvider = ({ children }) => {


    const initialState = {
        pokemons: [],
        error: null,
    };
    const [state, dispatch] = useReducer(PokemonReducer, initialState);
    const [loading, setLoading] = useState(true);
    const [currentId, setCurrentId] = useState(null);
    const [searchingPokemon, setSearchingPokemon] = useState('');
    const [filteredPokemons, setFilteredPokemons] = useState(state.pokemons);

    useEffect(() => {
        console.log('INIT USE EFFECT', state.pokemons);
        setFilteredPokemons(state.pokemons);
    });

    const filterPokemons = (nameToFilter) => {
        console.log('filter name',nameToFilter);
        const results = state?.pokemons?.filter((pokemon) => (
            pokemon?.name?.includes(nameToFilter)
        ));
        console.log('filtering', state.pokemons);
        console.log('filtering results', results);
        setFilteredPokemons(results);
    };

    const handleChange = (e) => {
        console.log('handlng change');
        if (e.target.value === '') {
            getAll(dispatch, LIMIT);
            setFilteredPokemons(state.pokemons);
        }
        setSearchingPokemon(e.target.value);
        filterPokemons(e.target.value);
    };

    return (
        <PokemonContext.Provider value={ {
            pokemons: state.pokemons,
            error: state.error,
            currentId,
            searchingPokemon,
            filteredPokemons,
            loading,
            getAll, dispatch, setCurrentId, handleChange, setSearchingPokemon, setFilteredPokemons
        } }>
            { children }
        </PokemonContext.Provider>
    );
};

export default PokemonProvider;