import React from 'react';

function OccupationPicker(props) {
  const occupationOptions = props.options.map(occupation => {
    return (
      <option data-testid={occupation} key={occupation} value={occupation}>{occupation}</option>
    );
  });
  return (
    <select data-testid='occupation-picker' name="occupation" onChange={props.handleChange} value={props.value}>
      {occupationOptions}
    </select>		
  )
}

export default OccupationPicker;