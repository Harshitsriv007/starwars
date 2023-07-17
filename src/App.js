import React from 'react';
import './App.css';
import { Route, Routes, redirect } from 'react-router-dom';
import Login from './login';
import Planet from './planet';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/starwars" element={<Navigate to="/" replace={true}/>}
        <Route path='/planet' element={<Planet/>} />
      </Routes>
    </div>
  );
}

export default App;
