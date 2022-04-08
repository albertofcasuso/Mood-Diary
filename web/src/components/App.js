// Fichero src/components/App.js

import { NavLink, Link, Route } from 'react-router-dom'; // importo componentes
import '../styles/App.scss';
import { useState, useEffect } from 'react';
import getApiData from '../services/api';
import Entry from './Entry';

function App() {
  //los datos q me devuleve api los guardo en var estado--------
  // const [data, setData] = useState('');

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
    </div>
  );
}

export default App;
