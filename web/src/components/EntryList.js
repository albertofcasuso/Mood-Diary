import { application } from 'express';
import moment from 'moment';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function EntryList({ listOfEntries }) {

  // const [entryList,setListOfEntries] = useState();

  useEffect(()=>{
    //llamas a la api que te trae todos los entries
    //[{id: 1, description: 'test', mood: 'happy'}, {id: 2, description: 'test2', mood: 'sad'}]
    //setListOfEntries([{id: 1, description: 'test', mood: 'happy'}, {id: 2, description: 'test2', mood: 'sad'}])
  },[])

  const htmlList = listOfEntries.map((entry, i) => {
    const entryDate = moment(entry.date).fromNow();

    return (

      entryList && entryList.map(item=>{return(<Entry mood={item.mood} id={item.id} description={item.description} date={item.date}></Entry>)})

      const Entry = ({props})=>{
        //ll
        const [nuevaDescripcion, setNuevaDescripcion] = useState('');
        const [nuevoMood, setNuevoMood] = useState('');

        const handleChange= (e) => {
          setNuevaDescripcion(e.target.value);
        }

        const handleEdit = () => {
          //llamas a la api de editar
          {id:props.id, description:props.description, mood:props.mood}

          api.update({id:props.id, description:nuevaDescripcion, mood:nuevoMood})
        }
        return(<>
          <input onChange ={handleChange}></input>
          <button onClick={handleEdit} >Aceptar</button>
          </>
        )
      }

      <li key={i}>
        <h3 className="user">Erlich Bachman</h3>
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
              entry.mood === 'happy' ? 'customButton active' : 'customButton'
            }
            type="button"
            name="mood"
            value="happy"
            // onClick={handleMoodBtns}
          />

          <input
            className={
              entry.mood === 'sad' ? 'customButton active' : 'customButton'
            }
            type="button"
            name="mood"
            value="sad"
            // onClick={handleMoodBtns}
          />

          <input
            className={
              entry.mood === 'angry' ? 'customButton active' : 'customButton'
            }
            type="button"
            name="mood"
            value="angry"
            // onClick={handleMoodBtns}
          />
        </div>

        <Link to={`/edit-entry/${i}`}>Edit</Link>
      </li>
    );
  });
  return <ul className="entries_list">{htmlList}</ul>;
}

export default EntryList;
