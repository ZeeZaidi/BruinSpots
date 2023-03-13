
import React from 'react';
import NavBar from './components/Navbar';
import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom';
import './App.css';
import SignUp from './SignUp';
import Signin from './Signin';
import ToLocation from './components/toLocation';
import Location from './components/Location';

function App() {
  return (
    <>

      <Router>
        <NavBar />
        <Switch>
          <Route path='/' exact element={<ToLocation />} />
          <Route path='/sign-in' exact element={<Signin />} />
          <Route path='/sign-up' exact element={<SignUp />} />
          <Route path='/powell' exact element={<Location />} />
        </Switch>
      </Router>


        
    </>
  );
}

export default App;
