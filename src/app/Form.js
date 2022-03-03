import axios from 'axios';
// import ConfettiGenerator from 'confetti-js';
import React, { useEffect, useState } from 'react';
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

  function submitForm() {
    console.log(formInputValues);
    console.log(formInputValues.occupation);

    axios.post('https://frontend-take-home.fetchrewards.com/form', {
      "name": formInputValues.fullName,
      "email": formInputValues.email,
      "password": formInputValues.password,
      "occupation": formInputValues.occupation,
      "state": formInputValues.state
    })
    .then((res) => {
      console.log(res);
      // Include a fun celebration
      // alert('Your submission was successful! 🎉');
      // const confettiSettings = { target: 'my-canvas' };
      // const confetti = new ConfettiGenerator(confettiSettings);
      // confetti.render();
    })
    .catch((err) => { console.log(err) });
  }

  return (
    <form>
      <Input>
        <label htmlFor="fullName">Full Name</label>
        <input name="fullName" onChange={handleChange} value={formInputValues.fullName} type="text" autoComplete="on" required />
      </Input>
      <Input>
        <label htmlFor="email">Email</label>
        <input name="email" onChange={handleChange} value={formInputValues.email} type="email" autoComplete="on" required />
      </Input>
      <Input>
        <label htmlFor="password">Password</label>
        <input name="password" onChange={handleChange} value={formInputValues.password} type="password" autoComplete="on" required />
      </Input>
      <Input>
        <label htmlFor="occupation">Occupation</label>
        <OccupationPicker handleChange={handleChange} value={formInputValues.occupation} options={occupations} required />
      </Input>
      <Input>
        <label htmlFor="state">State</label>
        <StatePicker handleChange={handleChange} value={formInputValues.state} options={states} required />
      </Input>
      <input type="submit" onClick={submitForm}/>
    </form>
  );
}

export default Form;