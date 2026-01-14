import React, { useState } from 'react'

const Search = ({fetchWeather}) => {

    const [city, setCity] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault();
        if (city.trim()) {
            fetchWeather(city.trim());
        }
        setCity('')
    }

  return (
  <form onSubmit={handleSubmit} className="flex w-full max-w-md mx-auto justify-between space-x-2">
  <input
    className="flex-grow px-4 py-2 text-base text-black bg-white border border-gray-400 rounded-md 
               outline-none focus:ring-2 focus:ring-blue-400 transition"
    type="text"
    value={city}
    onChange={(e) => setCity(e.target.value)}
    placeholder="Enter the City Name"
  />

  {city.trim() && (
    <button
      className="px-4 py-2 text-base font-medium text-white bg-blue-600 rounded-md 
                 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 
                 active:scale-95 transition-all duration-200 ease-in-out shadow-sm"
      type="submit"
    >
      Search
    </button>
  )}
</form>
  )
}

export default Search