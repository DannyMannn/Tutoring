import './index.css';
import './App.css';
import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';

function App() {
  const [ users, setUsers ] = useState([{}]);

  useEffect(() => {
    fetch("/api")
    .then( response => response.json() )
    .then( data => { 
      setUsers(data)
      console.log(data);
    } )
  },[])

  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="main-wrapper">
          <div className="content-wrapper">

          </div>
      </div>
    </div>
  );
}

export default App;
