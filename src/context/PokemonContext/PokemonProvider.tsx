import { useReducer, useState, useEffect, Props, PropsWithChildren, } from 'react';
import React from 'react';
import PokemonContext from './PokemonContext';
import PokemonReducer from './PokemonReducer';
import { getAll, getPokemonCard } from '../../services/index';
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
    }, [state.loading, state.pokemons]);

    const filterPokemons = (nameToFilter: string) => {
        const results = state?.pokemons?.filter((pokemon: PokemonInit) => (
            pokemon?.name?.includes(nameToFilter)
        ));
        setFilteredPokemons(results);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value === '') {
            setFilteredPokemons(state.pokemons);
        }
        setSearchingPokemon(e.target.value);
        filterPokemons(e.target.value);
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
            getAll, dispatch, setCurrentId, handleChange, setSearchingPokemon, setFilteredPokemons
        }}>
            {children}
        </PokemonContext.Provider>
    );
};

export default PokemonProvider;