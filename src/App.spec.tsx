import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  it('displays the Navbar component', () =>  {
    render(<App />)
    const label = screen.getByText(/Portrait Client/i);
    expect(label).toBeInTheDocument();
  });
});
