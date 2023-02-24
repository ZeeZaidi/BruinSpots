
import React from 'react';
import NavBar from './components/Navbar';
import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom';
import './App.css';
import SignUp from './SignUp';
import Signin from './Signin';

function App() {
  return (
    <>

      <Router>
        <NavBar />
        <Switch>
          <Route path='/' exact />
          <Route path='/sign-in' exact element={<Signin />} />
          <Route path='/sign-up' exact element={<SignUp />} />
        </Switch>
      </Router>


        
    </>
  );
}

export default App;
