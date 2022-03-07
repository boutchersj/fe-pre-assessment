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

    const { fullName, email, password, occupation, state } = props.formInputValues;
    if (fullName && email && password && occupation && state) {
      axios.post('https://frontend-take-home.fetchrewards.com/form', formData)
      .then((res) => {
        console.log(res);
        props.setWasRedirected(true);
        // Include a fun celebration
        successRedirect();
      })
      .catch((err) => { console.log(err) });
    }
    else {
      alert('Please ensure every field has a value prior to submission.')
    }
  }

  return (
    <section data-testid='review-section'>
      <h1>Please ensure your information is correct before submitting</h1>
      <p data-testid='fullName-review'>Full Name: {fullName}</p>
      <p data-testid='email-review'>Email: {email}</p>
      <p data-testid='password-review'>Password: {password}</p>
      <p data-testid='occupation-review'>Occupation: {occupation}</p>
      <p data-testid='state-review'>State: {state}</p>
      <NavLinks>
        <Link to='/state' className='btn-nav' data-testid='review-prev'>Previous</Link>
        <input type='submit' className='btn-nav' onClick={submitForm} value='Submit' data-testid='submit'/>
      </NavLinks>
    </section>
  )
}

export default Review;