import React from 'react';
import Input from '../Input';

function Email(props) {
  return (
    <Input>
      <label htmlFor="email">Email</label>
      <input name="email" onChange={props.handleChange} value={props.formInputValues.email} type="email" autoComplete="on" required />
    </Input>
  );
}

export default Email;