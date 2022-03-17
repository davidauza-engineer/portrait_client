import React, { ReactNode, useContext, useState } from 'react';
import { PlanetModel } from '../models/planet.model';

const PlanetsContext = React.createContext([] as PlanetModel[]);
/* tslint:disable-next-line */
const PlanetsUpdateContext = React.createContext((newPlanet: PlanetModel):void => {});

export const usePlanets = () => {
  return useContext(PlanetsContext);
}

export const usePlanetsUpdate = () => {
  return useContext(PlanetsUpdateContext);
}

export const PlanetsProvider = ({ children }: { children: ReactNode}) => {
  const [planets, setPlanets] = useState<PlanetModel[]>([]);

  const updatePlanets = (newPlanet: PlanetModel) => {
    if (planets.filter(planet => planet.name === newPlanet.name).length === 0) {
      setPlanets([...planets, newPlanet]);
    } else {
      setPlanets(planets.filter(item => item !== newPlanet));
    }
  };

  return (
      <PlanetsContext.Provider value={planets}>
        <PlanetsUpdateContext.Provider value={updatePlanets}>
          {children}
        </PlanetsUpdateContext.Provider>
      </PlanetsContext.Provider>
  );
}
