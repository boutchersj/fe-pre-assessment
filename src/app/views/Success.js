import React from 'react';
import { Link } from 'react-router-dom';

function Success(props) {
  return (
    <section id='success-view'>
      <h1 id='success-message' data-testid='success-message'>Yay! All set!</h1>
      <Link to='/' id='restart' className='btn-nav' data-testid='restart' onClick={props.clearFormData}>Restart</Link>
    </section>
  );
}

export default Success;