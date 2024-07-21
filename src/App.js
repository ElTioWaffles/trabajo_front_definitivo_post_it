import React from 'react';
import NoteBoard from './NoteBoard';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <h1>Post It Simulator</h1>
      <NoteBoard />
    </div>
  );
};

export default App;