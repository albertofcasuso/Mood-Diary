import '../styles/Entry.scss';

const Entry = ({
  mood,
  id,
  description,
  date,
  submitUpdatedEntry,
  setNewMood,
  newMood,
  setNewDescription,
  newDescription,
  editable,
  setEditable,
}) => {
  const handleMoodBtns = (e) => {
    setNewMood(e.target.value);
  };
  const handleTextarea = (e) => {
    setNewDescription(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault(); //VALIDAR TB MOOD !!!!!!!<<---------
    if (description && description.trim().length > 0) {
      submitUpdatedEntry({
        newDescription,
        newMood,
        id, ///DEBO PONER AQUÍ EL ID???????
      });
    }
  };

  const handleEditClick = () => {
    setEditable(!editable);
  };

  return (
    <form className="form" onSubmit={handleOnSubmit}>
      <h3 className="user">Erlich Bachman</h3>
      <div className="description">
        <label className="description__label" htmlFor="description">
          description
        </label>

        {editable ? (
          <p value={description}>{description}</p>
        ) : (
          <textarea
            className="description__textarea"
            id="description"
            value={description}
            onChange={handleTextarea}
            type="text"
            maxLength={100}
          />
        )}
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

      {editable ? (
        <button className="edit" onClick={handleEditClick}>
          EDIT
        </button>
      ) : null}

      {!editable ? (
        <button className="submit" type="submit">
          SUBMIT TO DB
        </button>
      ) : null}
    </form>
  );
};

export default Entry;
