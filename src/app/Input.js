import React from 'react';

function Input(props) {
  const inputWrapperStyles = { 
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  };

  return (
    <div style={inputWrapperStyles}>
      {props.children}
    </div>
  );
}

export default Input;