import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import PokemonProvider from './context/PokemonContext/PokemonProvider';

ReactDOM.render(
  <React.StrictMode>
    <PokemonProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PokemonProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
