import React from 'react';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import './App.css';
import Login from './components/login';
import Register from './components/register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
      </Routes>
    </Router>
  );
}

export default App;
