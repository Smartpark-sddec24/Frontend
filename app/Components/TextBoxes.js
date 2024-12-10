import * as React from 'react';
import { TextInput } from 'react-native-paper';
import { View, Text, StyleSheet } from 'react-native';

const SpotNumber = (props) => {
    const [spotNumber, setSpotNumber] = React.useState("");
    const [fullName, setFullName] = React.useState("");
    const [country, setCountry] = React.useState("");
    const [address, setAddress] = React.useState("");
    const [licensePlate, setLicensePlate] = React.useState("");
    const [licenseState, setLicenseState] = React.useState("");

    React.useEffect(() => {
        console.log("TextBox In: ", props.spot)
    })

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Payment</Text>

            {/* Spot Number Input Field */}
            <View style={styles.longBox}>
                <Text>Spot Number</Text>
                <TextInput
                    style={styles.longInput}
                    label= "Spot Number"
                    value={`${props.spot}`}
                    onChangeText={setSpotNumber}
                    keyboardType="numeric" // Restricts input to numbers
                />
            </View>

            {/* License Plate and State */}
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

            {/* Full Name */}
            <View style={styles.longBox}>
                <Text>Full Name</Text>
                <TextInput
                    style={styles.longInput}
                    label="Full Name"
                    value={fullName}
                    onChangeText={setFullName}
                />
            </View>

            {/* Country */}
            <View style={styles.longBox}>
                <Text>Country</Text>
                <TextInput
                    style={styles.longInput}
                    label=""
                    value={country}
                    onChangeText={setCountry}
                />
            </View>

            {/* Address */}
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
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    longBox: {
        width: '100%',
        marginBottom: 20,
    },
    longInput: {
        height: 50,
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
        width: '48%',
        marginBottom: 20,
    },
    halfInput: {
        height: 50,
        borderWidth: 2,
        borderColor: 'gray',
        paddingHorizontal: 10,
    },
});

export default SpotNumber;

