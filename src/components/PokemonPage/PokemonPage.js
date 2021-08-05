import { Box, Button, CircularProgress, Container, Card, Typography, CardMedia, CardContent, CardActions } from '@material-ui/core';
import { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PokemonContext from '../../context/PokemonContext/PokemonContext';
import PokemonNotFound from '../PokemonPage/PokemonNotFound/PokemonNotFound';
import PokemonProfile from '../PokemonPage/PokemonProfile/PokemonProfile.js';
import { clearAllPokemons, getPokemonById } from '../../services';

const PokemonPage = (props) => {
    const { match } = props;
    const { params } = match;
    let history = useHistory();
    const { pokemons, dispatch, setSearchingPokemon, loading, error, currentId } = useContext(PokemonContext);

    const goBack = (e) => {
        history.push('/');
        setSearchingPokemon('');
        clearAllPokemons(dispatch);
    };
    useEffect(() => {
        console.log('currentId', currentId);
        getPokemonById(dispatch, params.id);
        console.log('poke page use effect');
    }, [params.id]);

    return (
        <>
            { console.log('poke page pokemons', pokemons) }
            { console.log('poke page error', error) }
            Pokemon Page
            { error ? <PokemonNotFound /> : !pokemons?.length && loading ? <CircularProgress /> :
                <>
                    { pokemons.map((pokemon) => (
                        <PokemonProfile key={ currentId } pokemon={ pokemon } />
                    )) }
                    <Box style={{display:'flex', justifyContent:'center', margin:'1em'}}>
                        <Button variant='contained' color='primary' onClick={ () => { goBack(); } }>Back from pokemon page</Button>
                    </Box>
                </>
            }
            


        </>
    );
};

export default PokemonPage;
