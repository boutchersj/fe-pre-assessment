import React from 'react';
import NavLinks from '../NavLinks';
import { Link } from 'react-router-dom';
import Input from '../Input';

function Email(props) {
  return (
    <Input>
      <label htmlFor="email">Email</label>
      <input id='email-field' name="email" onChange={props.handleChange} value={props.formInputValues.email} type="email" autoComplete="on" />
      <NavLinks>
        <Link to='/' className='btn-nav'>Previous</Link>
        <Link to='/password' className='btn-nav'>Next</Link>
      </NavLinks>
    </Input>
  );
}

export default Email;