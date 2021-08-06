import { Box, Button, Container, Card, CardMedia, CardContent, CircularProgress, Typography, Paper } from '@material-ui/core';
import { TYPE_COLORS } from '../../../constants/PokemonColorTypes';
import Pagination from '../../Pagination/PaginationPage';
import { formatIdUtils } from '../../../utils/PokemonIdFormatter.utils';
import { capitalizeFirstLetterUtils } from '../../../utils/PokemonNameFormatter.utils';
import { formatToMetricSystem } from '../../../utils/HeightAndWeightFormatter.utils';
import { convertKgToPounds } from '../../../utils/HeightAndWeightFormatter.utils';
import { convertToFeetAndInches } from '../../../utils/HeightAndWeightFormatter.utils';
import { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { clearAllPokemons, getPokemonById } from '../../../services';
import PokemonContext from '../../../context/PokemonContext/PokemonContext';
import PokemonNotFound from '../PokemonNotFound/PokemonNotFound';

const PokemonProfile = (props) => {
    const { pokemons, dispatch, setSearchingPokemon, loading, error, selectedPokemon } = useContext(PokemonContext);
    let history = useHistory();
    const { match } = props;
    const { params } = match;
    const { abilities, name, types, height, id, weight, sprites } = selectedPokemon ?? {};
    const { other } = sprites ?? {};
    const { ['official-artwork']: official } = other ?? {};
    const [imageLoading, setImageLoading] = useState(true);


    useEffect(() => {
        getPokemonById(dispatch, params.id);
        setImageLoading(false);
    }, [params.id]);

    const goBack = (e) => {
        history.push('/');
        setSearchingPokemon('');
    };

    return (
        <>
            <Pagination page={ id }></Pagination>
            {
                error ? <PokemonNotFound></PokemonNotFound> :
                    <Container maxWidth="sm">
                        { !loading &&
                            <Card>
                                { imageLoading ? <CircularProgress /> : <CardMedia style={ { height: 100, width: 100, padding: '2%', margin: 'auto', display: !imageLoading ? 'block' : 'none' } }
                                    image={ official?.front_default } title={ name } /> }

                                <Typography variant='h4' style={ { textAlign: 'center' } }>{ capitalizeFirstLetterUtils(name) } { formatIdUtils(id) }</Typography>
                                <CardContent style={ { display: 'flex', justifyContent: 'center', } }>
                                    <Box>
                                        <Box style={ { margin: 10, padding: 5, width: 100, height: 100 } }>
                                            <Typography variant='body1'>Height</Typography>
                                            <Typography variant='body1'>{ `${convertToFeetAndInches(height)} (${formatToMetricSystem(height)} m)` }</Typography>

                                        </Box>
                                        <Box stContaineryle={ { margin: 10, padding: 5, width: 100, height: 100 } }>
                                            <Typography variant='body1'>Weight</Typography>
                                            <Typography variant='body1'>{ `${convertKgToPounds(weight)} (${formatToMetricSystem(weight)} kg)` }</Typography>
                                        </Box>
                                    </Box>
                                    <Box>
                                        <Box style={ { margin: 10, padding: 5, width: 100, height: 100 } }>
                                            <Typography variant='h6'>Types: {
                                                types?.map((type, idx) => (
                                                    <Button key={ idx } variant='contained' color='primary'
                                                        style={ { margin: 2, backgroundColor: TYPE_COLORS[type?.type?.name] } }> { type?.type?.name }</Button>
                                                ))
                                            }
                                            </Typography>
                                        </Box>
                                        <Box style={ { margin: 10, padding: 5, width: 100, height: 100 } }>
                                            <Typography variant='h6'>Abilities: {
                                                abilities?.map((ability, idx) => (
                                                    <Typography key={ idx }> { capitalizeFirstLetterUtils(ability?.ability?.name) }</Typography>
                                                ))
                                            }
                                            </Typography>
                                        </Box>
                                    </Box>
                                </CardContent>
                            </Card> }
                        <Box style={ { display: 'flex', justifyContent: 'center', margin: '1em' } }>
                            <Button variant='contained' color='primary' onClick={ () => { goBack(); } }>Go back</Button>
                        </Box>
                    </Container>
            }
        </>
    );
};

export default PokemonProfile;