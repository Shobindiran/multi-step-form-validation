// PaymentDetails.js
import React from 'react';
import { useFormContext } from '../FormContext';

const PaymentDetails = ({ onSubmit, onPrev }) => {
  const { updateFormData, formData } = useFormContext();
  const [cardNumber, setCardNumber] = React.useState(formData.cardNumber || '');
  const [cardName, setCardName] = React.useState(formData.cardName || '');
  const [cvv, setCVV] = React.useState(formData.cvv || '');
  const [amount, setAmount] = React.useState(formData.amount || '');

  const handlePrev = () => {
    onPrev();
  };

  const handleNext = () => {
    // Basic validation
    if (!/^\d{16}$/.test(cardNumber)) {
      alert('Card number should contain 16 digits.');
      return;
    }

    if (!/^[a-zA-Z\s]+$/.test(cardName)) {
      alert('Card name should contain only alphabets.');
      return;
    }

    if (!/^\d{3}$/.test(cvv)) {
      alert('CVV should contain 3 digits.');
      return;
    }

    if (!/^\d+(\.\d{1,2})?$/.test(amount)) {
      alert('Amount should be a valid number.');
      return;
    }

    updateFormData({ cardNumber, cardName, cvv, amount });
    onSubmit();
  };

  return (
    <div>
      <h2>Payment Details</h2>
      <div className="input-field">
        <input type="text" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
        <span>Card Number:</span>
      </div>
      
      <div className='input-field'>
        <input type="text" value={cardName} onChange={(e) => setCardName(e.target.value)} />
        <span>Card Name:</span>
      </div>

      <div className='input-field'>
        <input type="text" value={cvv} onChange={(e) => setCVV(e.target.value)} />
        <span>CVV:</span>
      </div>

      <div className='input-field'>
        <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} />
        <span>Amount:</span>
      </div>

      {/* <button onClick={handlePrev}>Previous</button> */}
      <button onClick={handleNext}>Submit</button>
    </div>
  );
};

export default PaymentDetails;
