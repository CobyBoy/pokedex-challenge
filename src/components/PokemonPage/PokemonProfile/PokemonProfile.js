import { Box, Button, Container, Card, CardMedia, CardContent, CircularProgress,  Typography, Paper } from '@material-ui/core';
import { TYPE_COLORS } from '../../../constants/PokemonColorTypes';
import Pagination from '../../Pagination/PaginationPage';
import { formatIdUtils } from '../../../utils/PokemonIdFormatter.utils';
import { capitalizeFirstLetterUtils } from '../../../utils/PokemonNameFormatter.utils';
import { formatToMetricSystem } from '../../../utils/HeightAndWeightFormatter.utils';
import { convertKgToPounds } from '../../../utils/HeightAndWeightFormatter.utils';
import { convertToFeetAndInches } from '../../../utils/HeightAndWeightFormatter.utils';
import { useState, useEffect } from 'react';

const PokemonProfile = ({ pokemon }) => {
    const { abilities, name, types, height, id, weight, sprites } = pokemon;
    const { other } = sprites;
    const { ['official-artwork']: official } = other;
    const [imageLoading, setImageLoading] = useState(false);

    const load = (e) => {
        
        setImageLoading(true);
        
    };

    return (
        <>Pokemon profile
            { console.log('profile ', pokemon) }
            { console.log('abilities array', abilities) }
            { console.log('types array', types) }
            <Pagination page={ id }></Pagination>
            <Container maxWidth="sm">
                <Card>
                    <Paper elevation={ 3 }>
                        {
                            imageLoading && <CircularProgress />
                        }
                        <CardMedia image={ official.front_default } title={ name } style={ { height: 100, width: 100, padding: '2%', margin: 'auto' } } onLoad={ load }/>
                        <Typography variant='h4' style={ { textAlign: 'center' } }>{ capitalizeFirstLetterUtils(name) } { formatIdUtils(id) }</Typography>
                        <CardContent style={ { display: 'flex', justifyContent: 'center', } }>
                            <Box>
                                <Box style={ { margin: 10, padding: 5, width: 100, height: 100 } }>
                                    <Typography variant='body1'>Height</Typography>
                                    <Typography variant='body1'>{ `${convertToFeetAndInches(height)} (${formatToMetricSystem(height)} m)` }</Typography>

                                </Box>
                                <Box style={ { margin: 10, padding: 5, width: 100, height: 100 } }>
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
                    </Paper>
                </Card>
            </Container>
        </>
    );
};

export default PokemonProfile;