import { useState } from 'react';

const Entry = ({ addNewEntry }) => {
  const [description, setDescription] = useState('');
  const [mood, setMood] = useState('');

  return (
    <form className="form" onSubmit={handleSubmit}>
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
    </form>
  );
};

export default Entry;
