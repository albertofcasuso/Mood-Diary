import moment from 'moment';

function EntryList({ listOfEntries }) {
  return (
    <div className="entries_list">
      {listOfEntries &&
        listOfEntries.map((entry, i) => {
          const entryDate = moment(entry.date).fromNow();

          return (
            <div key={i}>
              <h2 className="user">Erlich Bachman</h2>
              <p className="date">{entryDate}</p>

              <div className="description">
                <label className="description__label" htmlFor="description">
                  description
                </label>
                <textarea
                  className="description__textarea"
                  id="description"
                  value={entry.description}
                  // onChange={handleTextarea}
                  readOnly //REVISAAAAAAARRRRRRRRRRRR
                  type="text"
                  maxLength={100}
                />
              </div>

              <div className="moods">
                <input
                  className={
                    entry.mood === 'happy'
                      ? 'customButton active'
                      : 'customButton'
                  }
                  type="button"
                  name="mood"
                  value="happy"
                  // onClick={handleMoodBtns}
                />

                <input
                  className={
                    entry.mood === 'sad'
                      ? 'customButton active'
                      : 'customButton'
                  }
                  type="button"
                  name="mood"
                  value="sad"
                  // onClick={handleMoodBtns}
                />

                <input
                  className={
                    entry.mood === 'angry'
                      ? 'customButton active'
                      : 'customButton'
                  }
                  type="button"
                  name="mood"
                  value="angry"
                  // onClick={handleMoodBtns}
                />
              </div>

              <button className="edit" type="button">
                EDIT
              </button>
            </div>
          );
        })}
    </div>
  );
}

export default EntryList;
