import { useHistory } from 'react-router-dom';
import { Button, Typography, Container, Box, Card } from '@material-ui/core';
import PokemonContext from '../../../context/PokemonContext/PokemonContext';
import { clearAllErrors } from '../../../services/pokemonAction';
import { useContext } from 'react';
import { LIMIT, OFFSET } from '../../../constants/constants';
import useStyles from './styles';

const PokemonNotFound = () => {
    const { dispatch, setSearchingPokemon, searchingPokemon } = useContext(PokemonContext);
    let history = useHistory();
    const classes = useStyles();
    
    const goBack = () => {
        clearAllErrors(dispatch);
        setSearchingPokemon('');
        history.push('/');

    };

    return (
        <>
            <Container>
                <Card>
                    <Typography align='center'>{ searchingPokemon ? `Pokemon with name ${searchingPokemon} Not Found` : `Pokemon with id ${history.location.pathname.slice(1)} not found` }</Typography>
                </Card>

                <Box className={ classes.box }>
                    <Button variant='contained' color='primary' onClick={ goBack }>Back from not found page</Button>
                </Box>
            </Container>
        </>
    );
};

export default PokemonNotFound;
