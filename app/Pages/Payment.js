import { Text, View } from "react-native"
import {loadStripe} from '@stripe/stripe-js';
import { StripeProvider } from '@stripe/stripe-react-native';
import React from 'react';
import Stripe from '../Components/Stripe';

const Payment = () => {
  return (
    <StripeProvider
      publishableKey="pk_test_51Q8RaWRuVD9MUnlbSNJuKodjS0Pc7LkGTZE4UziRlzXoAGnRtrZU0ijWSraxAejkvzNalYcdu8KJVAIJbZtmbz0D00iASGsqE3" // Replace with your actual publishable key
    >
      <Stripe/>
    </StripeProvider>
  );
};

export default Payment;
