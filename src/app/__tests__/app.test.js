// app.test.js
import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import {MemoryRouter as Router} from 'react-router-dom';
import App from '../App';

test('Happy path', () => {
  
  render(
    <Router initialEntries={['/']}>
      <App />
    </Router>,
  );

  // Verify start on Full Name
  const fullNameField = screen.getByTestId('fullName-field');
  expect(fullNameField).toBeInTheDocument();
  
  // Enter Full Name & Navigate to Email
  userEvent.type(fullNameField, 'Test Name');
  const fullNameNextButton = screen.getByTestId('fullName-next');
  userEvent.click(fullNameNextButton);
  const emailField = screen.getByTestId('email-field');
  expect(emailField).toBeInTheDocument();

  // Enter Email & Navigate to Password
  userEvent.type(emailField, 'test@email.com');
  const emailNextButton = screen.getByTestId('email-next');
  userEvent.click(emailNextButton);
  const passwordField = screen.getByTestId('password-field');
  expect(passwordField).toBeInTheDocument();

  // Enter Password & Navigate to Occupation
  userEvent.type(passwordField, 'testPassword123!');
  const passwordNextButton = screen.getByTestId('password-next');
  userEvent.click(passwordNextButton);
  const occupationPicker = screen.getByTestId('occupation-picker');
  expect(occupationPicker).toBeInTheDocument();

  // Choose Default Occupation & Navigate to State
  const occupationNextButton = screen.getByTestId('occupation-next');
  userEvent.click(occupationNextButton);
  const statePicker = screen.getByTestId('state-picker');
  expect(statePicker).toBeInTheDocument();

  // Choose Default State & Navigate to Review
  const stateNextButton = screen.getByTestId('state-next');
  userEvent.click(stateNextButton);
  const reviewSection = screen.getByTestId('review-section');
  expect(reviewSection).toBeInTheDocument();

  // Validate Review values & Submit
  const fullName = screen.getByTestId('fullName-review');
  const email = screen.getByTestId('email-review');
  const password = screen.getByTestId('password-review');
  const occupation = screen.getByTestId('occupation-review');
  const state = screen.getByTestId('state-review');

  expect(fullName).toHaveTextContent('Full Name: Test Name');
  expect(email).toHaveTextContent('Email: test@email.com');
  expect(password).toHaveTextContent('Password: testPassword123!');
  expect(occupation).toHaveTextContent('Occupation: Head of Shrubbery');
  expect(state).toHaveTextContent('State: AL');

  // Submit the Form
  const submitButton = screen.getByTestId('submit');
  userEvent.click(submitButton);
  waitFor(() => {
    expect(screen.getByTestId('success-message')).toBeInTheDocument();
      // Return to Beginning of Form (Full Name)
      const restartButton = screen.getByTestId('restart');
      userEvent.click(restartButton);
      expect(fullNameField).toBeInTheDocument();
  }, { timeout: 3000 });
})