import axios from 'axios';
import React, { useState } from 'react'

function Form() {
    const [title, setTitle] = useState('');
    const [load, setLoad] = useState('');
    const [reps, setReps] = useState('');
    const [error, setError] = useState(null);

    function postData(){
        // const workout = {title, load, reps};
        axios.post('/api/username', {
            "title": title,
            "load": load,
            "reps": reps
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
  return (
    <form className="create" > 
      <h3>Add a New Workout</h3>

      <label>Excersize Title:</label>
      <input 
        type="text" 
        onChange={(e) => setTitle(e.target.value)} 
        value={title}
      />

      <label>Load (in kg):</label>
      <input 
        type="number" 
        onChange={(e) => setLoad(e.target.value)} 
        value={load}
      />

      <label>Number of Reps:</label>
      <input 
        type="number" 
        onChange={(e) => setReps(e.target.value)} 
        value={reps} 
      />

      <button onClick={postData}>Add Workout</button>
      {/* {error && <div className="error">{error}</div>} */}
    </form>
  )
}

export default Form