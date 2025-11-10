import type { WeatherItem } from '../utils/types';

interface Props {
  weatherItemState: WeatherItem | null;
  requestErrorState: boolean;
}

export default function CurrentWeather(props: Props) {
  if (!props.weatherItemState || props.requestErrorState) return null;

  const { city, temperature, geoCode } = props.weatherItemState;
  const { lat, lon } = geoCode;

  return (
    <>
      <div>
        City: {city} {temperature ? `| Temperature: ${temperature}` : ' '}
        {geoCode ? ` | Geocode: ${lat},${lon}` : ''}
      </div>
    </>
  );
}
