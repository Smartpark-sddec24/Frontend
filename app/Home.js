import React, { useEffect, useState } from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View, Text } from 'react-native';
import * as Location from 'expo-location';

export default function Home() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [region, setRegion] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0,
    longitudeDelta: 0,
  })

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setOut(status)
        setErrorMsg('Permission to access location was denied');
        return;
      }
      let location = await Location.getCurrentPositionAsync();
      setLocation(location);

    })();
  }, []);

  const onRegionChange = (newRegion) => {
    setRegion(newRegion);
  }

  let text = <Text>"Waiting"</Text>;
  if (errorMsg) {
    text = <Text>{errorMsg}</Text>;
  } else if (location) {
    text = <View>
      <MapView style={styles.map}
        initialRegion={{
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: .005,
          longitudeDelta: .109,
        }}
        Region={region}
        onRegionChange={onRegionChange}

      />
      <Text>latitude: {region.latitude}</Text>
      <Text>longitude: {region.longitude}</Text>   
      <Text>latitudeDelta: {region.latitudeDelta}</Text>
      <Text>longitudeDelta: {region.longitudeDelta}</Text>
    </View>

  }


  return (
    <View style={styles.container}>
      {text}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '75%',
  },
});
