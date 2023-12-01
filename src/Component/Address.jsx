// Address.js
import React from 'react';
import { useFormContext } from '../FormContext';

const Address = ({ onNext, onPrev }) => {
  const { updateFormData, formData } = useFormContext();
  const [street, setStreet] = React.useState(formData.street || '');
  const [city, setCity] = React.useState(formData.city || '');
  const [zipCode, setZipCode] = React.useState(formData.zipCode || '');

  const handleNext = () => {
    // Basic validation
    if (!street || !city || !zipCode) {
      alert('Please fill in all fields.');
      return;
    }
    if (!/^[a-zA-Z]+$/.test(street)) {
      alert('Street name should contain only alphabets.');
      return;
    }

    if (!/^[a-zA-Z]+$/.test(city)) {
      alert('city name should contain only alphabets.');
      return;
    }
    if (!/^\d{6}$/.test(zipCode)) {
      alert('zipcode should be 6 digit code.');
      return;
    }

    updateFormData({ street, city, zipCode });
    onNext();
  };

  const handlePrev = () => {
    onPrev();
  };

  return (
    <div>
      <h2>Address</h2>
      <div className="input-field">
        <input type="text" value={street} onChange={(e) => setStreet(e.target.value)} />
        <span>Street:</span>
      </div>
      <div className="input-field">
        <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
        <span>City:</span>
      </div>
      <div className="input-field">
        <input type="text" value={zipCode} onChange={(e) => setZipCode(e.target.value)} />
        <span>Zip Code:</span>
      </div>
      {/* <button onClick={handlePrev}>Previous</button> */}
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Address;
