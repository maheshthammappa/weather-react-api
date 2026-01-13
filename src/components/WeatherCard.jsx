import React from 'react'

const WeatherCard = ({weatherdata}) => {
  return (
    <>
        <div className="flex flex-col items-center">
            <h3 className="text-3xl font-bold text-center p-5 ">{weatherdata.name}, {weatherdata.sys.country}</h3>
            <div className='flex items-center justify-around'>
                <img src={`http://openweathermap.org/img/wn/${weatherdata.weather[0].icon}@2x.png`} alt={weatherdata.weather[0].description} className='h-16 w-16'/>
                <p className='text-3xl'>{Math.round(weatherdata.main.temp-273.15)} C</p>
            </div>
            <p className='text-center capitalize text-gray-400'>{weatherdata.weather[0].description}</p>
        </div>
        <div className='grid grid-cols-2 mt-5 gap-5'>
            <div className='text-center'>
                <p className='text-gray-400'>Humidity</p>
                <p className='text-xl'>{weatherdata.main.humidity} %</p>
            </div>
            <div className='text-center'>
                <p className='text-gray-400'>Wind</p>
                <p className='text-xl'>{weatherdata.wind.speed} m/s</p>
            </div>
            <div className='text-center'>
                <p className='text-gray-400'>Pressure</p>
                <p className='text-xl'>{weatherdata.main.pressure} hPa</p>
            </div>
            <div className='text-center'>
                <p className='text-gray-400'>Feels Like</p>
                <p className='text-xl'>{Math.round(weatherdata.main.temp-273.15)} C</p>
            </div>
        </div>
    </>
  )
}

export default WeatherCard