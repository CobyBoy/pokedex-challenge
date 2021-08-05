import { Link, useHistory  } from 'react-router-dom';
import { Button, Typography, Container } from '@material-ui/core';
import PokemonContext from '../../../context/PokemonContext/PokemonContext';
import { clearAllErrors, clearAllPokemons } from '../../../services';
import { useContext } from 'react';
import { LIMIT, OFFSET } from '../../../constants/constants';

const PokemonNotFound = () => {
    const { dispatch, setSearchingPokemon, searchingPokemon, error, getAll } = useContext(PokemonContext);
    let history = useHistory();
    const goBack = () => {
        clearAllErrors(dispatch);
        setSearchingPokemon('');
        getAll(dispatch, LIMIT, OFFSET);
        history.push('/');
        
    };
   
    return (
        <>{ console.log('not found error', error.errorMessage) }
            { console.log('not found pathname', history.location.pathname) }
            <Container>
                <Typography align='center'>{ searchingPokemon? `Pokemon with name ${searchingPokemon} Not Found`: `Pokemon with id ${history.location.pathname.slice(1)} not found` }</Typography>

                <Link to='/'>
                    <Button variant='contained' color='primary' onClick={  goBack }>Back from not found page</Button>
                </Link>
            </Container>
        </>
    );
};

export default PokemonNotFound;
