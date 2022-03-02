import React from 'react';

function StatePicker(props) {
  const stateOptions = props.options.map(state => {
    return (
      <option value={state.abbreviation}>{state.name}</option>
    );
  });
  return (
    <select name="state" onChange={props.handleChange} value={props.value}>
      {stateOptions}
    </select>		
  )
}

export default StatePicker;