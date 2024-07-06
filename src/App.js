import React, { useState } from 'react';
import './App.css';
import CreateTeam from './components/CreateTeam.tsx';
import AvailablePlayers from './components/AvailablePlayers.tsx';

function App() {

  const [players, setPlayers] = useState(null);

  return (
    <div className="App">
      <CreateTeam players={players} />
      <AvailablePlayers players={players} setPlayers={setPlayers} />
    </div>
  );
}

export default App;
