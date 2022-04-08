import User from './User';
import Description from './Description';
import MoodButton from './MoodButton';

const Entry = (props) => {
  return (
    <form action="" className="form" onSubmit={(e) => e.preventDefault()}>
      <User />
      <Description />
      <MoodButton text="I'm happy" />
      <MoodButton text="I'm angry" />
      <MoodButton text="I'm sad" />
    </form>
  );
};

export default Entry;
