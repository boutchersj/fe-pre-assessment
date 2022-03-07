// app.test.js
import { render } from '@testing-library/react'
import React from 'react'
import {MemoryRouter as Router} from 'react-router-dom'

import '@testing-library/jest-dom'

import App from '../App'

test('full app rendering/navigating', () => {
  render(
    <Router initialEntries={['/']}>
      <App />
    </Router>,
  )
  // verify page content for expected route
  // often you'd use a data-testid or role query, but this is also possible
  expect(screen.getByTestId('fullName-field')).toBeInTheDocument()

  // const rightClick = {button: 0}
  // userEvent.click(screen.getByText(/Next/i), rightClick)

  // check that the content changed to the new page
  // expect(screen.getByText(/Email/i)).toBeInTheDocument()
})