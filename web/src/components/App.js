// Fichero src/components/App.js

import { NavLink, Link, Route } from 'react-router-dom'; // importo componentes
import '../styles/App.scss';
import { useState, useEffect } from 'react';
import getApiData from '../services/api';
import Entry from './Entry';

function App() {
  const handleAddNewEntry = (entry) => console.log(entry);
  return (
    <div>
      {/* <h1 className="user">Erlich Bachman</h1> */}
      <Entry addNewEntry={handleAddNewEntry} />
    </div>
  );
}

export default App;
