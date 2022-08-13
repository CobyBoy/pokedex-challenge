export enum ActionType {
    FETCH_ALL = 'FETCH_ALL',
    FETCH_BY_NAME = 'FETCH_BY_NAME',
    FETCH_BY_ID = 'FETCH_BY_ID',
    CLEAR_POKEMON_FROM_API = 'CLEAR_POKEMON_FROM_API',
    CREATE_GET_BY_NAME_ERROR = 'CREATE_GET_BY_NAME_ERROR',
    CREATE_GET_BY_ID_ERROR = 'CREATE_GET_BY_ID_ERROR',
    CLEAR_ERRORS = 'CLEAR_ERRORS'
}

export interface GetAll {
    type: ActionType.FETCH_ALL,
    payload: Payload;
    error: boolean;
};

export interface SetPokemonProfileByName {
    type: ActionType.FETCH_BY_NAME,
    payload: Payload,
    error: boolean;
}

export interface SetPokemonProfileById {
    type: ActionType.FETCH_BY_ID,
    payload: Payload,
    error: boolean;
}

export interface ResetPokemons {
    type: ActionType.CLEAR_POKEMON_FROM_API,
    payload: Payload,
    error: boolean;
}

export interface GetByNameError {
    type: ActionType.CREATE_GET_BY_NAME_ERROR,
    error: boolean,
    payload: Error;
}
export interface ResetErrors {
    type: ActionType.CLEAR_ERRORS,
    error: Error;
    payload: Payload;
}
export interface GetByIdError {
    type: ActionType.CREATE_GET_BY_ID_ERROR,
    error: boolean,
    payload: Error;
}

export interface Payload {
    response: '';
}

export type PokemonActions = GetAll | SetPokemonProfileByName | SetPokemonProfileById | ResetPokemons | GetByNameError | GetByIdError | ResetErrors;