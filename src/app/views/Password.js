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
      <input id='password-field' data-testid='password-field' name='password' onChange={props.handleChange} value={props.formInputValues.password} type={passwordType} autoComplete="on" autoFocus />

      <div>
        <input type="checkbox" name='show-password-checkbox' id="show-password-checkbox" onClick={changePasswordVisibility}/>
        <label id='show-password-label' htmlFor='show-password-checkbox'>Show Password</label>
      </div>

      <NavLinks>
        <Link to='/occupation' className='btn-nav btn-next' data-testid='password-next' style={{visibility: props.formInputValues.password ? 'visible' : 'visible' }}>Next</Link>
        <Link to='/email' className='btn-nav btn-prev' data-testid='password-prev' style={{visibility: props.formInputValues.password ? 'visible' : 'visible' }}>Previous</Link>
      </NavLinks>
    </Input>
  );
}

export default Password;