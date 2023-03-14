
import React from 'react';
import NavBar from './components/Navbar';
import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom';
import './App.css';
import SignUp from './SignUp';
import Signin from './Signin';
import ToLocation from './components/toLocation';
import Location from './components/Location';
import RequestPage from './components/RequestPage';
import YRL from './components/YrlPage';
import Boelter from './components/BoelterPage';
import TheStudy from './components/TheStudyPage';
import Ackerman from './components/AckermanPage';


function App() {

  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path='/' exact element={<ToLocation PowellRating={4} YRLRating={3} BoelterRating={3.5} StudyRating={4.5} AckermanRating={4} />} />
          <Route path='/sign-in' exact element={<Signin />} />
          <Route path='/sign-up' exact element={<SignUp />} />
          <Route path='/powell' exact element={<Location />} />
          <Route path='/yrl' exact element={<YRL />} />
          <Route path='/boelter' exact element={<Boelter />} />
          <Route path='/thestudy' exact element={<TheStudy />} />
          <Route path='/ackerman' exact element={<Ackerman />} />
          <Route path='/request' exact element={<RequestPage />} />
        </Switch>
      </Router>


        
    </>
  );
}

export default App;
