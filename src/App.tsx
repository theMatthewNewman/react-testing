import React from 'react';
import { useState } from 'react';

import './App.css';
import Navbar from './features/navbar/Navbar';
import Button from '@mui/material/Button';

function App() {
  const [color, setColor] = useState('red')

  const clicks = () => {
    setColor('blue')
  }

  return (
    <div className="App">
      <Navbar>
        <h1>hello world</h1>
        <p>{color}</p>
        <Button variant="contained" onClick={clicks}>click me</Button>
      </Navbar>
      <Navbar>
        <h2>continue</h2>
      </Navbar>
      
    </div>
  );
}

export default App;
