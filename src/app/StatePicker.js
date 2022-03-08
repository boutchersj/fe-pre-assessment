import React from 'react';

function StatePicker(props) {
  const stateOptions = props.options.map(state => {
    return (
      <option key={state.abbreviation} value={state.abbreviation}>{state.name}</option>
    );
  });
  return (
    <select data-testid='state-picker' name="state" onChange={props.handleChange} value={props.value} autoFocus>
      {stateOptions}
    </select>		
  )
}

export default StatePicker;