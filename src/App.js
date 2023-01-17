import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { Samp } from './features/samp/Samp';
import AddStudent from './features/samp/AddStudent';
import Getstudent from './features/samp/Getstudent';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Samp></Samp>
        <br></br>
        <AddStudent></AddStudent>
        <br></br>
        <Getstudent/>
      </header>
    </div>
  );
}

export default App;
