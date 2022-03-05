import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../Input';
import StatePicker from '../StatePicker';

function State(props) {
  return (
    <Input>
      <label htmlFor="state">State</label>
      <StatePicker handleChange={props.handleChange} value={props.formInputValues.state} options={props.options} required />
      <section>
          <Link to='/occupation' className='btn-nav'>Previous</Link>
          <Link to='/review' className='btn-nav'>Next</Link>
      </section>
    </Input>
  );
}

export default State;