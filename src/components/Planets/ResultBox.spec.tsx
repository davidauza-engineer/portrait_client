import React from 'react';
import { render, screen } from '@testing-library/react';
import ResultBox from './ResultBox';
import { defaultPlanet as planet } from '../../models/planet.model';

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
