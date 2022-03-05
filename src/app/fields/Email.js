import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../Input';

function Email(props) {
  return (
    <Input>
      <label htmlFor="email">Email</label>
      <input name="email" onChange={props.handleChange} value={props.formInputValues.email} type="email" autoComplete="on" required />
      <section>
          <Link to='/' className='btn-nav'>Previous</Link>
          <Link to='/password' className='btn-nav'>Next</Link>
      </section>
    </Input>
  );
}

export default Email;