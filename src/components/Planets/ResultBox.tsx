import React from 'react';
import './result-box.scss';

const ResultBox = ({ text }: { text: string }) => {
  return (
      <div className="d-flex justify-content-between result-box">
        <span className="ms-5 ps-5 text">{text}</span>
      </div>
  );
}

export default ResultBox;
