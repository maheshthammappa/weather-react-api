import React, { useState } from 'react'

const Search = ({ fetchWeather }) => {
  const [city, setCity] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (city.trim()) {
      fetchWeather(city.trim())
      setCity('')
    }
  }

  return (
    <form 
      onSubmit={handleSubmit} 
      className="flex items-center gap-2 w-full max-w-md mx-auto"
    >
      {/* Input box */}
      <input
        className="flex-1 p-3 border border-gray-300 rounded-lg bg-white text-black shadow-sm 
                   focus:ring-2 focus:ring-blue-400 outline-none"
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter the City Name"
      />

      {/* Button only visible when text is entered */}
      {city.trim() && (
        <button
          className="px-5 py-3 bg-blue-500 text-white rounded-lg shadow-md 
                     hover:bg-blue-600 transition-colors"
          type="submit"
        >
          Search
        </button>
      )}
    </form>
  )
}

export default Search