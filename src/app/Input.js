import React from 'react';

function Input(props) {
  return (
    <div className={`input-wrapper ${props?.checkbox}`}>
      {props.children}
    </div>
  );
}

export default Input;