// Summary.js
import React from 'react';
import { useFormContext } from '../FormContext';

const Summary = () => {
  const { formData } = useFormContext();

  return (
    <div>
      <h2>Summary</h2>
      <p>Name: {formData.name}</p>
      <p>Email: {formData.email}</p>
      <p>Phone: {formData.phone}</p>
      <p>Street: {formData.street}</p>
      <p>City: {formData.city}</p>
      <p>Zip Code: {formData.zipCode}</p>
      <p>Card Number: {formData.cardNumber}</p>
      <p>Card Name: {formData.cardName}</p>
      <p>CVV: {formData.cvv}</p>
      <p>Amount: {formData.amount}</p>
      <button onClick={()=>{window.location.reload()}}>Submit new</button>
    </div>
  );
};

export default Summary;
