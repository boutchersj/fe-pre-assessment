import React from 'react';
import NavLinks from '../NavLinks';
import { Link } from 'react-router-dom';

function Review(props) {
  const { fullName, email, password, occupation, state } = props.formInputValues;
  return (
    <section>
      <h1>Please ensure your information is correct before submitting</h1>
      <p>Full Name: {fullName}</p>
      <p>Email: {email}</p>
      <p>Password: {password}</p>
      <p>Occupation: {occupation}</p>
      <p>State: {state}</p>
      <NavLinks>
        <Link to='/state' className='btn-nav'>Previous</Link>
        <Link to='/success' className='btn-nav' onClick={props.submitForm}>Submit</Link>
      </NavLinks>
    </section>
  )
}

export default Review;