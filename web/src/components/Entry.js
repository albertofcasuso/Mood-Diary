import { useState } from 'react';
import '../styles/Entry.scss';
const Entry = ({ addNewEntry, buttons }) => {
  const [description, setDescription] = useState('');
  const [mood, setMood] = useState('');

  const handleMoodBtns = (e) => {
    setMood(e.target.value);
  };
  const handleTextarea = (e) => {
    setDescription(e.target.value);
  };
  return (
    <form className="form">
      <div className="description">
        <label className="description__label" htmlFor="description">
          description
        </label>
        <textarea
          className="description__textarea"
          id="description"
          value={description}
          onChange={handleTextarea}
          type="text"
          maxLength={100}
        />
      </div>

      <div className="moods">
        <input
          className={mood === 'happy' ? 'customButton active' : 'customButton'}
          type="button"
          name="mood"
          value="happy"
          onClick={handleMoodBtns}
        />

        <input
          className={mood === 'sad' ? 'customButton active' : 'customButton'}
          type="button"
          name="mood"
          value="sad"
          onClick={handleMoodBtns}
        />

        <input
          className={mood === 'angry' ? 'customButton active' : 'customButton'}
          type="button"
          name="mood"
          value="angry"
          onClick={handleMoodBtns}
        />
      </div>
    </form>
  );
};

export default Entry;
