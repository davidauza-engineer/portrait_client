import React from 'react';
import './result-box.scss';
import { PlanetModel } from '../../models/planet.model';
import { usePlanetsUpdate } from '../../contexts/PlanetsContext';
import { toast } from 'react-toastify';

const ResultBox = ({ planet }: { planet: PlanetModel }) => {
  const updatePlanets = usePlanetsUpdate();

  const handleSelection = () => {
    updatePlanets(planet);
    toast(`${planet.name} successfully added.`, { position: 'top-center', type: 'success' })
  };

  return (
      <div>
        <div className="d-flex justify-content-between result-box" onClick={handleSelection}>
          <span className="ms-5 ps-5 text">{planet.name}</span>
          <span className="me-5 pe-5 text-muted">Select</span>
        </div>
      </div>
  );
}

export default ResultBox;
