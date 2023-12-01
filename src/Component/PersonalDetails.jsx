// PersonalDetails.js
import React from 'react';
import { useFormContext } from '../FormContext';

const PersonalDetails = ({ onNext }) => {
  const { updateFormData } = useFormContext();
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');

  const handleNext = () => {
    // Basic validation
    if (!/^[a-zA-Z]+$/.test(name)) {
      alert('Name should contain only alphabets.');
      return;
    }

    if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)){
      alert('email not valid')
      return;
    }

    if (!/^\d{10}$/.test(phone)) {
      alert('Phone number should contain 10 digits.');
      return;
    }

    

    updateFormData({ name, email, phone });
    onNext();
  };

  return (
    <div>
      <h2>Personal Details</h2>
      <div className='input-field'>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>

      <div className='input-field'>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      
      <div className='input-field'>
        <label>Phone:</label>
        <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
      </div>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default PersonalDetails;
