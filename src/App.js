import React, { useState } from 'react';
import './App.css';
import CreateTeam from './components/CreateTeam.tsx';
import AvailablePlayers from './components/AvailablePlayers.tsx';
import Nav from './components/Nav.tsx';
import Teams from './components/Teams.tsx';



function App() {

  const [availablePlayers, setAvailablePlayers] = useState();
  const [page, setPage] = useState("Teams");
  const [teams, setTeams] = useState();

  return (
    <div className="App">
      <Nav page={page} setPage={setPage} />
      {
        page === "Create Team" &&
        <>
          <CreateTeam availablePlayers={availablePlayers} />
          <AvailablePlayers availablePlayers={availablePlayers} setAvailablePlayers={setAvailablePlayers} />
        </>
      }
      {
        page === "Teams" &&
        <>
          <Teams teams={teams} setTeams={setTeams} />
        </>
      }
    </div>
  );
}

export default App;
