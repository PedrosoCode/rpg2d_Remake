import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Componentes para as páginas
import Home from './components/pages/Home';
import Teste from './components/pages/Teste';
import Info from './components/pages/Info';
import InserirFrutas from './components/components/InserirFrutas';

const App = () => {
  return (
    <Router>
      <div>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Teste" element={<Teste />} />
          <Route path="/Info" element={<Info />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;