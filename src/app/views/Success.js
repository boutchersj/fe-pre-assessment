import React from 'react';
import { Link } from 'react-router-dom';

function Success() {
  return (
    <section>
      <h1>Yay! All set!</h1>
      <Link to='/' className='btn-nav'>Restart form</Link>
    </section>
  );
}

export default Success;