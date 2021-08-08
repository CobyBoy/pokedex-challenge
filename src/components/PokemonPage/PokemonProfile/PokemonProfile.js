import { Box, Button, Container, Card, CardMedia, CardContent, CircularProgress, Typography } from '@material-ui/core';
import { TYPE_COLORS } from '../../../constants/PokemonColorTypes';
import Pagination from '../../Pagination/PaginationPage';
import { formatIdUtils } from '../../../utils/PokemonIdFormatter.utils';
import { capitalizeFirstLetterUtils } from '../../../utils/PokemonNameFormatter.utils';
import { formatToMetricSystem } from '../../../utils/HeightAndWeightFormatter.utils';
import { convertKgToPounds } from '../../../utils/HeightAndWeightFormatter.utils';
import { convertToFeetAndInches } from '../../../utils/HeightAndWeightFormatter.utils';
import { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { getPokemonById } from '../../../services/pokemonAction';
import PokemonContext from '../../../context/PokemonContext/PokemonContext';
import PokemonNotFound from '../PokemonNotFound/PokemonNotFound';
import useStyles from './styles';

const PokemonProfile = (props) => {
    const { dispatch, setSearchingPokemon, loading, error, selectedPokemon } = useContext(PokemonContext);
    let history = useHistory();
    const classes = useStyles();
    const { match } = props;
    const { params } = match;
    const { abilities, name, types, height, id, weight, sprites } = selectedPokemon ?? {};
    const { other } = sprites ?? {};
    const { ['official-artwork']: official } = other ?? {};


    useEffect(() => {
        getPokemonById(dispatch, params.id);
    }, [params.id]);

    const goBack = (e) => {
        setSearchingPokemon('');
        history.push('/');
    };

    return (
        <>
            <Pagination page={ id }></Pagination>
            {
                error ? <PokemonNotFound></PokemonNotFound> :
                    <Container maxWidth="sm">
                        { loading ? <CircularProgress /> :
                            <Card>
                                <CardMedia className={ classes.media }
                                    image={ official?.front_default } title={ name } />

                                <Typography variant='h4' className={ classes.typo }>{ capitalizeFirstLetterUtils(name) } { formatIdUtils(id) }</Typography>
                                <CardContent className={ classes.cardContent }>
                                    <Box>
                                        <Box className={ classes.box }>
                                            <Typography variant='body1'>Height</Typography>
                                            <Typography variant='body1'>{ `${convertToFeetAndInches(height)} (${formatToMetricSystem(height)} m)` }</Typography>

                                        </Box>
                                        <Box className={ classes.box }>
                                            <Typography variant='body1'>Weight</Typography>
                                            <Typography variant='body1'>{ `${convertKgToPounds(weight)} (${formatToMetricSystem(weight)} kg)` }</Typography>
                                        </Box>
                                    </Box>
                                    <Box>
                                        <Box className={ classes.box }>
                                            <Typography variant='h6'>Types: {
                                                types?.map((type, idx) => (
                                                    <Button key={ idx } variant='contained' color='primary'
                                                        style={ { margin: 2, backgroundColor: TYPE_COLORS[type?.type?.name] } }> { type?.type?.name }</Button>
                                                ))
                                            }
                                            </Typography>
                                        </Box>
                                        <Box className={ classes.box }>
                                            <Typography variant='h6'>Abilities: {
                                                abilities?.map((ability, idx) => (
                                                    <Typography key={ idx }> { capitalizeFirstLetterUtils(ability?.ability?.name) }</Typography>
                                                ))
                                            }
                                            </Typography>
                                        </Box>
                                    </Box>
                                </CardContent>
                            </Card>
                        }
                        <Box className={ classes.boxButton }>
                            <Button variant='contained' color='primary' onClick={ () => { goBack(); } }>Go back to HomePage</Button>
                        </Box>
                    </Container>
            }
        </>
    );
};

export default PokemonProfile;