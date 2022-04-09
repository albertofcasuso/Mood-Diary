import { NavLink, Link, Route } from 'react-router-dom';
import '../styles/App.scss';
import { useState, useEffect } from 'react';
import ls from '../services/localStorage';
import Entry from './Entry';

function App() {
  const [entries, setEntries] = useState(ls.get('entries', []));

  useEffect(() => {
    ls.set('entries', entries);
  }, [entries]);

  const saveEntry = (entry) => {
    const newEntries = [entry, ...entries];
    setEntries(newEntries);
    ls.set(newEntries);
  };

  const handleAddNewEntry = (entry) => saveEntry(entry);

  return (
    <div>
      {/* <h1 className="user">Erlich Bachman</h1> */}
      <Entry addNewEntry={handleAddNewEntry} />
    </div>
  );
}

export default App;
