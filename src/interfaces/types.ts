export interface PokemonInit {
    name: string;
    url: string;
}

export interface StateInit {
    pokemons: [],
    selectedPokemon: {},
    error: boolean,
    loading: boolean;
}

export interface SearchProps {
    searchingPokemon: string,
    handleChange: (e: React.ChangeEvent) => void,
    onSearch: (e: React.MouseEvent | React.KeyboardEvent) => void;
}

export interface ProfileProps{
    error: boolean,
    loading: boolean
    selectedPokemon: SelectedPokemon,
    goBack: (e: React.MouseEvent ) => void
}

export interface SelectedPokemon {
    abilities: Array<typeOfAbility>,
    name: string,
    types: Array<typeOfTypes>,
    height: number,
    id: number,
    weight: number,
    sprites: SpritesOther
}

export interface typeOfTypes {
    type: {name: string}
}

export interface typeOfAbility {
    ability: {name: string}
}

export interface SpritesOther {
    other: OtherOfficial
}

export interface OtherOfficial {
    "official-artwork": { front_default: string},
}