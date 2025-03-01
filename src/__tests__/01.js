import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
// import App from '../final/01'
import App from '../exercise/01'

test('typing a name shows a greeting', () => {
  render(<App />)
  userEvent.type(screen.getByRole('textbox', {name: /name/i}), 'bob')
  expect(screen.getByText(/hello.*bob/i)).toBeInTheDocument()
})
