import '../styles/Entry.scss';
import { useState } from 'react';

const Entry = ({
  addNewEntry,
  description,
  mood,
  updateMood,
  updateDescription,
}) => {
  const handleMoodBtns = (e) => {
    updateMood(e.target.value);
  };
  const handleTextarea = (e) => {
    updateDescription(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (description && description.trim().length > 0) {
      addNewEntry({
        description,
        mood,
        date: new Date.now(), //CHECK!!!!!!!!!
      });
      updateDescription('');
      updateMood('');
    }
  };

  
  const [editable, setTextType] = useState(true);

  const handleTextClick = () => {
    setTextType(!editable);
  }

  return (
    <form className="form" onSubmit={handleOnSubmit}>
      <h3 className="user">Erlich Bachman</h3>
      <div className="description">
        <label className="description__label" htmlFor="description">
          description
        </label>
        {editable?

<p
value={description}
>
 {`Ahora no se puede editar`}
</p>
:
        <textarea
          className="description__textarea"
          id="description"
          value={description}
          onChange={handleTextarea}
          type="text"
          maxLength={100}
        />
        }
      </div>

      <div className="moods">
        <input
          className={mood === 'happy' ? 'customButton active' : 'customButton'}
          type="button"
          name="mood"
          value="happy"
          onClick={handleMoodBtns}
          disabled={editable}
        />

        <input
          className={mood === 'sad' ? 'customButton active' : 'customButton'}
          type="button"
          name="mood"
          value="sad"
          onClick={handleMoodBtns}
          disabled={editable}
        />

        <input
          className={mood === 'angry' ? 'customButton active' : 'customButton'}
          type="button"
          name="mood"
          value="angry"
          onClick={handleMoodBtns}
          disabled={editable}
        />
      </div>

      <button className="submit" onClick={handleTextClick}>
        Edit
      </button>
      {!editable?
      <button onClick={handleTextClick}>
        Cancel Edit 
      </button>:null}
    </form>
  );
};

export default Entry;
