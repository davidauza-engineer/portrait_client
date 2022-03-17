import React from 'react';
import './App.scss';
import Navbar from './components/layout/Navbar';
import SearchBar from "./components/shared/SearchBar";

function App() {
  return (
    <div className="app">
      <header className="bg-light">
        <Navbar />
      </header>
      <section className="container">
        <SearchBar label={'Type the name of your favorite planet!'} />
      </section>
    </div>
  );
}

export default App;
