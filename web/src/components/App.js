// Fichero src/components/App.js

import { NavLink, Link, Route } from 'react-router-dom'; // importo componentes
import '../styles/App.scss';
import { useState, useEffect } from 'react';
import getApiData from '../services/api';
import Entry from './Entry';

function App() {
  //los datos q me devuleve api los guardo en var estado--------
  // const [data, setData] = useState('');

  //SI USO FETCH AQUÍ SIN MODULOS -----------------
  // useEffect(() => {
  //   fetch('URLblablablabla')
  //     .then((response) => response.json())
  //     .then((dataFromApi) => {
  //       setData(dataFromApi);
  //     });
  // }, []);

  //SI USO FETCH DESDE UN MÓDULO---------------
  // useEffect(() => {
  //   getApiData().then((dataFromApi) => {
  //     setData(dataFromApi);
  //   });
  // }, []);

  //State variables
  const [state, setstate] = useState();
  //Global var
  //Hooks
  //Events functions
  //variables or functions with html
  return (
    <div>
      <h2>Este título aparece siempre</h2>
      <Entry />
      {/* 1- Usamos el componente Route */}
      {/* <Route path="/contacto">
        <h2>
          Este título solo aparece cuando la usuaria entra en la página de
          contacto
        </h2>
      </Route>

      <nav>
        <ul>
          <li>
            <Link to="/">Ir a inicio</Link>
          </li>
          <li> */}
      {/*2️- Cuando usuario pulsa un link, la ruta dl navegador cambia*/}
      {/* <Link to="/contacto">Ir a contacto</Link>
          </li>
        </ul>
      </nav> */}
    </div>
  );
}

export default App;
