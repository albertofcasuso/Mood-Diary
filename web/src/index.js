// Fichero src/index.js (código nuevo)

import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom'; //digo q voy a usar rutas cn Hash
import App from './components/App';

ReactDOM.render(
  //Indicamos que el componente HashRouter es ahora la madre de App
  //Esto hace que App y todos sus comp hijas,nietas.. puedan trabajar con rutas
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('root')
);

// en el futuro cuando tengas acceso a la configuración de tu servidor y puedas usar el sistema moderno de rutas, tienes que cambiar en este fichero la palabra HashRouter por BrowserRouter . Todo lo demás funciona igual
