import { NavLink, Link, Route, Switch } from 'react-router-dom';
import '../styles/App.scss';
import { useState, useEffect } from 'react';
import api from '../services/api';
import ls from '../services/localStorage';
import Entry from './EntryInput';
import EntryList from './EntryList';
import Chart from './Chart';

//SE ESTÁ GUARDANDO EN LS?? REVISAR!!
//cambiar server por app en SERVIDOR
//refactorizar: dos var(desc y mood) pasarlas a 1 obj y 1 handle
//poner catch error en los fetch

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

  const handleGetEntries = () => {
    fetch('http://localhost:3000/todo').then((response) => {
      response.json().then((dataFromApi) => {
        console.log(dataFromApi);
        setEntries(dataFromApi);
        dataFromApi.map((entry) => {
          setMood(entry.mood);
          setDescription(entry.description);
        });
      });
    });
  };

  // const onSubmitEdit = (entry, mood) => {
  //   console.log('fetch PUT');
  //   api.sendEditedEntryToApi().
  // };

  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Entry
            addNewEntry={handleAddNewEntry}
            description={description}
            mood={mood}
            updateDescription={updateDescription}
            updateMood={updateMood}
          />
          <EntryList listOfEntries={entries} />
          <Chart />
        </Route>
        <Route path="/edit-entry/:id">
          <Entry
            description={description}
            mood={mood}
            // onSubmit={onSubmitEdit}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
