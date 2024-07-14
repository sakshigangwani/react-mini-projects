import { useEffect, useState } from 'react';
import './App.css';
import Axios from "axios";


function App() {

  const [generatedExcuse, setExcuse] = useState({});

  function fetchExcuse(excuse){
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}/`).then((res) => {
      setExcuse(res.data[0])
      console.log(res.data[0]);
    })
  }
  
  return (
    <div className="App">
      <h1>Generate An Excuse</h1>
      <div className='btns'>
        <button className='btn' onClick={() => fetchExcuse("party")}>Party</button>
        <button className='btn' onClick={() => fetchExcuse("family")}>Family</button>
        <button className='btn' onClick={() => fetchExcuse("office")}>Office</button>
      </div>
      <h4>{generatedExcuse.category}</h4>
      <h2>{generatedExcuse.excuse}</h2>
    </div>
  );
}

export default App;
