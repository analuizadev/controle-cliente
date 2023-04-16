import React from 'react';
import './App.css';
import Home from './componentes/Pages/Home';
import ClientDetails from './componentes/Pages/ClientDetails';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Fragment } from 'react';

function App() {
  return (
    <Router>
      <Fragment>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="rows/details/:id" element={<ClientDetails />} />
        </Routes>
      </Fragment>
    </Router>
  );
}

export default App;
