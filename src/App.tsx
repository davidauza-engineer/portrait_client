import React from 'react';
import './App.scss';
import Navbar from './components/layout/Navbar';

function App() {
  return (
    <div className="app">
      <header className="bg-light">
        <Navbar />
      </header>
    </div>
  );
}

export default App;
