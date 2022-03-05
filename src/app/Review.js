import React from 'react';
import { Link } from 'react-router-dom';

function Review(props) {
  const { fullName, email, password, occupation, state } = props.formInputValues;
  return (
    <section>
      <p>Full Name: {fullName}</p>
      <p>Email: {email}</p>
      <p>Password: {password}</p>
      <p>Occupation: {occupation}</p>
      <p>State: {state}</p>
      <input type="submit" onClick={props.submitForm} value="Submit" />
      <section>
          <Link to='/state' className='btn-nav'>Previous</Link>
      </section>
    </section>
  )
}

export default Review;