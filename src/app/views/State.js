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
        <Link to='/occupation' className='btn-nav btn-prev' data-testid='state-prev' style={{visibility: props.formInputValues.state ? 'visible' : 'visible' }}>Previous</Link>
        <Link to='/review' className='btn-nav btn-next' data-testid='state-next' style={{visibility: props.formInputValues.state ? 'visible' : 'visible' }}>Next</Link>
      </NavLinks>
    </Input>
  );
}

export default State;