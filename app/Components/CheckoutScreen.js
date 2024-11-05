import { useStripe } from "@stripe/stripe-react-native";
import { useState, useEffect} from "react";
import { View, Button, Text, TouchableOpacity, StyleSheet} from "react-native";


export default function CheckoutScreen() {
  const { initPaymentSheet, presentPaymentSheet } = useStripe();
  const [loading, setLoading] = useState(false);

  const initializePaymentSheet = async () => {
    const { error } = await initPaymentSheet({
      merchantDisplayName: "Example, Inc.",
      eturnURL: 'your-app://stripe-redirect',
      intentConfiguration: {
        mode: {
          amount: 1099,
          currencyCode: 'USD',
        },
        confirmHandler: confirmHandler
      }
    });
    if (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    initializePaymentSheet()
      .then(setLoading(true));
  }, []);

  const confirmHandler = async (paymentMethod, shouldSavePaymentMethod, intentCreationCallback) => {
    const confirmHandler = async (paymentMethod, shouldSavePaymentMethod, intentCreationCallback) => {
      // Make a request to your own server.
      const response = await fetch(`${API_URL}/create-intent`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
      }});
      // Call the `intentCreationCallback` with your server response's client secret or error
      const { client_secret, error } = await response.json();
      if (client_secret) {
        intentCreationCallback({clientSecret: client_secret});
      } else {
        intentCreationCallback({error});
      }
    }
  }

  const didTapCheckoutButton = async () => {
    const { error } = await presentPaymentSheet();

    if (error) {
      if (error.code === PaymentSheetError.Canceled) {
        // Customer canceled - you should probably do nothing
      } else {
        // PaymentSheet encountered an unrecoverable error. You can display the error to the user, log it, etc.
      }
      console.log(error)
    } else {
      // Payment completed - show a confirmation screen.
    }
  }

//   return (
//     <View>
//       <Button
//         variant="primary"
//         disabled={!loading}
//         title="Checkout"
//         onPress={didTapCheckoutButton}
//       />
//     </View>
//   );
// }
return (
  <View style={styles.container}>
    <TouchableOpacity
      style={[styles.button]}
      disabled={!loading}
      onPress={didTapCheckoutButton}
      
      //title="Checkout"
      mode="contained"
    >
      <Text style={styles.buttonText}>Checkout</Text>
    </TouchableOpacity>
 
  </View>
);
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  padding: 20,
},
button: {
  backgroundColor: '#AAEFFF' , // Light purple color
  padding: 20, // Increae padding for a larger button
  borderRadius: 10, // Rounded corners
  width: '100%', // Full width
  alignItems: 'center', // Center text horizontally
  justifyContent: 'center', // Center text vertically
},
buttonText: {
  fontSize: 18, // Larger font size
  color: '#000', // Text color
},
});
 
  