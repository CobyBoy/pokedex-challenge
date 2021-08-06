import { useReducer, useState, useEffect } from 'react';
import PokemonContext from './PokemonContext';
import PokemonReducer from './PokemonReducer';
import { getAll, getPokemonCard } from '../../services/index';
import { LIMIT, OFFSET } from '../../constants/constants';

const PokemonProvider = ({ children }) => {


    const initialState = {
        pokemons: [],
        selectedPokemon: {},
        error: null,
        loading: true
    };
    const [state, dispatch] = useReducer(PokemonReducer, initialState);
    const [currentId, setCurrentId] = useState(null);
    const [searchingPokemon, setSearchingPokemon] = useState('');
    const [filteredPokemons, setFilteredPokemons] = useState(initialState.pokemons);

    useEffect(() => {
        setFilteredPokemons(state.pokemons);
    }, [state.loading, state.pokemons]);

    const filterPokemons = (nameToFilter) => {
        const results = state?.pokemons?.filter((pokemon) => (
            pokemon?.name?.includes(nameToFilter)
        ));
        setFilteredPokemons(results);
    };

    const handleChange = (e) => {
        if (e.target.value === '') {
            setFilteredPokemons(state.pokemons);
        }
        setSearchingPokemon(e.target.value);
        filterPokemons(e.target.value);
    };

    return (
        <PokemonContext.Provider value={ {
            pokemons: state.pokemons,
            selectedPokemon: state.selectedPokemon,
            error: state.error,
            loading: state.loading,
            currentId,
            searchingPokemon,
            filteredPokemons,
            getAll, dispatch, setCurrentId, handleChange, setSearchingPokemon, setFilteredPokemons
        } }>
            { children }
        </PokemonContext.Provider>
    );
};

export default PokemonProvider;