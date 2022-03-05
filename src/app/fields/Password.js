import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../Input';

function Password(props) {
  return (
    <Input>
      <label htmlFor="password">Password</label>
      <input name="password" onChange={props.handleChange} value={props.formInputValues.password} type="password" autoComplete="on" required />
      <section>
          <Link to='/email' className='btn-nav'>Previous</Link>
          <Link to='/occupation' className='btn-nav'>Next</Link>
      </section>
    </Input>
  );
}

export default Password;