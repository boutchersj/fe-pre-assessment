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

  };

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