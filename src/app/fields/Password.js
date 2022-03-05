import React from 'react';
import Input from '../Input';

function Password(props) {
  return (
    <Input>
      <label htmlFor="password">Password</label>
      <input name="password" onChange={props.handleChange} value={props.formInputValues.password} type="password" autoComplete="on" required />
    </Input>
  );
}

export default Password;