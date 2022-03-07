import React from 'react';
import { Link } from 'react-router-dom';

function Success(props) {
  return (
    <section>
      <h1 data-testid='success-message'>Yay! All set!</h1>
      <Link to='/' className='btn-nav' data-testid='restart' onClick={props.clearFormData}>Restart form</Link>
    </section>
  );
}

export default Success;