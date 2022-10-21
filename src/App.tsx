import React, { useState, useEffect } from 'react';
import './App.css';
import Topbar from './components/topbar/Topbar';
import { fetchONNData } from './services/w3storage';

function App() {

  fetchONNData().then( onnIndexData => {
    console.log(onnIndexData);
  });

  return (
    <div>
      <Topbar />
    </div>
  );
}

export default App;
