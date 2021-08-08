import { Route, Router, useHistory } from 'react-router-dom';
import PokemonGrid from './components/PokemonList/PokemonList';
import Search from './components/Search/Search';
import PokemonProfile from './components/PokemonPage/PokemonProfile/PokemonProfile';

const App = () => {
  let history = useHistory();
  return (
    <>
      <Router history={history}>
        <Route path='/' component={Search} />
        <Route exact path='/' component={PokemonGrid} />
        <Route exact path='/:id' component={PokemonProfile} />
      </Router>

    </>
  );
};
export default App;
