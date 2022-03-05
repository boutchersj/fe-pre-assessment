import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import axios from 'axios';
import './App.css';
import ConfettiGenerator from 'confetti-js';
import FullName from './fields/FullName';
import Email from './fields/Email';
import Password from './fields/Password';
import Occupation from './fields/Occupation';
import State from './fields/State';
import Review from './Review';

function App() {
  const [formInputValues, setFormInputValues] = useState({
    fullName: '',
    email: '',
    password: '',
    occupation: 'Head of Shrubbery',
    state: 'AL'
  });

  const [occupations, setOccupations] = useState([]);
  const [states, setStates] = useState([]);

  useEffect(() => {
    axios.get('https://frontend-take-home.fetchrewards.com/form')
    .then((res) => {
      setOccupations(res.data.occupations);
      setStates(res.data.states);
    })
    .catch((err) => { console.log(err) });
  }, [])

  function handleChange(e) {
    setFormInputValues({...formInputValues,
      [e.target.name]: e.target.value
    })
  }

  function submitForm(e) {
    e.preventDefault();

    const formData = {
      "name": formInputValues.fullName,
      "email": formInputValues.email,
      "password": formInputValues.password,
      "occupation": formInputValues.occupation,
      "state": formInputValues.state
    };
    axios.post('https://frontend-take-home.fetchrewards.com/form', formData)
      .then((res) => {
        console.log(res);

        // Include a fun celebration
        alert('Your submission was successful! 🎉');
        const confettiSettings = { target: 'my-canvas' };
        const confetti = new ConfettiGenerator(confettiSettings);
        confetti.render();
      })
      .catch((err) => { console.log(err) });
  }

  return (
    <div className="app-wrapper flex-column">
      <canvas id="my-canvas"></canvas>
      <main className="content flex-column">
        <Router>   
          <Routes>
            <Route exact path='/' element={<FullName formInputValues={formInputValues} handleChange={handleChange} />} />
            <Route path="/email" element={<Email formInputValues={formInputValues} handleChange={handleChange} />} />
            <Route path='/password' element={<Password formInputValues={formInputValues} handleChange={handleChange} />} />
            <Route path='/occupation' element={<Occupation formInputValues={formInputValues} handleChange={handleChange} options={occupations} />} />
            <Route path='/state' element={<State formInputValues={formInputValues} handleChange={handleChange} options={states} />} />
            <Route path='/review' element={<Review formInputValues={formInputValues} submitForm={submitForm} />} />
          </Routes>
        </Router>
      </main>
    </div>

  );
}

export default App;
