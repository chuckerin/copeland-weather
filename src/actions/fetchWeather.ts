import axios from 'axios';
import {
  buildCityUrl,
  buildGeoCodesUrl,
  buildZipUrl,
} from '../utils/url-builder';

export async function fetchWeather(
  event: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>,
  cityInput: string,
  zipCodeInput: string,
  geoCodeInput: string
) {
  const buttonId = (event.target as HTMLButtonElement).id;
  let url = '';
  if (buttonId === 'btnCity') {
    url = buildCityUrl(cityInput);
  } else if (buttonId === 'btnZip') {
    url = buildZipUrl(zipCodeInput);
  } else {
    url = buildGeoCodesUrl(geoCodeInput);
  }
  const response = await axios.get(url).catch((error) => {
    if (error.response) {
      console.log('Axios Error');
    }
  });

  console.log('Axios Resp -> ', response);

  return response;
}
