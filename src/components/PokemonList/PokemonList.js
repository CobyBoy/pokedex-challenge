import { useContext, useEffect } from 'react';
import PokemonContext from '../../context/PokemonContext/PokemonContext';
import PokemonCard from '../PokemonCard/PokemonCard';
import PokemonNotFound from '../PokemonPage/PokemonNotFound/PokemonNotFound';
import { Grid, Container, CircularProgress } from '@material-ui/core';
import { LIMIT, OFFSET } from '../../constants/constants';

const PokemonList = (props) => {
    const { filteredPokemons, pokemons, loading, getAll, dispatch, error, setFilteredPokemons } = useContext(PokemonContext);

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
