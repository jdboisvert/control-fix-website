import React from 'react';
import './App.css';
import ControllerGrid from './components/ControllerGrid'; 
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation />
      <main>
        <ControllerGrid />
      </main>
    </div>
  );
}

export default App;
