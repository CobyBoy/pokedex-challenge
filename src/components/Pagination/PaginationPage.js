import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { Box, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { formatIdUtils } from '../../utils/PokemonIdFormatter.utils';
import { useContext } from 'react';
import PokemonContext from '../../context/PokemonContext/PokemonContext';

const PaginationPage = ({ page }) => {
    let history = useHistory();
    const { searchingPokemon, setSearchingPokemon } = useContext(PokemonContext);
    const nextPage = page + 1;
    const previousPage = page - 1;

    const pageClicking = (pageId) => {
        if (searchingPokemon !== '') setSearchingPokemon('');
        history.push(`/${pageId}`);
    };

    return (
        <>
            <Box style={ { display: 'flex', justifyContent: 'space-between', margin: '1em' } }>
                <Button variant="contained" startIcon={ <NavigateBeforeIcon /> } disabled={ previousPage === 0 || !Number.isInteger(page) } onClick={ () => pageClicking(previousPage) }>{ formatIdUtils(previousPage) }</Button>
                <Button variant="contained" endIcon={ <NavigateNextIcon /> } disabled={ !Number.isInteger(page) } onClick={ () => pageClicking(nextPage) }>{ formatIdUtils(nextPage) }</Button>
            </Box>
        </>
    );
};

export default PaginationPage;
