import React from 'react';
import NavBar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Skills from './components/pages/Skills';
import AboutMe from './components/pages/AboutMe';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <> 
    <Router>
      <NavBar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/skills' component={Skills} />
        <Route path='/about-me' component={AboutMe} />
        <Route path='/sign-up' component={SignUp} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
