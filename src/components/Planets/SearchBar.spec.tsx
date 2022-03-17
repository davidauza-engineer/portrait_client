import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from './SearchBar';

const setup = () => {
  const utils = render(<SearchBar />);
  const input = screen.getByLabelText('planet-input');
  return {
    input,
    ...utils
  }
}

describe('SearchBar component', () => {
  it('appropriately renders the component', () => {
    render(<SearchBar />);
    const label = screen.getByText(/Type the name of your favorite planet!/i);
    expect(label).toBeInTheDocument();
  });

  it('appropriately receives input values', () => {
    const value = 'animal planet';
    const { input } = setup();
    fireEvent.change(input, { target: { value } });
    expect((input as HTMLInputElement).value).toBe(value)
  });
});
