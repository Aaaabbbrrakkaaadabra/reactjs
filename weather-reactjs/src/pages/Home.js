import { useState } from 'react';
import { getWeatherByCity } from '../api/weather';
import GetWeatherLocation from '../components/GetWeatherLocation'
import WeatherCard from '../components/WeatherCard';

function Home() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const handleSearch = async () => {
    const data = await getWeatherByCity(city);
    setWeather(data);
  };

  return (
    <div>
      <input 
        type="text" 
        value={city} 
        onChange={(e) => setCity(e.target.value)} 
        placeholder="Entrez une ville"
      />
      <button onClick={handleSearch}>Rechercher</button>

      <WeatherCard weather={weather} />
      <GetWeatherLocation />
    </div>
  );
}

export default Home;
