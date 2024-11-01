
import * as React from 'react';
import { TextInput } from 'react-native-paper';
import { View, Text, StyleSheet } from 'react-native';
import CheckoutScreen
 from './CheckoutScreen';
const SpotNumber = () => {
    const [spotNumber, setSpotNumber] = React.useState("");
    const [fullName, setFullName] = React.useState("");
    const [country, setCountry] = React.useState("");
    const [address, setAddress] = React.useState("");
    const [licensePlate, setLicensePlate] = React.useState("");
    const [licenseState, setLicenseState] = React.useState("");

    return (
        <View style={styles.container}>
           <Text style={styles.header}>Payment</Text>
            <View style={styles.longBox}>
                <Text>Spot Number</Text>
                <TextInput
                    style={styles.longInput}
                    label="Spot #"
                    value={spotNumber}
                    onChangeText={setSpotNumber}
                />
            </View>
            <View style={styles.row}>
                <View style={styles.halfBox}>
                    <Text>License Plate Number</Text>
                    <TextInput
                        style={styles.halfInput}
                        label="Number"
                        value={licensePlate}
                        onChangeText={setLicensePlate}
                    />
                </View>
                <View style={styles.halfBox}>
                    <Text>License Plate State</Text>
                    <TextInput
                        style={styles.halfInput}
                        label="State"
                        value={licenseState}
                        onChangeText={setLicenseState}
                    />
                </View>
            </View>
            <View style={styles.longBox}>
                <Text>Full Name</Text>
                <TextInput
                    style={styles.longInput}
                    label="Full Name"
                    value={fullName}
                    onChangeText={setFullName}
                />
            </View>
            <View style={styles.longBox}>
                <Text>Country</Text>
                <TextInput
                    style={styles.longInput}
                    label=""
                    value={country}
                    onChangeText={setCountry}
                />
            </View>
            <View style={styles.longBox}>
                <Text>Address</Text>
                <TextInput
                    style={styles.longInput}
                    label=""
                    value={address}
                    onChangeText={setAddress}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    header: {
        fontSize: 24, // Adjust size for the header
        fontWeight: 'bold', // Bold for emphasis
        marginBottom: 10, // Spacing below the headerm
        
    },
    longBox: {
        width: '100%',
        marginBottom: 20,
    },
    longInput: {
        height: 50, // Adjusted height
        width: '100%',
        borderWidth: 2,
        borderColor: 'gray',
        paddingHorizontal: 10,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    halfBox: {
        width: '48%', // Adjust to fit two boxes
        marginBottom: 20,
    },
    halfInput: {
        height: 50, // Adjusted height
        borderWidth: 2,
        borderColor: 'gray',
        paddingHorizontal: 10,
    },
});

export default SpotNumber;
