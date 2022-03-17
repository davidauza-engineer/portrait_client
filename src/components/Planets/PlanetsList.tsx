import React from 'react';
import { usePlanets } from '../../contexts/PlanetsContext';
import PlanetCard from './PlanetCard';

const PlanetList = () => {
  const planets = usePlanets();

  return (
      <div className="d-flex flex-column align-items-center pt-3 pb-3">
        {planets.length > 0 && (
            planets.map((planet, index) => <PlanetCard planet={planet} key={index} />)
        )}
      </div>
  )
}

export default PlanetList;
