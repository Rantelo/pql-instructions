import React, { useState } from 'react';
import './App.css';
import CreateTeam from './components/CreateTeam.tsx';
import AvailablePlayers from './components/AvailablePlayers.tsx';
import Nav from './components/Nav.tsx';



function App() {

  const [players, setPlayers] = useState();
  const [page, setPage] = useState("Create Team");

  return (
    <div className="App">
      <Nav page={page} setPage={setPage} />
      {
        page === "Create Team" &&
        <>
          <CreateTeam players={players} />
          <AvailablePlayers players={players} setPlayers={setPlayers} />
        </>
      }
      {
        page === "Teams" &&
        <>
        Hello
        </>
      }
    </div>
  );
}

export default App;
