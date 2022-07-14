import './index.css';
import './App.css';
import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Home from './Home';

function App() {
  const [ users, setUsers ] = useState([{}]);

  useEffect(() => {
    fetch("/api")
    .then( response => response.json() )
    .then( data => { 
      setUsers(data.users)
      console.log(data);
    } )
  },[])

  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="main-wrapper">
          <div className="content-wrapper">
            {users && <p>{users[0].email}</p>}
          </div>
      </div>
      <Home></Home>
    </div>
  );
}

export default App;
