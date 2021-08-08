import React from 'react';
import { useReducer, useState, useEffect } from 'react';
import PokemonContext from './PokemonContext';
import PokemonReducer from './PokemonReducer';
import { PokemonInit, StateInit } from '../../interfaces/types';

const PokemonProvider = ({ children }: any) => {

    const initialState: StateInit = {
        pokemons: [],
        selectedPokemon: {},
        error: false,
        loading: true
    };
    const [state, dispatch] = useReducer(PokemonReducer, initialState);
    const [currentId, setCurrentId] = useState(null);
    const [searchingPokemon, setSearchingPokemon] = useState<string>('');
    const [filteredPokemons, setFilteredPokemons] = useState(initialState.pokemons);

    useEffect(() => {
        setFilteredPokemons(state.pokemons);
    }, [state.pokemons]);

    const filterPokemons = (nameToFilter: string) => {
        const results = state?.pokemons?.filter((pokemon: PokemonInit) => (
            pokemon?.name?.includes(nameToFilter)
        ));
        setFilteredPokemons(results);
    };
    return (
        <PokemonContext.Provider value={{
            pokemons: state.pokemons,
            selectedPokemon: state.selectedPokemon,
            error: state.error,
            loading: state.loading,
            currentId,
            searchingPokemon,
            filteredPokemons,
            dispatch, setCurrentId, setSearchingPokemon, filterPokemons, setFilteredPokemons
        }}>
            {children}
        </PokemonContext.Provider>
    );
};

export default PokemonProvider;