import React from 'react';
import NavLinks from '../NavLinks';
import { Link } from 'react-router-dom'
import Input from '../Input';

function FullName(props) {
  return (
      <Input>
        <label htmlFor="fullName">Full Name</label>
        <input data-testid='fullName-field' name="fullName" onChange={props.handleChange} value={props.formInputValues.fullName} type="text" autoComplete="on" />
        <NavLinks>
          <Link to='/email' id='fullName-next' data-testid='fullName-next' style={{visibility: props.formInputValues.fullName ? 'visible' : 'hidden' }}>Next</Link>
        </NavLinks>
      </Input>
  );
}

export default FullName;