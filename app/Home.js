import React, { useEffect, useState } from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View, Text } from 'react-native';
import * as Location from 'expo-location';

export default function Home() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [region, setRegion] = useState(null)
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setOut(status)
        setErrorMsg('Permission to access location was denied');
        //return;
      }
      let location = await Location.getCurrentPositionAsync();
      setLocation(location);
      setRegion({
        latitude: location["coords"]["latitude"],
        longitude: location["coords"]["longitude"],
        latitudeDelta: 1.0,
        longitudeDelta: 1.0,
      })
    })();
  }, []);

  const onRegionChange = (newRegion) => {
    setRegion(newRegion);
  }

  let text = <Text>"Waiting"</Text>;
  if (errorMsg) {
    text = <Text>{errorMsg}</Text>;
  } else if (location) {

    text = <MapView style={styles.map}
      initialRegion={region}
      Region={region}
      onRegionChange={onRegionChange}
    />;
  }


  return (
    <View style={styles.container}>
      {text}
      <Text>{region['longitude']}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '50%',
    height: '50%',
  },
});
