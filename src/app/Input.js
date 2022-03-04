import React from 'react';

function Input(props) {
  return (
    <div className="input-wrapper flex-column">
      {props.children}
    </div>
  );
}

export default Input;