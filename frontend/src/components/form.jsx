// import axios from 'axios';
import React, { useState } from 'react'

function Form() {
    const [title, setTitle] = useState('');
    const [load, setLoad] = useState('');
    const [reps, setReps] = useState('');
    const [error, setError] = useState(null)

    // function postData(){
    //     // const workout = {title, load, reps};
    //     axios.post('https://abd.up.railway.app/api/username', {
    //       "title": title,
    //       "load": load,
    //       "reps": reps
    //     })
    //       .then(function (response) {
    //         console.log(response);
    //       })
    //       .catch(function (error) {
    //         console.log(error);
    //       });
    // }
    // const postData = async () => {
    //   const response = await axios.post('https://abd.up.railway.app/api/username', {
    //           "title": title,
    //           "load": load,
    //           "reps": reps
    //         });
    //   console.log(response.data);
    // };
    const postData = async (e) => {
      e.preventDefault()
  
      const workout = {title, load, reps}
      
      const response = await fetch('https://abd.up.railway.app/api/username', {
        method: 'POST',
        body: JSON.stringify(workout),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const json = await response.json()
  
      if (!response.ok) {
        setError(json.error)
      }
      if (response.ok) {
        setError(null)
        setTitle('')
        setLoad('')
        setReps('')
        console.log('new workout added:', json)
      }
  
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
      <div>{error}</div>
      {/* {error && <div className="error">{error}</div>} */}
    </form>
  )
}

export default Form