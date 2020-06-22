import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';
import Home from './Components/Home';
import Login from './Components/auth/Login';
import Register from './Components/auth/Register';
import Results from './Components/Results';
import Cards from './Components/Card';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/results" component={Results} />
          <Route path="/cards" component={Cards} />


          <Route exact path="/register" component={Register} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
