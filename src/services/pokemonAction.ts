import React from 'react';
import * as api from '../api/api.client';
import { FETCH_ALL, FETCH_BY_NAME, FETCH_BY_ID, CLEAR_POKEMON_FROM_API, CREATE_GET_BY_NAME_ERROR, CREATE_GET_BY_ID_ERROR, CLEAR_ERRORS } from '../constants/actionTypes';
import { PokemonInit } from '../interfaces/types';

export const getAll = async (dispatch: React.Dispatch<{}>, limit: number, offset = 0) => {
    try {
        const { data } = await api.fetchAll(limit, offset);
        const promises = data.results.map(async (pokemon: PokemonInit) => {
            return await getPokemonDataByUrl(pokemon.url);
        });
        const pokemonData = await Promise.all(promises);
        dispatch({ type: FETCH_ALL, payload: pokemonData });
    } catch (error) {
        console.log(error);
    }
};

export const getPokemonDataByUrl = async (url: string) => {
    try {
        const { data } = await api.fetchByUrl(url);
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const getPokemonCard = async (dispatch: React.Dispatch<{}>, pokemonName: string) => {
    try {
        const { data } = await api.fetchByName(pokemonName);
        dispatch({ type: FETCH_BY_NAME, payload: data });
    } catch (error) {
        dispatch(errorActionCreator(CREATE_GET_BY_NAME_ERROR, error));
        console.warn(error.message);
    }
};

export const getPokemonById = async (dispatch: React.Dispatch<{}>, id: number) => {
    try {
        const { data } = await api.fetchById(id);
        dispatch({ type: FETCH_BY_ID, payload: data });
    } catch (error) {
        console.log("AxiosError", typeof error);
        dispatch(errorActionCreator(CREATE_GET_BY_ID_ERROR, error));
        console.log(error.response.data);
    }
};

export const clearAllPokemons = (dispatch: React.Dispatch<{}>) => {
    dispatch({ type: CLEAR_POKEMON_FROM_API, payload: [] });
};

export const clearAllErrors = (dispatch: React.Dispatch<{}>) => {
    dispatch({ type: CLEAR_ERRORS });
};

function errorActionCreator(errorType : string, error:Error) {
    return { type: errorType, error: true, payload: error };
}

