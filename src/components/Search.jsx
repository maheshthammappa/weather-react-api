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
    <form onSubmit={handleSubmit} className='flex'>
        <input 
        className='p-2 border border-gray-300 bg-black rounded-l-lg flex-1 border-r-0 outline-none' 
        type="text"
        value={city}
        onChange={(e)=> setCity(e.target.value)}
        placeholder='Enter the City Name' />

        <button className='cursor-pointer p-2 border border-gray-300 bg-blue-500 rounded-r-lg hover:bg-blue-600' type="submit">Submit</button>
    </form>
  )
}

export default Search