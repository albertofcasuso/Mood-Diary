import moment from 'moment';
import Entry from './Entry';

function EntryList({
  listOfEntries,
  submitUpdatedEntry,
  setNewMood,
  newMood,
  setNewDescription,
  newDescription,
  editable,
  setEditable,
}) {
  const htmlListOfEntries =
    listOfEntries &&
    listOfEntries.map((entry, i) => {
      const entryDate = moment(entry.date).fromNow();
      return (
        <li key={i}>
          <Entry
            submitUpdatedEntry={submitUpdatedEntry}
            mood={entry.mood}
            id={entry.id}
            description={entry.description}
            date={entryDate}
            newDescription={newDescription}
            setNewDescription={setNewDescription}
            newMood={newMood}
            setNewMood={setNewMood}
            editable={editable}
            setEditable={setEditable}
          />
        </li>
      );
    });

  //   return (

  //     <li key={i}>
  //       <h3 className="user">Erlich Bachman</h3>
  //       <p className="date">{entryDate}</p>

  //       <div className="description">
  //         <label className="description__label" htmlFor="description">
  //           description
  //         </label>
  //         <textarea
  //           className="description__textarea"
  //           id="description"
  //           value={entry.description}
  //           // onChange={handleTextarea}
  //           readOnly //REVISAAAAAAARRRRRRRRRRRR
  //           type="text"
  //           maxLength={100}
  //         />
  //       </div>

  //       <div className="moods">
  //         <input
  //           className={
  //             entry.mood === 'happy' ? 'customButton active' : 'customButton'
  //           }
  //           type="button"
  //           name="mood"
  //           value="happy"
  //           // onClick={handleMoodBtns}
  //         />

  //         <input
  //           className={
  //             entry.mood === 'sad' ? 'customButton active' : 'customButton'
  //           }
  //           type="button"
  //           name="mood"
  //           value="sad"
  //           // onClick={handleMoodBtns}
  //         />

  //         <input
  //           className={
  //             entry.mood === 'angry' ? 'customButton active' : 'customButton'
  //           }
  //           type="button"
  //           name="mood"
  //           value="angry"
  //           // onClick={handleMoodBtns}
  //         />
  //       </div>

  //       <Link to={`/edit-entry/${i}`}>Edit</Link>
  //     </li>
  //   );
  // });
  return <ul className="entries_list">{htmlListOfEntries}</ul>;
}

export default EntryList;
