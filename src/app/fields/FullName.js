import React from 'react';
import { Link } from 'react-router-dom'
import Input from '../Input';

function FullName(props) {
  return (
    
      <Input>
        <label htmlFor="fullName">Full Name</label>
        <input name="fullName" onChange={props.handleChange} value={props.formInputValues.fullName} type="text" autoComplete="on" required />
        <section>
          <Link to='/email' className='btn-next'>Next</Link>
        </section>
      </Input>
  );
}

export default FullName;