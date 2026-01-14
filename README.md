# Weather React API

A simple weather application built using React and Vite that allows users to search for a city and view real-time weather information using a public Weather API.

## Live Demo

https://maheshthammappa.github.io/weather-react-api/

---

## Features

- Search weather by city name
- Displays temperature, humidity, wind speed, and weather condition
- Shows loading state while fetching weather data
- Responsive user interface
- Deployed using GitHub Pages

---

## Tech Stack

- React
- Vite
- JavaScript
- CSS
- Weather API
- GitHub Pages

---

## Getting Started (Local Setup)

### Prerequisites

- Node.js
- npm

### Installation Steps

1. Clone the repository
git clone https://github.com/maheshthammappa/weather-react-api.git


2. Navigate to the project directory


cd weather-react-api


3. Install dependencies


npm install


4. Create a `.env` file in the root directory and add your API key


VITE_API_KEY=your_weather_api_key


5. Start the development server


npm run dev


6. Open the app in your browser


http://localhost:5173


---

## Usage

1. Enter a city name in the search bar
2. Press Enter or click the search button
3. Weather data is displayed after loading

---

## Deployment (GitHub Pages)

### Required Configuration

**vite.config.js**


base: "/weather-react-api/"


**package.json**


"homepage": "https://maheshthammappa.github.io/weather-react-api
"


### Deploy Command



npm run deploy


> The `dist` folder is generated during build and automatically deployed to the `gh-pages` branch.

---

## Known Issues

- Previous city weather data remains visible while loading a new city
- No user-friendly error message for invalid city names
- Loading UI can be improved

---

## Future Enhancements

- Clear previous weather data before new search
- Display proper error messages
- Improve search bar user experience
- Add multi-day weather forecast

---

## License

This project is open-source and available under the MIT License.

---

## Project Summary

A React + Vite weather application that fetches real-time weather data using an external API and demonstrates static deployment using GitHub Pages.
