import React from 'react';

function OccupationPicker(props) {
  return (
    <select name="occupation" onChange={props.handleChange} value={props.value}>
      <option value="FE Engineer">FE Engineer</option>
      <option value="Design">Design</option>
      <option value="Support">QA</option>
    </select>		
  )
}

export default OccupationPicker;