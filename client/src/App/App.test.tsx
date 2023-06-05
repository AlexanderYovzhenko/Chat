import React from 'react'
import { render, screen } from '@testing-library/react'
import { App } from './App'

test('renders chat', () => {
  render(<App />)
  const Chat = screen.getByText(/Chat/i)
  expect(Chat).toBeInTheDocument()
})
