import { AppBar, InputBase, Paper} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import { useContext } from 'react';
import PokemonContext from '../../context/PokemonContext/PokemonContext';
import { getAll } from '../../services';
import { LIMIT, OFFSET } from '../../constants/constants';
import { getPokemonCard } from '../../services';

const Search = (props) => {
    const { searchingPokemon, handleChange, dispatch } = useContext(PokemonContext);

    const onSearch = () => {
        console.log('searhinc');
        if (searchingPokemon === '') {
            getAll(dispatch, LIMIT, OFFSET);
        }
        searchPokemon(searchingPokemon);
    };

    const searchPokemon = async (pokemonName) => {
        pokemonName ? await getPokemonCard(dispatch, pokemonName) : getAll(dispatch, LIMIT, OFFSET);
    };


    return (
        < >
            { console.log('searchingPokemon de searchingPokemon', searchingPokemon) }
            <AppBar position='static' style={ { padding: 20, alignItems: 'center', } }>
                <Paper style={ { padding: 20, display: 'flex', alignItems: 'center', width:'40%', height:'1em'} }>
                    <InputBase style={ { background: 'white', width: '100%', fontSize:'1em' } } placeholder='Search Pokemon' inputProps={ { 'aria-label': 'Search Pokemon' } }
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
