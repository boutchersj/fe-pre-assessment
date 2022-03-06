import React from 'react';
import NavLinks from '../NavLinks';
import { Link } from 'react-router-dom';
import Input from '../Input';
import StatePicker from '../StatePicker';

function State(props) {
  return (
    <Input>
      <label htmlFor="state">State</label>
      <StatePicker handleChange={props.handleChange} value={props.formInputValues.state} options={props.options} required />
      <NavLinks>
        <Link to='/occupation' className='btn-nav'>Previous</Link>
        <Link to='/review' className='btn-nav'>Next</Link>
      </NavLinks>
    </Input>
  );
}

export default State;