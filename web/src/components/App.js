import { Route, Switch } from 'react-router-dom';
import '../styles/App.scss';
import { useState, useEffect } from 'react';
import api from '../services/api';

import EntryInput from './EntryInput';
import EntryList from './EntryList';
import Chart from './Chart';

//SE ESTÁ GUARDANDO EN LS?? REVISAR!!
//cambiar server por app en SERVIDOR
//refactorizar: dos var(desc y mood) pasarlas a 1 obj y 1 handle
//poner catch error en los fetch

function App() {
  //State Variables
  const [entries, setEntries] = useState([]);
  console.log(entries);
  const [description, setDescription] = useState('');
  const [mood, setMood] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [newMood, setNewMood] = useState('');
  const [editable, setEditable] = useState(true);

  //Hooks
  useEffect(() => {
    api.getEntriesFromApi().then((dataFromApi) => {
      //esto funciona bien?
      console.log(dataFromApi)
      setEntries(dataFromApi);
    });
  }, []);

  //Events functions
  const updateDescription = (inputValue) => {
    setDescription(inputValue);
  };

  const updateMood = (inputValue) => {
    setMood(inputValue);
  };

  const saveEntry = (entry) => {
    const newEntries = [...entries, entry];
    //a ver que hay aqui dentro
    console.log('newEntries: ', newEntries)
    setEntries(newEntries);
  };

  const handleAddNewEntry = (entry) => {
    saveEntry(entry);
    api.sendEntryToApi(entry).then((dataFromApi) => {
      console.log(dataFromApi); //QUE PONGO AQUI??????????????????
    });
  };

  const submitUpdatedEntry = (description, mood, id) => {
    api.sendEditedEntryToApi(description, mood, id).then((dataFromApi) => {
      console.log(dataFromApi); //AQUIIIIIIIIII
    });
  };

  return (
    <div>
      <Switch>
        <Route exact path="/">
          <EntryInput
            addNewEntry={handleAddNewEntry}
            description={description}
            mood={mood}
            updateDescription={updateDescription}
            updateMood={updateMood}
          />
          <EntryList
            listOfEntries={entries}
            submitUpdatedEntry={submitUpdatedEntry}
            newDescription={newDescription}
            setNewDescription={setNewDescription}
            newMood={newMood}
            setNewMood={setNewMood}
            editable={editable}
            setEditable={setEditable}
          />
          <Chart />
        </Route>
        <Route path="/edit-entry/:id">
          <EntryInput
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
