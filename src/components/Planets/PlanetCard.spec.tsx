import React from 'react';
import { render, screen } from '@testing-library/react';
import PlanetCard from './PlanetCard';
import { defaultPlanet as planet } from '../../models/planet.model';

describe('PlanetCard component', () => {
  it("renders the planet's name", () => {
    render(<PlanetCard planet={planet} />);
    const label = screen.getByText(/Name: portrait/i);
    expect(label).toBeInTheDocument();
  });

  it("renders the planet's population", () => {
    render(<PlanetCard planet={planet} />);
    const label = screen.getByText(/Population: 1,000/i);
    expect(label).toBeInTheDocument();
  });

  it("renders the planet's rotation period", () => {
    render(<PlanetCard planet={planet} />);
    const label = screen.getByText(/Rotation Period: 1rp/i);
    expect(label).toBeInTheDocument();
  });

  it("renders the planet's orbital period", () => {
    render(<PlanetCard planet={planet} />);
    const label = screen.getByText(/Orbital Period: 1op/i);
    expect(label).toBeInTheDocument();
  });

  it("renders the planet's diameter", () => {
    render(<PlanetCard planet={planet} />);
    const label = screen.getByText(/Diameter: 1d/i);
    expect(label).toBeInTheDocument();
  });

  it("renders the planet's climate", () => {
    render(<PlanetCard planet={planet} />);
    const label = screen.getByText(/Climate: calid/i);
    expect(label).toBeInTheDocument();
  });

  it("renders the planet's gravity", () => {
    render(<PlanetCard planet={planet} />);
    const label = screen.getByText(/Gravity: 5g/i);
    expect(label).toBeInTheDocument();
  });

  it("renders the planet's terrain", () => {
    render(<PlanetCard planet={planet} />);
    const label = screen.getByText(/Terrain: beach/i);
    expect(label).toBeInTheDocument();
  });

  it("renders the planet's surface water", () => {
    render(<PlanetCard planet={planet} />);
    const label = screen.getByText(/Surface Water: 1sw/i);
    expect(label).toBeInTheDocument();
  });

  it('renders the delete button', () => {
    render(<PlanetCard planet={planet} />);
    const label = screen.getByText(/Delete/i);
    expect(label).toBeInTheDocument();
  });
});