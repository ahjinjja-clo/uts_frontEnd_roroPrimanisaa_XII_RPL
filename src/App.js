import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Navbar from './components/navbar/navbar.jsx';
import Pendaftaran from './components/main/pendaftaran.jsx';
import Peserta from './components/main/peserta.jsx';
import Recruitment from './components/main/recruitment.jsx';

function App() {
  return (
    <BrowserRouter basename='/uts_frontEnd_roroPrimanisaa_XII_RPL/'>
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Pendaftaran />} />
          <Route path="/recruitment" element={<Recruitment />} />
          <Route path="/peserta" element={<Peserta />} />
        </Routes>
      </div>
    </Router>
    </BrowserRouter>
  );
}

export default App;