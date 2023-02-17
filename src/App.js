
import React from 'react';
import NavBar from './components/Navbar';
import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>

      <Router>
        <NavBar />
        <Switch>
          <Route path='/' exact />
        </Switch>
      </Router>



    </>
  );
}

export default App;
