import '../styles/Entry.scss';

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
        date: Date.now(), //CHECK!!!!!!!!!
      });
      updateDescription('');
      updateMood('');
    }
  };

  return (
    <form className="form" onSubmit={handleOnSubmit}>
      <h3 className="user">Erlich Bachman</h3>
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

      <button className="submit" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Entry;
