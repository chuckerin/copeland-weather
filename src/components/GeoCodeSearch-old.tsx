export default function GeoCodeSearch(props: {
  geoCodeInputState: { lat: string; lon: string } | null;
  handleGeoCodeInputChangeState: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  onHandleSubmit: (event: React.MouseEvent<HTMLButtonElement>) => void;
}) {
  const {
    geoCodeInputState: geoCodeInput,
    handleGeoCodeInputChangeState: handleGeoCodeInputChange,
    onHandleSubmit: handleSubmit,
  } = props;

  return (
    <>
      <h2>Search by Geocode</h2>
      <div className='input-group'>
        <input
          placeholder='Gimme a Latitude'
          className='card-form-control'
          name='lat'
          value={geoCodeInput ? geoCodeInput.lat : ''}
          onChange={handleGeoCodeInputChange}
        />
        <input
          placeholder='Gimme a Longitude'
          className='card-form-control'
          name='lon'
          value={geoCodeInput ? geoCodeInput.lon : ''}
          onChange={handleGeoCodeInputChange}
        />
        <span className='input-group-btn'>
          <button onClick={handleSubmit} className='btn btn-secondary'>
            Submit
          </button>
        </span>
      </div>
    </>
  );
}
