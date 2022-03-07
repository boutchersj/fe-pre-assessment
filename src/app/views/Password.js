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
      <input data-testid='password-field' name='password' onChange={props.handleChange} value={props.formInputValues.password} type={passwordType} autoComplete="on" />
      <Input checkbox='showPasswordCheckboxWrapper'>
        <label htmlFor='password-visibility-checkbox'>Show Password</label>
        <input data-testid='password-visibility-checkbox' name='password-visibility-checkbox' type="checkbox" onClick={changePasswordVisibility} />
      </Input>
      <NavLinks>
        <Link to='/email' className='btn-nav btn-prev' data-testid='password-prev' style={{visibility: props.formInputValues.password ? 'visible' : 'visible' }}>Previous</Link>
        <Link to='/occupation' className='btn-nav btn-next' data-testid='password-next' style={{visibility: props.formInputValues.password ? 'visible' : 'visible' }}>Next</Link>
      </NavLinks>
    </Input>
  );
}

export default Password;