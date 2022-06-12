import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Header from './Shared/Header/Header'
import Alert from './Shared/Alert/Alert'
import Home from './Home/Home'
import About from './About/About'
import AlertState from './Context/Alert/AlertState';
import FbState from './Context/FireBase/FbState';
// import './App.css';

function App() {
  return (
    <FbState>
      <AlertState>
        <Router>
          <Header/>
          <main>
            <Alert/>
            <Switch>
              <Route path='/' exact>
                <Home/>
              </Route>
              <Route path='/about' exact>
                <About/>
              </Route>
            </Switch>
          </main>
        </Router>
      </AlertState>
    </FbState>
  );
}

export default App;
