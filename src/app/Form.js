import React, { useState } from 'react';
import Input from './Input';

function Form() {
  const fullName = useState('');
  const email = useState('');
  const password = useState('');
  const occupation = useState('');
  const state = useState('');

  const submitForm = () => {

  };

  return (
    <form>
      <Input>
        <label htmlFor="fullName"></label>
        <input value={fullName}></input>
      </Input>
      <Input>
        <label htmlFor="email"></label>
        <input value={email}></input>
      </Input>
      <Input>
        <label htmlFor="password"></label>
        <input value={password}></input>
      </Input>
      <Input>
        <label htmlFor="occupation"></label>
        <input value={occupation}></input>
      </Input>
      <Input>
        <label htmlFor="state"></label>
        <input value={state}></input>
      </Input>
      <input type="submit" onClick={submitForm}/>
    </form>
  );
}

export default Form;