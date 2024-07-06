import React, { useState, useEffect} from 'react'

const AvailablePlayers = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3001/api/players/available')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error));
  }, []);

  const specialAbility = position => {
    switch (position) {
      case "Chaser":
        return "Light Speed"
      case "Seeker":
        return "Enhanced Vision"
      case "Beater":
        return "Power Swing"
      case "Keeper":
      default:
        return "Bold Reflexes"
    }
  }

  const removeFromList = id => {
    const filteredData = data.filter(element => element.id !== id);
    setData(filteredData);
  }

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
                  <td className="px-6 py-4">{specialAbility(element.position)}</td>
                  <td className="px-6 py-4">{<RemoveButton removeItem={() => removeFromList(element.id)} />}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </>
  )
}

const RemoveButton = ({removeItem}) => {
  return (
    <button
      type="button"
      className="text-white bg-red-400 hover:bg-red-500 focus:ring-4 focus:outline-none  font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 "
      onClick={removeItem}
      >
      <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  )
}

export default AvailablePlayers