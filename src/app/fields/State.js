import React from 'react';
import Input from '../Input';
import StatePicker from '../StatePicker';

function State(props) {
  return (
    <Input>
      <label htmlFor="state">State</label>
      <StatePicker handleChange={props.handleChange} value={props.formInputValues.state} options={props.options} required />
    </Input>
  );
}

export default State;