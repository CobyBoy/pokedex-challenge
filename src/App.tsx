import { useHistory } from 'react-router-dom';
import Search from './components/Search/Search';
import Routes from './routes/routes';

const App = () => {
  let history = useHistory();
  return (
    <>
      <Search history = {history}></Search>
        <Routes/>
    </>
  );
};
export default App;
