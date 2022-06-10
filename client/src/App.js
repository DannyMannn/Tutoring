import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;