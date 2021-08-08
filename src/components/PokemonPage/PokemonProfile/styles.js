import { makeStyles } from '@material-ui/styles';

export default makeStyles((theme) => ({
    media: {
        height: 100,
        width: 100,
        padding: '2%',
        margin:'auto'
    },
    typo: {
        textAlign: 'center'
    },
    cardContent: {
        display: 'flex',
        justifyContent:'center'
    },
    box: {
        margin: 10,
        padding: 5,
        width: 100,
        height:100
    },
    boxButton: {
        display: 'flex',
        justifyContent: 'center',
        margin:'1em'
    }
}));