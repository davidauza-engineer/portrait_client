import React, {ChangeEvent, useState} from 'react';
import {
  InputGroup,
  Input,
  InputGroupText
} from 'reactstrap';
import ResultBox from './ResultBox';
import './search-box.scss';

const SearchBar = ({ label }: { label: string }) => {
  const [results, setResults] = useState<string[]>([]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement> ) => {
    setResults([...results, event?.target?.value]);
  };

  return (
      <div className="d-flex justify-content-center search-box">
        <div className="w-75 mt-5 position-relative">
          <InputGroup>
            <Input onChange={handleInputChange}/>
            <InputGroupText>
              {label}
            </InputGroupText>
          </InputGroup>
          { results.length > 0 && (
              <div className="results-container position-absolute w-100">
                { results.map(result => <ResultBox text={result} />)}
              </div>
          )}
        </div>
      </div>
  );
}

export default SearchBar;
