import React, { useEffect, useState } from 'react'
import PlayersTable from './PlayersTable.tsx';

const Teams = ({teams, setTeams}) => {

  // Local state to refresh view
  const [updateView, setUpdateView] = useState(0);

  // Fetch teams
  useEffect(() => {
    fetch('http://localhost:3001/api/teams')
      .then(response => response.json())
      .then(json => setTeams(json))
      .catch(error => console.error(error));
  }, [updateView]);

  // Expel player from team
  const removeItem = (id) => {
    fetch('http://localhost:3001/api/removeFromTeam', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({id})
    })
    .then(response => response.json())

    // Force view refresh after expelling player
    setUpdateView(Math.random());
  };

  return (
  <>
    {
      teams &&
        teams.map((team, id) => {
          return (
            <div key={id}>
              <div className="pb-12"></div>
              <p className="text-3xl pb-2 text-gray-900">{team.name}</p>
              <span className="text-base pb-2 pl-2 text-gray-900">{team.slogan}</span>
              <PlayersTable players={team.players} remove={removeItem} removeLabel={"Expel from team"} />
            </div>
          )
        })
    }
  </>
  )
}

export default Teams;