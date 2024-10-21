import { useStripe } from "@stripe/stripe-react-native";
import { useState, useEffect} from "react";
import { View, Button } from "react-native";

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

  return (
    <View>
      <Button
        variant="primary"
        disabled={!loading}
        title="Checkout"
        onPress={didTapCheckoutButton}
      />
    </View>
  );
}

  /* import React, { useState, useEffect } from "react";
  import { View, Button, ActivityIndicator, Alert } from "react-native";
  import { useStripe } from "@stripe/stripe-react-native";
  
  const API_URL = "http://localhost:3000"; // Replace with your backend URL
  
  export default function CheckoutScreen() {
    const { initPaymentSheet, presentPaymentSheet } = useStripe();
    const [loading, setLoading] = useState(true);
  
    const initializePaymentSheet = async () => {
      const response = await fetch(`${API_URL}/create-payment-intent`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount: 1099 }), // Amount in cents
      });
  
      const { client_secret, error } = await response.json();
  
      if (error) {
        console.log("Payment Intent Error:", error);
        return;
      }
  
      const { error: sheetError } = await initPaymentSheet({
        merchantDisplayName: "Example, Inc.",
        paymentIntentClientSecret: client_secret,
      });
  
      if (sheetError) {
        console.log("Payment Sheet Error:", sheetError);
      }
    };
  
    useEffect(() => {
      initializePaymentSheet().then(() => setLoading(false));
    }, []);
  
    const didTapCheckoutButton = async () => {
      const { error } = await presentPaymentSheet();
  
      if (error) {
        if (error.code === 'Canceled') {
          Alert.alert("Payment canceled");
        } else {
          Alert.alert("Payment failed", error.message);
        }
        console.log("Payment Error:", error);
      } else {
        Alert.alert("Payment successful", "Thank you for your purchase!");
      }
    };
  
    return (
      <View style={{ padding: 20 }}>
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <Button
            title="Checkout"
            onPress={didTapCheckoutButton}
          />
        )}
      </View>
    );
  }
  

  import React, { useState, useEffect } from "react";
import { View, Button, ActivityIndicator, Alert, Modal, Text, StyleSheet } from "react-native";
import { useStripe } from "@stripe/stripe-react-native";

const API_URL = "http://localhost:3000"; // Replace with your backend URL

export default function CheckoutScreen() {
  const { initPaymentSheet, presentPaymentSheet } = useStripe();
  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  
  
  const initializePaymentSheet = async () => {
    const response = await fetch(`${API_URL}/create-payment-intent`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: 1099 }), // Amount in cents
    });

    const initializePaymentSheet = async () => {
      const response = await fetch(`${API_URL}/payment-intents`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ amount: 1099 }), // Amount in cents
      });
  
      // Mock a response
      const client_secret = "mock_client_secret"; // Use a fixed value for testing
  
      // No need to check for errors in JSON Server for this simple setup
      const { error } = await initPaymentSheet({
          merchantDisplayName: "Example, Inc.",
          paymentIntentClientSecret: client_secret,
      });
  
      if (error) {
          console.log("Payment Sheet Error:", error);
      }
  };
  

    const { client_secret, error } = await response.json();

    if (error) {
      console.log("Payment Intent Error:", error);
      return;
    }

    const { error: sheetError } = await initPaymentSheet({
      merchantDisplayName: "Example, Inc.",
      paymentIntentClientSecret: client_secret,
    });

    if (sheetError) {
      console.log("Payment Sheet Error:", sheetError);
    }
  };

  useEffect(() => {
    initializePaymentSheet().then(() => setLoading(false));
  }, []);

  const didTapCheckoutButton = async () => {
    const { error } = await presentPaymentSheet();

    if (error) {
      if (error.code === 'Canceled') {
        showModal("Payment canceled");
      } else {
        showModal("Payment failed: " + error.message);
      }
      console.log("Payment Error:", error);
    } else {
      showModal("Payment successful! Thank you for your purchase!");
    }
  };

  const showModal = (message) => {
    setModalMessage(message);
    setModalVisible(true);
    setTimeout(() => setModalVisible(false), 3000); // Hide after 3 seconds
  };

  return (
    <View style={{ padding: 20 }}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <Button
          title="Checkout"
          onPress={didTapCheckoutButton}
        />
      )}

      <Modal
        transparent={true}
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>{modalMessage}</Text>
            <Button title="Close" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  modalContent: {
    width: '80%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
 */