import { useContext } from 'react';
import PokemonContext from '../../context/PokemonContext/PokemonContext';
import { Card, CardMedia, CardActionArea, CardContent, CircularProgress, Typography, } from '@material-ui/core';
import { formatIdUtils } from '../../utils/PokemonIdFormatter.utils';
import { capitalizeFirstLetterUtils } from '../../utils/PokemonNameFormatter.utils';
import useStyles from './styles';

const PokemonCard = ({ pokemon: { name, sprites, id }, props }) => {
    const { history } = props;
    const classes = useStyles();
    const { loading } = useContext(PokemonContext);

    const handleClick = (id) => {
        history.push(`/${id}`);
    };

    return (
        <>
            <Card onClick={ () => { handleClick(id); } } className={ classes.card }>
                <CardActionArea>
                    {
                        loading && <CircularProgress />
                    }
                    <CardMedia
                        component='img'
                        className={ classes.media }
                        image={ sprites?.front_default }
                        title={ name }
                    />

                    <CardContent className={ classes.cardContent }>
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
