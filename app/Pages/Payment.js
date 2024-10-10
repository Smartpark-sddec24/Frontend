import { Text, View } from "react-native"
import {loadStripe} from '@stripe/stripe-js';
import { StripeProvider } from '@stripe/stripe-react-native';

const App = () => (
    <StripeProvider publishableKey="YOUR_PUBLISHABLE_KEY">
        {/* Your app components */}
    </StripeProvider>
);




export default function Payment() {
    return (
        <View>
            <Text>This is the payment page</Text>
        </View>
    );
}

