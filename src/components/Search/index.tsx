import { AppBar, InputBase, Paper } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import useStyles from './styles';
import { SearchProps } from '../../interfaces/types';

const Search: React.FC<SearchProps> = ({ searchingPokemon, handleChange, onSearch }: SearchProps) => {
    const classes = useStyles();
    return (
        <>
            <AppBar position='static' className={classes.appBar} >
                <Paper className={classes.paper} >
                    <InputBase className={classes.input} placeholder='Search Pokemon' inputProps={{ 'aria-label': 'Search Pokemon' }}
                        value={searchingPokemon} onChange={(e) => { handleChange(e); }} autoFocus={true} onKeyPress={(e) => { onSearch(e); }} />
                    <IconButton onClick={(e) => { onSearch(e); }}>
                        <SearchIcon style={{ color: 'black' }} />
                    </IconButton>
                </Paper>

            </AppBar>

        </>
    );
};

export default Search;
