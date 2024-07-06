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
      <div className="border-b border-gray-900/10 pb-12"></div>
      <table className="w-full text-sm text-left rtl:text-right pt-4">
        <thead className="text-xs text-gray-700 uppercase bg-gray-100">
          <tr>
            <th scope="col" className="px-6 py-3">Name</th>
            <th scope="col" className="px-6 py-3">Age</th>
            <th scope="col" className="px-6 py-3">Position</th>
            <th scope="col" className="px-6 py-3">Special Ability</th>
            <th scope="col" className="px-6 py-3">Remove from creation</th>
          </tr>
        </thead>
        <tbody>
          {
            data && 
            data.map(element => {
              return (
                <tr className="bg-white border-b" key={element.id}>
                  <td className="px-6 py-4">{element.name}</td>
                  <td className="px-6 py-4">{element.age}</td>
                  <td className="px-6 py-4">{element.position}</td>
                  <td className="px-6 py-4">{element.name}</td>
                  <td className="px-6 py-4"></td>
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