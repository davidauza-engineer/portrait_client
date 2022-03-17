import React from 'react';
import './result-box.scss';
import { PlanetModel } from '../../models/planet.model';
import { usePlanetsUpdate } from '../../contexts/PlanetsContext';

const ResultBox = ({ planet }: { planet: PlanetModel }) => {
  const updatePlanets = usePlanetsUpdate();

  const handleSelection = () => {
    updatePlanets(planet);
  };

  return (
      <div className="d-flex justify-content-between result-box" onClick={handleSelection}>
        <span className="ms-5 ps-5 text">{planet.name}</span>
        <span className="me-5 pe-5 text-muted">Select</span>
      </div>
  );
}

export default ResultBox;
