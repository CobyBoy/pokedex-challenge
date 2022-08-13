import { useContext } from 'react';
import PokemonContext from '../../context/PokemonContext/PokemonContext';
import { getAll } from '../../services/pokemonAction';
import { LIMIT, OFFSET } from '../../constants/constants';
import { formatToLowerCase } from '../../utils/PokemonNameFormatter.utils';
import Search from '.';

const SearchContainer = ({ history }) => {
    const { searchingPokemon, dispatch, filterPokemons, setFilteredPokemons, setSearchingPokemon, pokemons } = useContext(PokemonContext);

    const onSearch = (e) => {
        if (e.key === 'Enter' || e.type === 'click') {
            if (searchingPokemon === '') {
                getAll(dispatch, LIMIT, OFFSET);
            }
            searchPokemon(formatToLowerCase(searchingPokemon));
        }
    };

    const handleChange = (e) => {
        if (e.target.value === '') {
            setFilteredPokemons(pokemons);
        }
        setSearchingPokemon(e.target.value);
        filterPokemons(e.target.value);
    };

    const searchPokemon = async (pokemonName) => {
        history.push(`${pokemonName}`);
    };

    return (
        < >
            <Search searchingPokemon={ searchingPokemon } handleChange={ handleChange } onSearch={ onSearch }></Search>
        </>
    );
};

export default SearchContainer;
