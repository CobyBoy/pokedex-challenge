import { Box, Button, Card, CardContent, CardMedia, CircularProgress, Container, Typography } from "@material-ui/core";
import { TYPE_COLORS } from "../../../constants/PokemonColorTypes";
import { ProfileProps, typeOfTypes } from "../../../interfaces/types";
import { convertKgToPounds, convertToFeetAndInches, formatToMetricSystem } from "../../../utils/HeightAndWeightFormatter.utils";
import { formatIdUtils } from "../../../utils/PokemonIdFormatter.utils";
import { capitalizeFirstLetterUtils } from "../../../utils/PokemonNameFormatter.utils";
import PokemonNotFound from "../PokemonNotFound/PokemonNotFound";
import useStyles from './styles';

const Profile: React.FC<ProfileProps> = ({ error, loading, selectedPokemon, goBack }) => {
    const classes = useStyles();
    const { abilities, height, id, name, sprites, types, weight } = selectedPokemon ?? {};
 
    return (
        <>
            {console.log("select", selectedPokemon)}
            {
                error ? <PokemonNotFound></PokemonNotFound> :
                    <Container maxWidth="sm">
                        {loading ? <CircularProgress /> :
                            <Card>
                                <CardMedia className={classes.media} image={sprites?.other["official-artwork"].front_default} title={name} />

                                <Typography variant='h4' className={classes.typo}>{capitalizeFirstLetterUtils(name)} {formatIdUtils(id)}</Typography>
                                <CardContent className={classes.cardContent}>
                                    <Box>
                                        <Box className={classes.box}>
                                            <Typography variant='body1'>Height</Typography>
                                            <Typography variant='body1'>{`${convertToFeetAndInches(height)} (${formatToMetricSystem(height)} m)`}</Typography>

                                        </Box>
                                        <Box className={classes.box}>
                                            <Typography variant='body1'>Weight</Typography>
                                            <Typography variant='body1'>{`${convertKgToPounds(weight)} (${formatToMetricSystem(weight)} kg)`}</Typography>
                                        </Box>
                                    </Box>
                                    <Box>
                                        <Box className={classes.box}>
                                            <Typography variant='h6'>Types: {
                                                types?.map((type: typeOfTypes, idx: number) => (
                                                    <Button key={idx} variant='contained' color='primary'
                                                        style={{ margin: 2, backgroundColor: TYPE_COLORS[type?.type?.name] }}> {type?.type?.name}</Button>
                                                ))
                                            }
                                            </Typography>
                                        </Box>
                                        <Box className={classes.box}>
                                            <Typography variant='h6'>Abilities: {
                                                abilities?.map((ability, idx) => (
                                                    <Typography key={idx}> {capitalizeFirstLetterUtils(ability?.ability?.name)}</Typography>
                                                ))
                                            }
                                            </Typography>
                                        </Box>
                                    </Box>
                                </CardContent>
                            </Card>
                        }
                        <Box className={classes.boxButton}>
                            <Button variant='contained' color='primary' onClick={(e) => { goBack(e); }}>Go back to HomePage</Button>
                        </Box>
                    </Container>
            }
        </>
    );
};

export default Profile;
