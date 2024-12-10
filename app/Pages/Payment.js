

import React, { useEffect, useState } from 'react';
import { StripeProvider } from '@stripe/stripe-react-native';
import CheckoutScreen from '../Components/CheckoutScreen';
import SpotNumber from '../Components/TextBoxes';
import { View } from 'react-native';
import { Route } from 'expo-router/build/Route';

const Payment = ({route}) => {
  const publishableKey = "pk_test_51Q8RaWRuVD9MUnlbSNJuKodjS0Pc7LkGTZE4UziRlzXoAGnRtrZU0ijWSraxAejkvzNalYcdu8KJVAIJbZtmbz0D00iASGsqE3"; // Replace with your actual Stripe publishable key
  

  React.useEffect(() => {
    console.log("Payment In: ", route.params.spot_id)
})

  return (
    <StripeProvider
      publishableKey={publishableKey}
      merchantIdentifier="anything" // Optional, for Apple Pay
    >
        <SpotNumber spot={route.params.spot_id}/>
        <CheckoutScreen/>
    </StripeProvider>
  );
};

export default Payment;



// import React from 'react';
// import { View, Text, Button, StyleSheet } from 'react-native';
// import { StripeProvider } from '@stripe/stripe-react-native';
// import CheckoutScreen from '../Components/CheckoutScreen';
// import SpotNumber from '../Components/TextBoxes';

// const Payment = ({ route, navigation }) => {
//   const { availableSpots } = route.params;  // Get the available spots data passed from Home screen

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Reservation Details</Text>

//       {/* Display available spots */}
//       {availableSpots ? (
//         <View style={styles.spotInfo}>
//           <Text style={styles.spotText}>Available Spots: {availableSpots.availableSpot}</Text>
//           <Text style={styles.spotText}>Total Spots: {availableSpots.totalSpot}</Text>
//         </View>
//       ) : (
//         <Text>No available spots found.</Text>
//       )}

//       {/* Stripe provider and payment */}
//       <StripeProvider
//         publishableKey="pk_test_51Q8RaWRuVD9MUnlbSNJuKodjS0Pc7LkGTZE4UziRlzXoAGnRtrZU0ijWSraxAejkvzNalYcdu8KJVAIJbZtmbz0D00iASGsqE3" // Replace with your actual Stripe publishable key
//         merchantIdentifier="anything" // Optional, for Apple Pay
//       >
//         <SpotNumber />
//         <CheckoutScreen />
//       </StripeProvider>

//       {/* Optional Back Button or other navigational elements */}
//       <Button title="Back to Map" onPress={() => navigation.goBack()} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   spotInfo: {
//     marginBottom: 30,
//     padding: 10,
//     backgroundColor: '#f5f5f5',
//     borderRadius: 5,
//   },
//   spotText: {
//     fontSize: 18,
//     marginVertical: 5,
//   },
// });

// export default Payment;
