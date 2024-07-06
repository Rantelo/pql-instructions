import React, { useState, useEffect} from 'react'

const AvailablePlayers = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3001/api/players/available')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error));
  }, []);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Position</th>
            <th>Special Ability</th>
            <th>Remove from creation</th>
          </tr>
        </thead>
        <tbody>
          {
            data && 
            data.map(element => {
              return (
                <tr key={element.id}>
                  <td>{element.name}</td>
                  <td>{element.age}</td>
                  <td>{element.position}</td>
                  <td>{element.name}</td>
                  <td></td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </>
  )
}

export default AvailablePlayers