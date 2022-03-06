import React, { useState } from 'react';
import NavLinks from '../NavLinks';
import { Link } from 'react-router-dom';
import Input from '../Input';

function Password(props) {
  const [passwordType, setPasswordType] = useState('password');
  function changePasswordVisibility(e) {
    e.target.checked ? setPasswordType('text') : setPasswordType('password');
  }
  return (
    <Input>
      <label htmlFor='password'>Password</label>
      <input id='password-field' name='password' onChange={props.handleChange} value={props.formInputValues.password} type={passwordType} autoComplete="on" />
      <Input>
        <label htmlFor='password-visibility-checkbox'>Show Password</label>
        <input id='password-visibility-checkbox' name='password-visibility-checkbox' type="checkbox" onClick={changePasswordVisibility} />
      </Input>
      <NavLinks>
        <Link to='/email' className='btn-nav'>Previous</Link>
        <Link to='/occupation' className='btn-nav'>Next</Link>
      </NavLinks>
    </Input>
  );
}

export default Password;