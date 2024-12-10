

import React, { useEffect, useState } from 'react';
import { StripeProvider } from '@stripe/stripe-react-native';
import CheckoutScreen from '../Components/CheckoutScreen';
import SpotNumber from '../Components/TextBoxes';
import { View, StyleSheet} from 'react-native';
import { Route } from 'expo-router/build/Route';
import { ActivityIndicator } from 'react-native-paper';

const Payment = ({route}) => {
  const publishableKey = "pk_test_51Q8RaWRuVD9MUnlbSNJuKodjS0Pc7LkGTZE4UziRlzXoAGnRtrZU0ijWSraxAejkvzNalYcdu8KJVAIJbZtmbz0D00iASGsqE3"; // Replace with your actual Stripe publishable key


  React.useEffect(() => {
    console.log("Payment In: ", route.params.spot_id)
})

if(route.params.spot_id){
  return (
    <StripeProvider
      publishableKey={publishableKey}
      merchantIdentifier="anything" // Optional, for Apple Pay
    >
        <SpotNumber spot={route.params.spot_id}/>
        <CheckoutScreen spot={route.params.spot_id}/>
    </StripeProvider>
  );
} else {
  <View style={styles.container}>
        <ActivityIndicator animating={true} size={100} />
  </View>
}};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  }
})

export default Payment;

