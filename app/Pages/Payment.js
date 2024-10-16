import React, {useState, useEffect} from 'react';
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
