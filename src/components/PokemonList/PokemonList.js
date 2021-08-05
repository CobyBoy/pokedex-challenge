import { useContext, useEffect} from 'react';
import PokemonContext from '../../context/PokemonContext/PokemonContext';
import PokemonCard from '../PokemonCard/PokemonCard';
import PokemonNotFound from '../PokemonPage/PokemonNotFound/PokemonNotFound';
import { Grid, Container, CircularProgress } from '@material-ui/core';
import { LIMIT, OFFSET } from '../../constants/constants';

const PokemonList = (props) => {
    const { filteredPokemons, pokemons, loading, getAll, dispatch, error,} = useContext(PokemonContext);

    useEffect(() => {
        getAll(dispatch, LIMIT, OFFSET);
        console.log('use effect list');
    }, []);

    return (
        <>Pokemon List
            { console.log('list', filteredPokemons) }
            { console.log('list error', error ? true : false) }
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
