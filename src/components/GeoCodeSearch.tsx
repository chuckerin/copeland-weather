export default function GeoCodeSearch(props: {
  geoCodeInputRef: React.RefObject<HTMLInputElement>;
  onHandleSubmit: (event: React.MouseEvent<HTMLButtonElement>) => void;
}) {
  const { geoCodeInputRef: geoCodeInput, onHandleSubmit: handleSubmit } = props;

  return (
    <>
      <h2>Search by Geocode</h2>
      <div className='input-group'>
        <input
          placeholder='Gimme a Geocode by Latitude and Longitude seperated by a comma'
          className='form-control'
          ref={geoCodeInput}
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
