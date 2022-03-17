import React, { ChangeEvent, useState } from 'react';
import {
  InputGroup,
  Input,
  InputGroupText
} from 'reactstrap';
import ResultBox from './ResultBox';
import './search-bar.scss';
import axios from 'axios';
import { toast } from 'react-toastify';
import { PlanetModel } from '../../models/planet.model';
import { usePlanets } from '../../contexts/PlanetsContext';

const SearchBar = () => {
  const [planets, setPlanets] = useState<PlanetModel[]>([]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement> ) => {
    axios.get(`${process.env.REACT_APP_API_URL}/v1/swapi/planets?planet%5Bname%5D=${event?.target?.value}`)
        .then(response => setPlanets(response.data.data))
        .catch(error => toast(error.message, { position: 'top-center', type: 'error' }));
  };

  const handleBlur = (event: ChangeEvent<HTMLInputElement>) => {
    setTimeout(() => {
      setPlanets([]);
      event.target.value = '';
    }, 500);
  };

  const savedPlanets = usePlanets();

  return (
      <div className="d-flex justify-content-center search-box">
        <div className="w-75 mt-5 position-relative">
          <InputGroup>
            <Input onChange={handleInputChange} aria-label='planet-input' onBlur={handleBlur} />
            <InputGroupText>
              Type the name of your favorite planet!
            </InputGroupText>
          </InputGroup>
          { planets.length > 0 && (
              <div className="results-container position-absolute w-100">
                { planets.map((newPlanet, index) => {
                  if (savedPlanets.filter(planet => planet.name === newPlanet.name).length === 0) {
                    return (<ResultBox planet={newPlanet} key={index} />);
                  } else {
                    return undefined;
                  }
                })}
              </div>
          )}
        </div>
      </div>
  );
}

export default SearchBar;
