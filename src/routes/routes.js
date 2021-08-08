import { Route, Router, useHistory } from 'react-router-dom';
import PokemonList from '../components/PokemonList/PokemonList';
import PokemonProfile from '../components/PokemonPage/PokemonProfile/PokemonProfile';

const Routes = () => {
    let history = useHistory();
    return (
        <>
            <Router history={ history }>
                <Route exact path='/' component={ PokemonList } />
                <Route exact path='/:id' component={ PokemonProfile } />
            </Router>

        </>
    );
};

export default Routes;
