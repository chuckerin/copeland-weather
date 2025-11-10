import { useRef, useState } from 'react';

import Header from './components/Header';
import CitySearch from './components/CitySearch';
import ZipCodeSearch from './components/ZipCodeSearch';
// import ZipCodeSearchMask from './components/ZipCodeSearchMask';
import GeoCodeSearch from './components/GeoCodeSearch';
import CurrentWeather from './components/CurrentWeather';
import ErrorMessage from './components/ErrorMessage';
import Footer from './components/Footer';
// import { kelvinToFahrenheit } from './utils/converters';
import type { WeatherItem } from './utils/types';
import { fetchWeather } from './actions/fetchWeather';

function App() {
  // Refs for the easy input fields
  const cityInput = useRef<HTMLInputElement>(null!);
  const zipCodeInput = useRef<HTMLInputElement>(null!);
  const geoCodeInput = useRef<HTMLInputElement>(null!);

  const [requestError, setRequestError] = useState(false);

  // State for the current weather item
  const [weatherItem, setWeatherItem] = useState<WeatherItem | null>(null);
  function handleSubmit(
    event:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLButtonElement>
  ) {
    event.preventDefault();
    fetchWeather(
      event,
      cityInput.current!.value,
      zipCodeInput.current!.value,
      geoCodeInput.current!.value
    ).then((response) => {
      if (!response) {
        setRequestError(true);
        return;
      } else {
        setRequestError(false);
      }
      const weatherItem: WeatherItem = {
        city: response.data.name,
        temperature: response.data.main.temp + '°f',
        geoCode: {
          lat: response.data.coord.lat,
          lon: response.data.coord.lon,
        },
      };
      setWeatherItem(weatherItem);

      console.log('API Response:', response.data);
      console.log('Weather Item:', weatherItem);
    });
  }

  return (
    <div>
      <Header />
      <form onSubmit={handleSubmit}>
        <CitySearch cityInputRef={cityInput} onHandleSubmit={handleSubmit} />
        <ZipCodeSearch
          zipCodeInputRef={zipCodeInput}
          onHandleSubmit={handleSubmit}
        />
        {/* <ZipCodeSearchMask /> */}
        <GeoCodeSearch
          geoCodeInputRef={geoCodeInput}
          onHandleSubmit={handleSubmit}
        />
        <CurrentWeather
          weatherItemState={weatherItem}
          requestErrorState={requestError}
        />
        <ErrorMessage
          weatherItemState={weatherItem}
          requestErrorState={requestError}
        />
      </form>
      <Footer />
    </div>
  );
}

export default App;
