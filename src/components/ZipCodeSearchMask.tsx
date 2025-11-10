import { useState, type SetStateAction } from 'react';
import MaskedInput from 'react-input-mask';

function ZipCodeSearchMask() {
  const [zipCode, setZipCode] = useState('');

  const handleChange = (e: { target: { value: SetStateAction<string> } }) => {
    setZipCode(e.target.value);
  };

  return (
    <>
      <div className='input-group'>
        <label htmlFor='zipCodeMask'>Zip Code:</label>
        <MaskedInput
          id='zipCodeMask'
          placeholder='Get the current temperature for your favorite Zip Code'
          className='form-control'
          mask='99999'
          value={zipCode}
          onChange={handleChange}
        />
      </div>
    </>
  );
}

export default ZipCodeSearchMask;
