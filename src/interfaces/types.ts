export interface PokemonInit {
    name: string;
    url: string;
}

export interface StateInit {
    pokemons: [],
    selectedPokemon: {},
    error: boolean,
    loading: boolean
}
