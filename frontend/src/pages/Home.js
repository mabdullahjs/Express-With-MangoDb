import React, { useEffect, useState } from 'react'
// import pakages
import axios from 'axios'

function Home() {
  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState("");


  useEffect(() => {
    axios
      .get("/api/username")
      .then(async(response) => {
        setMyData(response.data);
        console.log(myData);
      })
      .catch((error) => {
        setIsError(error.message); 
      });
  }, []);

  return (
    <div className='home'>
      {myData.map((item)=>{
        return <div key={item._id}>
          <h1>{item.title}</h1>
          <h2>{item.reps}</h2>
          <h2>{item.load}</h2>
        </div>
      })}
    </div>
  )
}

export default Home