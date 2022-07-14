import './index.css';
import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
    <Router>
        <div className="App">
          <Navbar></Navbar>
          
          <div className="main-wrapper">
            <Switch>
              <Route exact path='/'>
                <div className="content-wrapper">
                  {users && <p>{users[0].email}</p>}
                </div>
                <Home/> 
              </Route>

              <Route exact path='/sessions'>
                <div>sessions</div>
              </Route>

              <Route exact path='/teachers'>
                <div>teachers</div>
              </Route>

              <Route exact path='/profile'>
                <div>profile</div>
              </Route>
            </Switch>
          </div>

      </div>
    </Router>
    
  );
}

export default App;
