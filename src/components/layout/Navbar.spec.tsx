import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';

describe('Navbar component', () => {
  it('displays the Portrait Client label', () =>  {
    render(<Navbar />)
    const label = screen.getByText(/Portrait Client/i);
    expect(label).toBeInTheDocument();
  });

  it('displays the Planets label', () =>  {
    render(<Navbar />)
    const label = screen.getByText(/Planets/i);
    expect(label).toBeInTheDocument();
  });
});
