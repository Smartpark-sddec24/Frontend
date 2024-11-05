
// import * as React from 'react';
// import { TextInput, HelperText } from 'react-native-paper';
// import { View, Text, StyleSheet } from 'react-native';
// import CheckoutScreen
//  from './CheckoutScreen';
// const SpotNumber = () => {
//     const [spotNumber, setSpotNumber] = React.useState("");
//     const [fullName, setFullName] = React.useState("");
//     const [country, setCountry] = React.useState("");
//     const [address, setAddress] = React.useState("");
//     const [licensePlate, setLicensePlate] = React.useState("");
//     const [licenseState, setLicenseState] = React.useState("");

//     return (
//         <View style={styles.container}>
//            <Text style={styles.header}>Payment</Text>
//             <View style={styles.longBox}>
//                 <Text>Spot Number</Text>
//                 <TextInput
//                     style={styles.longInput}
//                     label="Spot #"
//                     value={spotNumber}
//                     onChangeText={setSpotNumber}
//                 />
//             </View>
//             <View style={styles.row}>
//                 <View style={styles.halfBox}>
//                     <Text>License Plate Number</Text>
//                     <TextInput
//                         style={styles.halfInput}
//                         label="Number"
//                         value={licensePlate}
//                         onChangeText={setLicensePlate}
//                     />
//                 </View>
//                 <View style={styles.halfBox}>
//                     <Text>License Plate State</Text>
//                     <TextInput
//                         style={styles.halfInput}
//                         label="State"
//                         value={licenseState}
//                         onChangeText={setLicenseState}
//                     />
//                 </View>
//             </View>
//             <View style={styles.longBox}>
//                 <Text>Full Name</Text>
//                 <TextInput
//                     style={styles.longInput}
//                     label="Full Name"
//                     value={fullName}
//                     onChangeText={setFullName}
//                 />
//             </View>
//             <View style={styles.longBox}>
//                 <Text>Country</Text>
//                 <TextInput
//                     style={styles.longInput}
//                     label=""
//                     value={country}
//                     onChangeText={setCountry}
//                 />
//             </View>
//             <View style={styles.longBox}>
//                 <Text>Address</Text>
//                 <TextInput
//                     style={styles.longInput}
//                     label=""
//                     value={address}
//                     onChangeText={setAddress}
//                 />
//             </View>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flexGrow: 1,
//         justifyContent: 'flex-start',
//         alignItems: 'center',
//         paddingHorizontal: 20,
//     },
//     header: {
//         fontSize: 24, // Adjust size for the header
//         fontWeight: 'bold', // Bold for emphasis
//         marginBottom: 10, // Spacing below the headerm
        
//     },
//     longBox: {
//         width: '100%',
//         marginBottom: 20,
//     },
//     longInput: {
//         height: 50, // Adjusted height
//         width: '100%',
//         borderWidth: 2,
//         borderColor: 'gray',
//         paddingHorizontal: 10,
//     },
//     row: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         width: '100%',
//     },
//     halfBox: {
//         width: '48%', // Adjust to fit two boxes
//         marginBottom: 20,
//     },
//     halfInput: {
//         height: 50, // Adjusted height
//         borderWidth: 2,
//         borderColor: 'gray',
//         paddingHorizontal: 10,
//     },
// });

// export default SpotNumber;

// import * as React from 'react';
// import { TextInput } from 'react-native-paper';
// import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';
// import { Picker } from '@react-native-picker/picker';

// const SpotNumber = () => {
//     const [spotNumber, setSpotNumber] = React.useState("");
//     const [fullName, setFullName] = React.useState("");
//     const [country, setCountry] = React.useState("");
//     const [address, setAddress] = React.useState("");
//     const [licensePlate, setLicensePlate] = React.useState("");
//     const [licenseState, setLicenseState] = React.useState("");
//     const [isPickerVisible, setIsPickerVisible] = React.useState(false); // State for picker visibility

//     // List of U.S. state abbreviations
//     const states = [
//         "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", 
//         "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", 
//         "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", 
//         "WI", "WY"
//     ];

//     // Toggle the visibility of the Picker
//     const handlePickerToggle = () => {
//         setIsPickerVisible(!isPickerVisible);
//     };

//     // Hide the picker after a state is selected
//     const handleStateSelect = (state) => {
//         setLicenseState(state);
//         setIsPickerVisible(false); // Hide picker after selection
//     };

