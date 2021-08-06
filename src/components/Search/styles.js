import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    appBar: {
        padding: 20,
        alignItems:'center'
    },
    paper: {
        display: 'flex',
        alignItems:'center',
        padding: 20,
        width:'40%',
        height: '1em'
    },
    input: {
        background: 'white',
        width: '100%',
        fontSize:'1em'
    }
}));