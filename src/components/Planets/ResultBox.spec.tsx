import React from 'react';
import { render, screen } from '@testing-library/react';
import ResultBox from './ResultBox';

const text = 'portrait';

describe('ResultBox component', () => {
  it('correctly renders the text prop', () => {
    render(<ResultBox text={text} />);
    const label = screen.getByText(/portrait/i);
    expect(label).toBeInTheDocument();
  });

  it('renders the select label', () => {
    render(<ResultBox text={text} />);
    const label = screen.getByText(/select/i);
    expect(label).toBeInTheDocument();
  });
});
