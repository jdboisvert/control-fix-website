import React from 'react';
import './App.css';
import ControllerGrid from './components/ControllerGrid';
import ControllerDetails from './components/ControllerDetails';
import About from './components/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <main>
          <Routes>
            <Route path="/control-fix-website" element={<ControllerGrid />} />
            <Route path="/control-fix-website/controller/:id" element={<ControllerDetails />} />
            <Route path="/control-fix-website/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
