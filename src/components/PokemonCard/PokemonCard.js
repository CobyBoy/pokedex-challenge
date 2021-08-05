import { useContext, useState } from 'react';
import PokemonContext from '../../context/PokemonContext/PokemonContext';
import { Card, CardMedia, CardActionArea, CardContent, CircularProgress, Typography, } from '@material-ui/core';
import { clearAllPokemons } from '../../services';
import { formatIdUtils } from '../../utils/PokemonIdFormatter.utils';
import { capitalizeFirstLetterUtils } from '../../utils/PokemonNameFormatter.utils';

const PokemonCard = ({ pokemon: { name, sprites, id }, props }) => {
    const { history } = props;
    const { setCurrentId, dispatch, pokemons } = useContext(PokemonContext);
    const [imageLoading, setImageLoading] = useState(true);

    const handleClick = (id) => {
        console.log('habdle id', id);
        clearAllPokemons(dispatch);
        history.push(`/${id}`);
        
        console.log('hadle click card selected pokemon');
        console.log('check state afeter click card', pokemons );
    };
    const load = () => {
        setImageLoading(false);
    };

    return (
        <>
            <Card onClick={ () => { handleClick(id); } } style={ { width: 250, margin: 15 } }>
                <CardActionArea>
                    {
                        imageLoading && <CircularProgress />
                    }
                    <CardMedia
                        component='img'
                        style={ { height: 100, width: 100, padding: '2%', margin: 'auto' } }
                        image={ sprites?.front_default }
                        title={ name }
                        onLoad={ load }
                    />

                    <CardContent style={ { textAlign: 'center' } }>
                        <Typography gutterBottom variant='h5' component='h2'>
                            { capitalizeFirstLetterUtils(name) }
                        </Typography>
                        <Typography variant='body2' color='textSecondary' component='p'>
                            { formatIdUtils(id) }
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </>
    );
};

export default PokemonCard;
