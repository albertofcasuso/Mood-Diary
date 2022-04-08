import propTypes from 'prop-types';
const MoodButton = (props) => {
  const { text } = props;
  const handleMoodButton = (e) => {};

  return (
    <input type="text" className="mood-btn" onChange={handleMoodButton}>
      {text}
    </input>
  );
};

MoodButton.propTypes = { text: propTypes.string.isRequired };

export default MoodButton;
