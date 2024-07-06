import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Layout from './Layout';
import { isAuthenticated } from './utils/auth';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={isAuthenticated() ? <Navigate to="/home" /> : <Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
