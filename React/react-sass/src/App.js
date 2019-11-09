import React from 'react';
import './App.scss';
import BoxOne from './BoxOne/BoxOne';
import BoxTwo from "./Box Two/BoxTwo";

function App() {
  return (
    <div className="wrapper">
      <header>
        <h1>React SASS</h1>
      </header>
      <BoxOne/>
      <BoxTwo/>
    </div>
  );
}

export default App;
