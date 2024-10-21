/* import React, {useState, useEffect} from 'react';
import {Elements, PaymentElement} from '@stripe/react-stripe-js';
import { StripeProvider } from '@stripe/stripe-react-native';
import CheckoutScreen from '../Components/CheckoutScreen';
import {loadStripe} from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.publishableKey);


const Payment = () => {
  const [publishableKey, setPublishableKey] = useState(process.env.publishableKey);

  // const fetchPublishableKey = async () => {
  //   const key = await fetchKey(); // fetch key from your server here
  //   setPublishableKey(key);
  // };

  // useEffect(() => {
  //   fetchPublishableKey();
  // }, []);

  const options = {
    // passing the client secret obtained from the server
    clientSecret: process.env.secret,
  };

  return (
    <StripeProvider
      publishableKey={publishableKey}
      merchantIdentifier='anything'
      >
        <Elements stripe={stripePromise}>
          <CheckoutScreen/>
        </Elements>
      </StripeProvider>
  );
};

export default Payment;
 */

/* import React, { useState, useEffect } from 'react';
import { StripeProvider } from '@stripe/stripe-react-native';
import CheckoutScreen from '../Components/CheckoutScreen';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.publishableKey);

const Payment = () => {
  const [publishableKey, setPublishableKey] = useState(process.env.publishableKey);

  // Uncomment this to fetch the publishable key from your server if needed
  // const fetchPublishableKey = async () => {
  //   const key = await fetchKey(); // fetch key from your server here
  //   setPublishableKey(key);
  // };

  // useEffect(() => {
  //   fetchPublishableKey();
  // }, []);

  return (
    <StripeProvider
      publishableKey={publishableKey}
      merchantIdentifier="anything" // optional, for Apple Pay
    >
      <CheckoutScreen />
    </StripeProvider>
  );
};

export default Payment; */

import React from 'react';
import { StripeProvider } from '@stripe/stripe-react-native';
import CheckoutScreen from '../Components/CheckoutScreen';

const Payment = () => {
  const publishableKey = "pk_test_51Q8RaWRuVD9MUnlbSNJuKodjS0Pc7LkGTZE4UziRlzXoAGnRtrZU0ijWSraxAejkvzNalYcdu8KJVAIJbZtmbz0D00iASGsqE3"; // Replace with your actual Stripe publishable key

  return (
    <StripeProvider
      publishableKey={publishableKey}
      merchantIdentifier="anything" // Optional, for Apple Pay
    >
      <CheckoutScreen />
    </StripeProvider>
  );
};

export default Payment;

