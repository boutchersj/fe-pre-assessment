import React from 'react';

function OccupationPicker(props) {
  const occupationOptions = props.options.map(occupation => {
    return (
      <option key={occupation} value={occupation}>{occupation}</option>
    );
  });
  return (
    <select name="occupation" onChange={props.handleChange} value={props.value}>
      {occupationOptions}
    </select>		
  )
}

export default OccupationPicker;