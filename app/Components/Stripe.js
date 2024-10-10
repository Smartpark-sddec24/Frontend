import React, { useState } from 'react';
import { View, Button, Alert } from 'react-native';
import {
  CardField,
  useStripe,
  useConfirmPayment,
} from '@stripe/stripe-react-native';

const PaymentComponent = () => {
  const [cardDetails, setCardDetails] = useState(null);
  const { confirmPayment } = useConfirmPayment();

  const handlePayPress = async () => {
    const billingDetails = {
     // email: 'email@example.com', // Optional
    };

    // Replace with your own API call to create a payment intent
    const response = await fetch('https://YOUR_BACKEND_URL/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount: 1000, // Amount in cents
        currency: 'usd',
      }),
    });

    const { clientSecret } = await response.json();

    const { error } = await confirmPayment(clientSecret, {
      type: 'Card',
      billingDetails,
    });

    if (error) {
      Alert.alert(`Payment confirmation error: ${error.message}`);
    } else {
      Alert.alert('Payment successful!');
    }
  };

  return (
    <View>
      <CardField
        postalCodeEnabled={false}
        placeholder={{
          number: '4242 4242 4242 4242',
        }}
        cardStyle={{
          backgroundColor: '#FFFFFF',
          textColor: '#000000',
        }}
        style={{
          width: '100%',
          height: 50,
          marginVertical: 30,
        }}
        onCardChange={(cardDetails) => {
          setCardDetails(cardDetails);
        }}
      />
      <Button title="Pay" onPress={handlePayPress} disabled={!cardDetails?.complete} />
    </View>
  );
};

export default Stripe;
