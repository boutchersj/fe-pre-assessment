import React from 'react';
import NavLinks from '../NavLinks';
import { Link } from 'react-router-dom';
import Input from '../Input';

function Email(props) {
  return (
    <Input>
      <label htmlFor="email">Email</label>
      <input data-testid='email-field' name="email" onChange={props.handleChange} value={props.formInputValues.email} type="email" autoComplete="on" autoFocus />
      <NavLinks>
        <Link to='/password' className='btn-nav btn-next' data-testid='email-next' style={{visibility: props.formInputValues.email ? 'visible' : 'visible' }}>Next</Link>
        <Link to='/' className='btn-nav btn-prev' data-testid='email-prev' style={{visibility: props.formInputValues.email ? 'visible' : 'visible' }}>Previous</Link>
      </NavLinks>
    </Input>
  );
}

export default Email;