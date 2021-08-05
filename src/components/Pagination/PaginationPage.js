import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { Box, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { formatIdUtils } from '../../utils/PokemonIdFormatter.utils';

const PaginationPage = ({ page }) => {
    let history = useHistory();
    const nextPage = page + 1;
    const previousPage = page - 1;

    const pageClicking = (pageId) => {
        console.log(pageId);
        history.push(`/${pageId}`);
    };

    return (
        <div>{ console.log('page', nextPage)}
            Pagination
            <Box style={{display:'flex', justifyContent:'space-between', margin:'1em'}}>
                <Button variant="contained" startIcon={ <NavigateBeforeIcon /> } disabled={ previousPage === 0 } onClick={ () => pageClicking(previousPage) }>{ formatIdUtils(previousPage) }</Button>
                <Button variant="contained" endIcon={ <NavigateNextIcon /> } onClick={ () => pageClicking(nextPage) }>{ formatIdUtils(nextPage) }</Button>
            </Box>
            
            
        </div>
    );
};

export default PaginationPage;
