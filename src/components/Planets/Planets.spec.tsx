import React from 'react';
import { render, screen } from '@testing-library/react';
import Planets from './Planets';

describe('Planets component', () => {
  it('displays the SearchBar component', () =>  {
    render(<Planets />)
    const label = screen.getByText(/Type the name of your favorite planet!/i);
    expect(label).toBeInTheDocument();
  });
});
