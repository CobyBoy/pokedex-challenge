 import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { Box, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { formatIdUtils } from '../../utils/PokemonIdFormatter.utils';
import { useContext, Fragment } from 'react';
import PokemonContext from '../../context/PokemonContext/PokemonContext';
import useStyles from './styles';

interface PageProp {
    page: number
}

const PaginationPage: React.FC<PageProp> = ({ page }: PageProp) => {
    let history = useHistory();
    const classes = useStyles();
    const { searchingPokemon, setSearchingPokemon } = useContext(PokemonContext);
    const nextPage = page + 1;
    const previousPage = page - 1;

    const pageClicking = (pageId : number) => {
        if (searchingPokemon !== '') setSearchingPokemon('');
        history.push(`/${pageId}`);
    };

    return (
        <Fragment>
            <Box className={classes.box}>
                <Button variant="contained" startIcon={ <NavigateBeforeIcon /> } disabled={ previousPage === 0 || !Number.isInteger(page) } onClick={ () => pageClicking(previousPage) }>{ formatIdUtils(previousPage) }</Button>
                <Button variant="contained" endIcon={ <NavigateNextIcon /> } disabled={ !Number.isInteger(page) } onClick={ () => pageClicking(nextPage) }>{ formatIdUtils(nextPage) }</Button>
            </Box>
        </Fragment>
    );
};

export default PaginationPage;
