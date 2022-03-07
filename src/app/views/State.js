import React from 'react';
import NavLinks from '../NavLinks';
import { Link } from 'react-router-dom';
import Input from '../Input';
import StatePicker from '../StatePicker';

function State(props) {
  return (
    <Input>
      <label htmlFor="state">State</label>
      <StatePicker data-testid='state-field' handleChange={props.handleChange} value={props.formInputValues.state} options={props.options} />
      <NavLinks>
        <Link to='/occupation' className='btn-nav' data-testid='state-prev'>Previous</Link>
        <Link to='/review' className='btn-nav' data-testid='state-next'>Next</Link>
      </NavLinks>
    </Input>
  );
}

export default State;