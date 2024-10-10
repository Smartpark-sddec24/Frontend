import React, { useEffect, useState } from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View, Text } from 'react-native';
import * as Location from 'expo-location';
import { ActivityIndicator } from 'react-native-paper';



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

  if (errorMsg) {
    console.log(errorMsg)
  }

  if (location) {
    return (
      <View style={styles.container}>
        <MapView style={styles.map}
          initialRegion={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: .005,
            longitudeDelta: .109,
          }}
          Region={region}
          onRegionChange={onRegionChange}
          showsUserLocation={true}
        />
      </View>
    )
  } else {
    return (
      <View style={styles.container}>
        <ActivityIndicator animating={true} size={100} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },

  map: {
    width: '100%',
    height: '100%',
  },
});
