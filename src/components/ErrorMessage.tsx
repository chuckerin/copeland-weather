import type { WeatherItem } from '../utils/types';

interface Props {
  weatherItemState: WeatherItem | null;
  requestErrorState: boolean;
}

export default function ErrorMessage(props: Props) {
  const weatherItem = props.weatherItemState;
  const requestError = props.requestErrorState;

  if (!requestError) return;

  console.log('weatherItem -> ', weatherItem);
  console.log('requestError -> ', requestError);
  return (
    <>
      <div>Invalid Search Entry!</div>
    </>
  );
}
