import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ConfettiGenerator from 'confetti-js';
import FullName from './fields/FullName';
import Email from './fields/Email';
import Password from './fields/Password';
import Occupation from './fields/Occupation';
import State from './fields/State';

function Form() {
  const [formInputValues, setFormInputValues] = useState({
    fullName: '',
    email: '',
    password: '',
    occupation: '',
    state: ''
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
    <form>
      <FullName formInputValues={formInputValues} handleChange={handleChange} />
      <Email formInputValues={formInputValues} handleChange={handleChange} />
      <Password formInputValues={formInputValues} handleChange={handleChange} />
      <Occupation formInputValues={formInputValues} handleChange={handleChange} options={occupations} />
      <State formInputValues={formInputValues} handleChange={handleChange} options={states} />
      <input type="submit" onClick={submitForm} />
    </form>
  );
}

export default Form;