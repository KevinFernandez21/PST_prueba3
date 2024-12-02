import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navigation from './components/Navigation.js'
import Show from './components/ShowEstudiante.js'
import './App.css';


function App() {
  return (
    <Router>
      <Navigation/>
      <Routes>
        <Route path="/estudiantes" element={<Show/>} />
        <Route path="/profesores" element={<div>Lista de Profesores</div>} />
      </Routes>
    </Router>
  );
}

export default App;

export const backend = {
  host: "http://localhost",
  port: 8080
}
