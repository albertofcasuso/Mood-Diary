import { NavLink, Link, Route } from 'react-router-dom';
import '../styles/App.scss';
import { useState, useEffect } from 'react';
import ls from '../services/localStorage';
import Entry from './Entry';
import EntryList from './EntryList';
import Chart from './Chart';

function App() {
  const [entries, setEntries] = useState(ls.get('entries', []));

  useEffect(() => {
    ls.set('entries', entries);
  }, [entries]);

  const saveEntry = (entry) => {
    const newEntries = [entry, ...entries];
    setEntries(newEntries);
    // ls.set(newEntries);
  };

  const handleAddNewEntry = (entry) => saveEntry(entry);

  return (
    <div>
      <Entry addNewEntry={handleAddNewEntry} />
      <EntryList listOfEntries={entries} />
      <Chart />
    </div>
  );
}

export default App;
