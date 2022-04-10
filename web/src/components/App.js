import { NavLink, Link, Route } from 'react-router-dom';
import '../styles/App.scss';
import { useState, useEffect } from 'react';
import api from '../services/api';
import ls from '../services/localStorage';
import Entry from './Entry';
import EntryList from './EntryList';
import Chart from './Chart';

//NO SE ESTÁ GUARDANDO EN LS!!! REVISAR!!
//cambiar server por app en SERVIDOR

function App() {
  //State Variables
  const [entries, setEntries] = useState(ls.get('entries', []));
  const [description, setDescription] = useState('');
  const [mood, setMood] = useState('');

  //Hooks
  useEffect(() => {
    ls.set('entries', entries);
  }, [entries]);

  //Events functions
  const updateDescription = (inputValue) => {
    setDescription(inputValue);
  };

  const updateMood = (inputValue) => {
    setMood(inputValue);
  };

  const saveEntry = (entry) => {
    const newEntries = [entry, ...entries];
    setEntries(newEntries);
    // ls.set(newEntries);
  };

  const handleAddNewEntry = (entry) => {
    saveEntry(entry);
    api.sendEntryToApi(entry).then((dataFromApi) => {
      //setEntries(dataFromApi);
      console.log(dataFromApi);
    });
  };

  return (
    <div>
      <Entry
        addNewEntry={handleAddNewEntry}
        description={description}
        mood={mood}
        updateDescription={updateDescription}
        updateMood={updateMood}
      />
      <EntryList listOfEntries={entries} />
      <Chart />
    </div>
  );
}

export default App;
