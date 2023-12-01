// Form.js
import React, { useState } from 'react';
import PersonalDetails from './PersonalDetails';
import Address from './Address';
import PaymentDetails from './PaymentDetails';
import Summary from './Summary';
import { FormProvider } from '../FormContext';

const Form = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrev = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleSubmit = () => {
    setCurrentPage(currentPage + 1);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 1:
        return <PersonalDetails onNext={handleNext} />;
      case 2:
        return <Address onNext={handleNext} onPrev={handlePrev} />;
      case 3:
        return <PaymentDetails onSubmit={handleSubmit} onPrev={handlePrev} />;
      case 4:
        return <Summary />;
      default:
        return null;
    }
  };

  return (
    <FormProvider>
      <div>
        {renderPage()}
      </div>
    </FormProvider>
  );
};

export default Form;
