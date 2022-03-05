import React from 'react';
import Input from '../Input';
import OccupationPicker from '../OccupationPicker';

function Occupation(props) {
  return (
    <Input>
      <label htmlFor="occupation">Occupation</label>
      <OccupationPicker handleChange={props.handleChange} value={props.formInputValues.occupation} options={props.options} required />
    </Input>
  );
}

export default Occupation;