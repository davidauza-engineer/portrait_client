import React from 'react';
import './App.scss';
import Navbar from './components/layout/Navbar';
import Planets from './components/Planets/Planets';

function App() {
  return (
    <div className="app">
      <header className="bg-light">
        <Navbar />
      </header>
      <section className="container">
        <Planets />
      </section>
    </div>
  );
}

export default App;
