export default function ZipCodeSearch(props: {
  zipCodeInputRef: React.RefObject<HTMLInputElement>;
  onHandleSubmit: (event: React.MouseEvent<HTMLButtonElement>) => void;
}) {
  const { zipCodeInputRef: zipCodeInput, onHandleSubmit: handleSubmit } = props;

  return (
    <>
      <h2>Search by a Zip Code</h2>
      <div className='input-group'>
        <input
          type=''
          placeholder='Get the current temperature for your favorite Zip Code'
          className='form-control'
          ref={zipCodeInput}
        />
        <span className='input-group-btn'>
          <button
            id='btnZip'
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
