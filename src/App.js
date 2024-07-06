import React from 'react';
import './App.css';
import CreateTeam from './components/CreateTeam.tsx';
import AvailablePlayers from './components/AvailablePlayers.tsx';

function App() {
  return (
    <div className="App">
      <CreateTeam />
      <AvailablePlayers />
    </div>
  );
}

export default App;
