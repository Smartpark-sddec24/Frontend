import * as React from 'react';
import { TextInput } from 'react-native-paper';
import { View, Text, StyleSheet } from 'react-native';






const SpotNumber = () => {
    const [text, setText] = React.useState("");
  return (
    <View style={styles.container}>
      <View style={styles.absoluteBox}>
      <TextInput
       style={styles.input}
        label="Spot #"
        value={text}
        onChangeText={text => setText(text)}
      />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    mode: 'outlined',
    inputMode: 'numeric',
  },
  absoluteBox: {
    position: 'absolute',
    top: 25, // Change this value to move vertically
    left: 25, // Change this value to move horizontally
    //backgroundColor: 'lightblue',
    padding: 10,
    borderRadius: 15,
    inputMode: 'numeric',
  },
  input: {
    height: 60, // Increase height for a longer input
    width: 310, // Increase width for a wider input
    borderWidth: 2,
    borderColor: 'gray',
    //borderRadius: 30, // Optional: Add rounded corners to the TextInput
    paddingHorizontal: 10, // Padding inside the TextInput
}
}
);

export default SpotNumber;