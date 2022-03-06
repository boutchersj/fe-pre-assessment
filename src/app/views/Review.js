import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ConfettiGenerator from 'confetti-js';
import NavLinks from '../NavLinks';
import { Link } from 'react-router-dom';

function Review(props) {
  const { fullName, email, password, occupation, state } = props.formInputValues;
  let navigate = useNavigate();

  function successRedirect() {
    navigate('/success', () => props.setWasRedirected(false));
    const confettiSettings = { target: 'my-canvas' };
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
    setTimeout(() => confetti.clear(), 5000);
  }

  function submitForm(e) {
    e.preventDefault();

    const formData = {
      "name": props.formInputValues.fullName,
      "email": props.formInputValues.email,
      "password": props.formInputValues.password,
      "occupation": props.formInputValues.occupation,
      "state": props.formInputValues.state
    };

    axios.post('https://frontend-take-home.fetchrewards.com/form', formData)
      .then((res) => {
        console.log(res);
        props.setWasRedirected(true);
        // Include a fun celebration
        successRedirect();
      })
      .catch((err) => { console.log(err) });
  }
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
        <input type='submit' className='btn-nav' onClick={submitForm} value='Submit' />
      </NavLinks>
    </section>
  )
}

export default Review;