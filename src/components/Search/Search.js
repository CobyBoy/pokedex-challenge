import { AppBar, InputBase, Paper } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import { useContext } from 'react';
import PokemonContext from '../../context/PokemonContext/PokemonContext';
import { getAll } from '../../services/pokemonAction';
import { LIMIT, OFFSET } from '../../constants/constants';
import { formatToLowerCase } from '../../utils/PokemonNameFormatter.utils';
import useStyles from './styles';

const Search = ({ history }) => {
    const { searchingPokemon, dispatch, filterPokemons, setFilteredPokemons, setSearchingPokemon, pokemons } = useContext(PokemonContext);
    const classes = useStyles();

    const onSearch = (e) => {
        console.log(e);
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
            <AppBar position='static' className={ classes.appBar } >
                <Paper className={ classes.paper } >

                    <InputBase className={ classes.input } placeholder='Search Pokemon' inputProps={ { 'aria-label': 'Search Pokemon' } }
                        value={ searchingPokemon } onChange={ (e) => { handleChange(e); } } autoFocus={ true } onKeyPress={ (e) => { onSearch(e); } } />
                    <IconButton onClick={ (e) => { onSearch(e); } }>
                        <SearchIcon style={ { color: 'black' } } />
                    </IconButton>
                </Paper>

            </AppBar>

        </>
    );
};

export default Search;
