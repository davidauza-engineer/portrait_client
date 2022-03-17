import React from 'react';
import { render, screen } from '@testing-library/react';
import ResultBox from './ResultBox';

describe('ResultBox component', () => {
  it('correctly renders the text prop', () => {
    render(<ResultBox text={'portrait'} />);
    const label = screen.getByText(/portrait/i);
    expect(label).toBeInTheDocument();
  });
});
