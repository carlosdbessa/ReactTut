import React from 'react';
import NavBar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Cards from './components/Cards';
import Contacts from './components/pages/Contacts';
import Checkout from './components/Checkout'
import Faq from './components/pages/Faq'
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <> 
    <Router>
      <NavBar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/cards' component={Cards} />
        <Route path='/contacts' component={Contacts} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/Checkout' component={Checkout}/>
         <Route path='/FAQS' component={Faq}/>  
      </Switch>
    </Router>
    </>
  );
}

export default App;
