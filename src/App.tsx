import React from 'react';
import './App.scss';
import Navbar from './components/layout/Navbar';
import Planets from './components/Planets/Planets';
import { PlanetsProvider } from './contexts/PlanetsContext';

function App() {
  return (
      <PlanetsProvider>
        <div className="app">
          <header className="bg-light">
            <Navbar/>
          </header>
          <section className="container">
            <Planets/>
          </section>
        </div>
      </PlanetsProvider>

  );
}

export default App;
