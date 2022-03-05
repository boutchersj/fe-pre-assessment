import React from 'react';
import Input from '../Input';

function FullName(props) {
  return (
    <Input>
      <label htmlFor="fullName">Full Name</label>
      <input name="fullName" onChange={props.handleChange} value={props.formInputValues.fullName} type="text" autoComplete="on" required />
    </Input>
  );
}

export default FullName;