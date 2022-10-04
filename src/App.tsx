import React from 'react';

import './App.css';
import Navbar from './features/navbar/Navbar';
import Button from '@mui/material/Button';

function App() {
  return (
    <div className="App">
      <Navbar>
        <h1>hello world</h1>
        <Button variant="contained">click me</Button>
      </Navbar>
      <Navbar>
        <h2>continue</h2>
      </Navbar>
      
    </div>
  );
}

export default App;
