import React, { useEffect } from 'react';
import PlayersTable from './PlayersTable.tsx';

type Player = {
  id: Number;
  name: string;
  age: Number;
  position: string;
}

const AvailablePlayers = ({availablePlayers, setAvailablePlayers}) => {

  useEffect(() => {
    fetch('http://localhost:3001/api/players/available')
      .then(response => response.json())
      .then(json => setAvailablePlayers(json))
      .catch(error => console.error(error));
  }, []);


  const removeFromList = id => {
    const filteredPlayers = availablePlayers.filter(element => element.id !== id);
    setAvailablePlayers(filteredPlayers);
  }

  let noPlayers = (availablePlayers && availablePlayers.length > 0) 
    ? undefined
    : <div className="p-4 mt-10 text-sm text-slate-500 rounded-lg bg-slate-200 " role="alert">
      <span className="font-medium">You can't create a new team since there are no players available.</span>
    </div>;

  return (
    <>
      <PlayersTable players={availablePlayers} remove={removeFromList} removeLabel="Remove from creation" />
      <div className="border-b border-gray-900/10 pb-12"></div>
      { noPlayers }
    </>
  )
}


export default AvailablePlayers