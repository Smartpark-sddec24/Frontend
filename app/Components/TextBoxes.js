// import * as React from 'react';
// import { TextInput } from 'react-native-paper';
// import { View, Text, StyleSheet } from 'react-native';

// const SpotNumber = () => {
//     const [text, setText] = React.useState("");
//   return (
//     <View style={styles.container}>
//       <View style={styles.Box}>
//       <Text variant="Spot Number">Spot Number</Text>
//       <TextInput
//        style={styles.input}
//         label="Spot #"
//         value={text}
//         onChangeText={text => setText(text)}
//       />
//       </View>
//       <View style={styles.Box}>
//       <Text variant="Spot Number">Headline Small</Text>
//       <TextInput
//        style={styles.input}
//         label="Spot #"
//         value={text}
//         onChangeText={text => setText(text)}
//       />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     position: 'relative',
//     mode: 'outlined',
//     inputMode: 'numeric',
//   },
//   Box: {
//     position: 'relative',
//     top: -180, // Change this value to move vertically
//     left: 0, // Change this value to move horizontally
//     //backgroundColor: 'lightblue',
//     padding: 10,
//     borderRadius: 15,
//     inputMode: 'numeric',
//   },
//   input: {
//     height: 60, // Increase height for a longer input
//     width: 310, // Increase width for a wider input
//     borderWidth: 2,
//     borderColor: 'gray',
//     //borderRadius: 20, // Optional: Add rounded corners to the TextInput
//     paddingHorizontal: 10, // Padding inside the TextInput
// }
// }
// );

// export default SpotNumber;


import * as React from 'react';
import { TextInput } from 'react-native-paper';
import { View, Text, StyleSheet } from 'react-native';

const SpotNumber = () => {
    const [spotNumber, setSpotNumber] = React.useState("");
    const [fullName, setFullName] = React.useState("");
    const [country, setCountry] = React.useState("");
    const [address, setAddress] = React.useState("");
    const [licensePlate, setLicensePlate] = React.useState("");
    const [licenseState, setLicenseState] = React.useState("");

    return (
        <View style={styles.container}>
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
                    label=""
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
        padding: 20,
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
        //borderRadius: 25, // Full radius for oval effect
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
       // borderRadius: 25, // Full radius for oval effect
        paddingHorizontal: 10,
    },
});

export default SpotNumber;

