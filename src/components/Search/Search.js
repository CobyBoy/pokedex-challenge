import { AppBar, InputBase, Paper} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import { useContext } from 'react';
import PokemonContext from '../../context/PokemonContext/PokemonContext';
import { getAll } from '../../services';
import { LIMIT, OFFSET } from '../../constants/constants';
import { getPokemonCard } from '../../services';
import { formatToLowerCase } from '../../utils/PokemonNameFormatter.utils';
import useStyles from './styles';

const Search = (props) => {
    const { searchingPokemon, handleChange, dispatch } = useContext(PokemonContext);
    const { history } = props;
    const classes = useStyles();

    const onSearch = () => {
        if (searchingPokemon === '') {
            getAll(dispatch, LIMIT, OFFSET);
        }
        searchPokemon(formatToLowerCase(searchingPokemon));
    };

    const searchPokemon = async (pokemonName) => {
        history.push(`${pokemonName}`);
    };


    return (
        < >
            <AppBar position='static' className={classes.appBar} >
                <Paper className={classes.paper} >
                    <InputBase className={classes.input} placeholder='Search Pokemon' inputProps={ { 'aria-label': 'Search Pokemon' } }
                        value={ searchingPokemon } onChange={ handleChange } autoFocus={ true }/>
                    <IconButton onClick={()=>{onSearch();}}>
                        <SearchIcon style={ { color: 'black' } } />
                    </IconButton>
                </Paper>
                
            </AppBar>

        </>
    );
};

export default Search;
