import axios from 'axios';
import ConfettiGenerator from 'confetti-js';
import React, { useState } from 'react';
import Input from './Input';
import OccupationPicker from './OccupationPicker';
import StatePicker from './StatePicker';

function Form() {
  const [formInputValues, setFormInputValues] = useState({
    fullName: '',
    email: '',
    password: '',
    occupation: '',
    state: ''
  });

  function handleChange(e) {
    setFormInputValues({...formInputValues,
      [e.target.name]: e.target.value
    })
  }

  function submitForm() {
    axios.post('https://frontend-take-home.fetchrewards.com/form', {
      "name": formInputValues.fullName,
      "email": formInputValues.email,
      "password": formInputValues.password,
      "occupation": formInputValues.occupation,
      "state": formInputValues.state
    })
    .then(() => {
      alert('Your submission was successful! 🎉');
      const confettiSettings = { target: 'my-canvas' };
      const confetti = new ConfettiGenerator(confettiSettings);
      confetti.render();
    })
    .catch((err) => {
      // Credit: https://axios-http.com/docs/handling_errors

      if (err.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
      } else if (err.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(err.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', err.message);
      }
      console.log(err.config);
    });
  }

  return (
    <form>
      <Input>
        <label htmlFor="fullName">Full Name</label>
        <input name="fullName" onChange={handleChange} value={formInputValues.fullName} type="text"></input>
      </Input>
      <Input>
        <label htmlFor="email">Email</label>
        <input name="email" onChange={handleChange} value={formInputValues.email} type="email"></input>
      </Input>
      <Input>
        <label htmlFor="password">Password</label>
        <input name="password" onChange={handleChange} value={formInputValues.password} type="password"></input>
      </Input>
      <Input>
        <label htmlFor="occupation">Occupation</label>
        <OccupationPicker handleChange={handleChange} value={formInputValues.occupation} />
      </Input>
      <Input>
        <label htmlFor="state">State</label>
        <StatePicker handleChange={handleChange} value={formInputValues.state} />
      </Input>
      <input type="submit" onClick={submitForm}/>
    </form>
  );
}

export default Form;