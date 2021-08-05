import './App.css';
import { Route, Router, useHistory } from 'react-router-dom';
import PokemonPage from './components/PokemonPage/PokemonPage';
import PokemonGrid from './components/PokemonList/PokemonList';
import Search from './components/Search/Search';

const App = () => {
  let history = useHistory();
  return (
    <>
      <Router history={history}>
        <Route path='/' component={Search} />
        <Route exact path='/' component={PokemonGrid} />
        <Route exact path='/:id' component={PokemonPage} />
      </Router>

    </>
  );
};
export default App;
