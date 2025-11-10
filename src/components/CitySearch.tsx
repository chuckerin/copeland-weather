export default function CitySearch(props: {
  cityInputRef: React.RefObject<HTMLInputElement>;
  onHandleSubmit: (event: React.MouseEvent<HTMLButtonElement>) => void;
}) {
  const { cityInputRef: cityInput, onHandleSubmit: handleSubmit } = props;

  return (
    <>
      <h2>Search by a City</h2>
      <div className='input-group'>
        <input
          placeholder='Get the current temperature for your favorite city'
          className='form-control'
          ref={cityInput}
        />
        <span className='input-group-btn'>
          <button
            id='btnCity'
            onClick={handleSubmit}
            className='btn btn-secondary'
          >
            Submit
          </button>
        </span>
      </div>
    </>
  );
}
