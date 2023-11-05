import React from 'react';
import './App.css';
import ControllerGrid from './components/ControllerGrid';
import ControllerDetails from './components/ControllerDetails';
import ContactForm from './components/ContactForm'; // Adjust the path as necessary
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<ControllerGrid />} />
            <Route path="/controller/:id" element={<ControllerDetails />} />
            <Route path="/contact" element={<ContactForm />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
