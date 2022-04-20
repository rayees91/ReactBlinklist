import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
describe("logo img", () => {
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  // const linkElement = screen.getByTestId('custom');
  // const linkElement = screen.getByRole('linkElement', {name: /learn react/i})
  expect(linkElement).toBeInTheDocument();
});
});