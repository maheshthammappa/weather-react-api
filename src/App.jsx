import { useState } from 'react';
import Search from './components/Search.jsx'
import WeatherCard from './components/WeatherCard.jsx';
import axios from 'axios';
import bg from './assets/background.mp4'

function App() {
  const [weather, setWeather]  = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const API_KEY= import.meta.env.VITE_API_KEY;
  const fetchWeather = async (city) => {
      setLoading(true);
      setError('');
      setWeather(null);

      try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
        const response = await axios.get(url);
        setWeather(response.data);
      }
      catch (err) {
        if (err.response && err.response.status === 404) {
          setError("City name is invalid! Please enter another city name.");
        } else {
          setError("Something went wrong. Please try again.");
        }
        setWeather(null);
      }
      finally {
        setLoading(false);
      }
  }


  return (
    <div className="relative z-10 bg-blue-300 flex flex-col items-center justify-center min-h-screen overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 h-full w-full object-cover -z-10"
      >
        <source src={bg} type="video/mp4" />
      </video>
      <div className="bg-black/70 border-white rounded-lg text-white p-8 shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-center pb-5">WEATHER APP</h1>
        <Search fetchWeather= {fetchWeather} />
        {error && <p className='mt-5 text-red-500'>{error}</p>}
        {loading && <p className='mt-5'>Loading...</p>}
        {weather && <WeatherCard weatherdata= {weather}/> }
      </div>
    </div>
  )
}

export default App
