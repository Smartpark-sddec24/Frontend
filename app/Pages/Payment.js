

import React from 'react';
import { StripeProvider } from '@stripe/stripe-react-native';
import CheckoutScreen from '../Components/CheckoutScreen';
import SpotNumber from '../Components/TextBoxes';

const Payment = () => {
  const publishableKey = "pk_test_51Q8RaWRuVD9MUnlbSNJuKodjS0Pc7LkGTZE4UziRlzXoAGnRtrZU0ijWSraxAejkvzNalYcdu8KJVAIJbZtmbz0D00iASGsqE3"; // Replace with your actual Stripe publishable key

  return (
    <StripeProvider
      publishableKey={publishableKey}
      merchantIdentifier="anything" // Optional, for Apple Pay
    >
        <SpotNumber />
      <CheckoutScreen />
    </StripeProvider>
  );
};

export default Payment;

