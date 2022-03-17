import React from 'react';
import { render, screen } from '@testing-library/react';
import ResultBox from './ResultBox';

const planet = {
  name: 'portrait',
  rotation_period: '1',
  orbital_period: '1',
  diameter: '1',
  climate: 'cold',
  gravity: '1',
  terrain: 'plain',
  surface_water: 'none',
  population: '1',
};

describe('ResultBox component', () => {
  it('correctly renders the text prop', () => {
    render(<ResultBox planet={planet} />);
    const label = screen.getByText(/portrait/i);
    expect(label).toBeInTheDocument();
  });

  it('renders the select label', () => {
    render(<ResultBox planet={planet} />);
    const label = screen.getByText(/select/i);
    expect(label).toBeInTheDocument();
  });
});
