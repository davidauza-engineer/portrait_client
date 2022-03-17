import React, { ChangeEvent, useState } from 'react';
import {
  InputGroup,
  Input,
  InputGroupText
} from 'reactstrap';
import ResultBox from './ResultBox';
import './search-bar.scss';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PlanetModel } from '../../models/planet.model';

const SearchBar = () => {
  const [planets, setPlanets] = useState<PlanetModel[]>([]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement> ) => {
    axios.get(`${process.env.REACT_APP_API_URL}/v1/swapi/planets?planet%5Bname%5D=${event?.target?.value}`)
        .then(response => setPlanets(response.data.data))
        .catch(error => toast(error.message, { position: 'top-center', type: 'error' }));
  };

  return (
      <div className="d-flex justify-content-center search-box">
        <div className="w-75 mt-5 position-relative">
          <InputGroup>
            <Input onChange={handleInputChange} aria-label='planet-input'/>
            <InputGroupText>
              Type the name of your favorite planet!
            </InputGroupText>
          </InputGroup>
          { planets.length > 0 && (
              <div className="results-container position-absolute w-100">
                { planets.map((planet, index) => <ResultBox planet={planet} key={index} />)}
              </div>
          )}
          <ToastContainer />
        </div>
      </div>
  );
}

export default SearchBar;
