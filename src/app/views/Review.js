import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ConfettiGenerator from 'confetti-js';
import NavLinks from '../NavLinks';
import { Link } from 'react-router-dom';
import { FaExclamationCircle } from 'react-icons/fa'
import { IconContext } from 'react-icons'

function Review(props) {
  const [missingFields, setMissingFields] = useState(false);
  const errorVisibility = missingFields ? 'visible' : 'hidden';
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
      setMissingFields(true);
    }
  }

  return (
    <section id='review-view'>
      <h1 id='review-message'>Does everything look correct?</h1>
      <section id='review-section' data-testid='review-section'>
        <p data-testid='fullName-review'>Full Name: {fullName}</p>
        <p data-testid='email-review'>Email: {email}</p>
        <p data-testid='password-review'>Password: {password}</p>
        <p data-testid='occupation-review'>Occupation: {occupation}</p>
        <p data-testid='state-review'>State: {state}</p>
      </section>

      <IconContext.Provider value={{ size: '2em' }}>
        <div id='error-message' style={{ visibility: errorVisibility }}>
          <FaExclamationCircle />
          <p id='error-text'>One or more fields are missing data.</p>
        </div>
      </IconContext.Provider>

      <NavLinks>
        <a id='submit' type='submit' onClick={submitForm} data-testid='submit'>Submit</a>
        <Link to='/state' className='btn-nav btn-prev' data-testid='review-prev'>Previous</Link>
      </NavLinks>
    </section>
  )
}

export default Review;