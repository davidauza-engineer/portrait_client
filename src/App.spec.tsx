import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  it('displays the Navbar component', () =>  {
    render(<App />)
    const label = screen.getByText(/Portrait Client/i);
    expect(label).toBeInTheDocument();
  });

  it('displays the SearchBar component', () =>  {
    render(<App />)
    const label = screen.getByText(/Type the name of your favorite planet!/i);
    expect(label).toBeInTheDocument();
  });
});
