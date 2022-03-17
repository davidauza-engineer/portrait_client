import React from 'react';
import './App.scss';
import Navbar from './components/layout/Navbar';
import Planets from './components/Planets/Planets';
import { PlanetsProvider } from './contexts/PlanetsContext';
import { ToastContainer } from "react-toastify";

function App() {
  return (
      <PlanetsProvider>
        <div>
          <header className="bg-light">
            <Navbar/>
          </header>
          <section className="container">
            <Planets/>
          </section>
        </div>
        <ToastContainer />
      </PlanetsProvider>

  );
}

export default App;
