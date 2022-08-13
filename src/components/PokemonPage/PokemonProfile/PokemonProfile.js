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
import Profile from '.';

const PokemonProfile = (props) => {
    const { dispatch, setSearchingPokemon, loading, error, selectedPokemon } = useContext(PokemonContext);
    let history = useHistory();
    const { match } = props;
    const { params } = match;

    useEffect(() => {
        getPokemonById(dispatch, params.id);
    }, [params.id]);

    const goBack = (e) => {
        setSearchingPokemon('');
        history.push('/');
    };

    return (
        <>
            <Pagination page={ selectedPokemon.id }></Pagination>
            <Profile error={ error } loadin={ loading } selectedPokemon={ selectedPokemon } goBack={ goBack }></Profile>
        </>
    );
};

export default PokemonProfile;