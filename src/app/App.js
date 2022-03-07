import React, { useState, useEffect } from 'react';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import axios from 'axios';
import { FullName, Email, Password, Occupation, State, Review, Success } from './views/views';

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
  const [wasRedirected, setWasRedirected] = useState(false);

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

  function clearFormData() {
    setFormInputValues({
      fullName: '',
      email: '',
      password: '',
      occupation: 'Head of Shrubbery',
      state: 'AL'
    })
  }

  return (
    <div className="app-wrapper flex-column">
      <canvas id="my-canvas"></canvas>
      <main className="content flex-column">
        <Routes>
          <Route exact path='/' element={<FullName formInputValues={formInputValues} handleChange={handleChange} />} />
          <Route path="/email" element={<Email formInputValues={formInputValues} handleChange={handleChange} />} />
          <Route path='/password' element={<Password formInputValues={formInputValues} handleChange={handleChange} />} />
          <Route path='/occupation' element={<Occupation formInputValues={formInputValues} handleChange={handleChange} options={occupations} />} />
          <Route path='/state' element={<State formInputValues={formInputValues} handleChange={handleChange} options={states} />} />
          <Route path='/review' element={<Review formInputValues={formInputValues} setWasRedirected={setWasRedirected}/>} />
          <Route path='/success' element={wasRedirected ? <Success clearFormData={clearFormData} /> : <Navigate to='/' />} />
        </Routes>
      </main>
    </div>

  );
}

export default App;