//     return (
//         <View style={styles.container}>
//            <Text style={styles.header}>Payment</Text>
//             <View style={styles.longBox}>
//                 <Text>Spot Number</Text>
//                 <TextInput
//                     style={styles.longInput}
//                     label="Spot #"
//                     value={spotNumber}
//                     onChangeText={setSpotNumber}
//                 />
//             </View>
//             <View style={styles.row}>
//                 <View style={styles.halfBox}>
//                     <Text>License Plate Number</Text>
//                     <TextInput
//                         style={styles.halfInput}
//                         label="Number"
//                         value={licensePlate}
//                         onChangeText={setLicensePlate}
//                     />
//                 </View>
//                 <View style={styles.halfBox}>
//                     <Text>License Plate State</Text>
//                     <TouchableOpacity onPress={handlePickerToggle}>
//                         <View style={styles.selectBox}>
//                             <Text style={styles.selectText}>
//                                 {licenseState || "Select State"}
//                             </Text>
//                         </View>
//                     </TouchableOpacity>
//                     {/* Conditionally render the Picker when it's visible */}
//                     {isPickerVisible && (
//                         <Modal
//                             transparent={true}
//                             animationType="fade"
//                             visible={isPickerVisible}
//                             onRequestClose={() => setIsPickerVisible(false)}
//                         >
//                             <View style={styles.modalBackground}>
//                                 <View style={styles.pickerContainer}>
//                                     <Picker
//                                         selectedValue={licenseState}
//                                         onValueChange={handleStateSelect}
//                                         style={styles.picker}
//                                     >
//                                         <Picker.Item label="Select State" value="" />
//                                         {states.map((state) => (
//                                             <Picker.Item key={state} label={state} value={state} />
//                                         ))}
//                                     </Picker>
//                                 </View>
//                             </View>
//                         </Modal>
//                     )}
//                 </View>
//             </View>
//             <View style={styles.longBox}>
//                 <Text>Full Name</Text>
//                 <TextInput
//                     style={styles.longInput}
//                     label="Full Name"
//                     value={fullName}
//                     onChangeText={setFullName}
//                 />
//             </View>
//             <View style={styles.longBox}>
//                 <Text>Country</Text>
//                 <TextInput
//                     style={styles.longInput}
//                     label=""
//                     value={country}
//                     onChangeText={setCountry}
//                 />
//             </View>
//             <View style={styles.longBox}>
//                 <Text>Address</Text>
//                 <TextInput
//                     style={styles.longInput}
//                     label=""
//                     value={address}
//                     onChangeText={setAddress}
//                 />
//             </View>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flexGrow: 1,
//         justifyContent: 'flex-start',
//         alignItems: 'center',
//         paddingHorizontal: 20,
//     },
//     header: {
//         fontSize: 24,
//         fontWeight: 'bold',
//         marginBottom: 10,
//     },
//     longBox: {
//         width: '100%',
//         marginBottom: 20,
//     },
//     longInput: {
//         height: 50,
//         width: '100%',
//         borderWidth: 2,
//         borderColor: '#D6A3E4', // Light purple color to match the rest of the inputs
//         paddingHorizontal: 10,
//         backgroundColor: '#F7E6F7', // Light purple background for consistency
//     },
//     row: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         width: '100%',
//     },
//     halfBox: {
//         width: '48%',
//         marginBottom: 20,
//     },
//     halfInput: {
//         height: 50,
//         borderWidth: 2,
//         borderColor: '#D6A3E4', // Light purple color to match the rest of the inputs
//         paddingHorizontal: 10,
//         backgroundColor: '#F7E6F7', // Light purple background for consistency
//     },
//     selectBox: {
//         height: 50,
//         justifyContent: 'center',
//         borderWidth: 2,
//         borderColor: '#D6A3E4', // Light purple border color
//         paddingHorizontal: 10,
//         backgroundColor: '#F7E6F7', // Light purple background color to match the other inputs
//         width: '100%', // Ensure it's the same width as the other text inputs
//     },
//     selectText: {
//         fontSize: 16,
//         color: '#000',
//     },
//     modalBackground: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
//     },
//     pickerContainer: {
//         backgroundColor: '#fff',
//         width: '80%',
//         borderRadius: 10,
//         padding: 20,
//     },
//     picker: {
//         height: 200,
//     },
// });

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
            <Text style={styles.header}>Payment</Text>

            {/* Spot Number Input Field */}
            <View style={styles.longBox}>
                <Text>Spot Number</Text>
                <TextInput
                    style={styles.longInput}
                    label="Spot #"
                    value={spotNumber}
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
