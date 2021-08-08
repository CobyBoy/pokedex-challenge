import { useContext, useEffect } from 'react';
import PokemonContext from '../../context/PokemonContext/PokemonContext';
import PokemonCard from '../PokemonCard/PokemonCard';
import PokemonNotFound from '../PokemonPage/PokemonNotFound/PokemonNotFound';
import { Grid, Container, CircularProgress } from '@material-ui/core';
import { LIMIT, OFFSET } from '../../constants/constants';
import { getAll } from '../../services/pokemonAction';

const PokemonList = (props) => {
    const { filteredPokemons, loading, dispatch, error } = useContext(PokemonContext);

    useEffect(() => {
        getAll(dispatch, LIMIT, OFFSET);
    }, []);

    return (
        <>
            <Container>
                <Grid container alignItems='stretch' justifyContent='center'>
                    { error ? <PokemonNotFound /> : !filteredPokemons?.length && loading ? <CircularProgress /> :
                        filteredPokemons.map((pokemon, idx) => (
                            <Grid item key={ idx }>
                                <PokemonCard pokemon={ pokemon } props={ props } />
                            </Grid>
                        ))
                    }
                </Grid>
            </Container>
        </>
    );
};

export default PokemonList;
