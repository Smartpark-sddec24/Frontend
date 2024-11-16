
import React, { useEffect, useState, useCallback} from 'react';
import MapView, { Marker, Callout } from 'react-native-maps';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import * as Location from 'expo-location';
import { ActivityIndicator } from 'react-native-paper';
import SearchBar from '../Components/SearchBar';
import axios from 'axios';

export default function Home({ navigation }) {
  const [location, setLocation] = useState(null);
  const [locations, setLocations] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);
  const [region, setRegion] = useState({
    latitude: 42.02962944614904,  // Coordinates for Ames, Iowa
    longitude: -93.65165725516594,
    latitudeDelta: 0.05,  // Optimized zoom
    longitudeDelta: 0.05, // Optimized zoom
  });

  // Updated coordinates for Ames, Iowa
  const parkingLocation = {
    latitude: 42.02962944614904,
    longitude: -93.65165725516594,
    availableSpots: 5,  // Example parking spots available
    lotName: "The Armory"  // Name of the parking lot
  };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
      let location = await Location.getCurrentPositionAsync();
      setLocation(location);
      await axios.get("https://e264b7cc-67fe-4b7d-87d2-a509fc0eebcb.mock.pstmn.io/getLocations")
      .then(res => {
        let recieved_locations = res.data;
        setLocations(recieved_locations);
      })
      .catch((error) => {
        console.log(error)
      })
    })();
  }, []);

  // Use useCallback to avoid unnecessary re-renders when region changes
  const onRegionChangeComplete = useCallback((newRegion) => {
    setRegion(newRegion);
  }, []);

  const handleReservePress = () => {
    // Navigate to the reservation page
    navigation.navigate('Reserve');  // Ensure 'Reserve' is the correct name of your screen
  };

  if (errorMsg) {
    console.log(errorMsg);
  }

  let markers = null;
  if(locations){
    markers = locations.map(loc => 
      <Marker coordinate={{latitude: loc.latitude, longitude:loc.longitude}}>
          <Callout>
            <View style={styles.callout}>
              <Text style={styles.lotName}>{parkingLocation.lotName}</Text>
              <Text>{`Available Spots: ${parkingLocation.availableSpots}`}</Text>
              <TouchableOpacity style={styles.reserveButton} onPress={handleReservePress}>
                <Text style={styles.reserveButtonText}>Reserve</Text>
              </TouchableOpacity>
            </View>
          </Callout>
        </Marker>
    )
  }

  if (location) {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 42.02962944614904,  // Updated coordinates for Ames, Iowa
            longitude: -93.65165725516594,
            latitudeDelta: 0.05,  // Optimized zoom
            longitudeDelta: 0.05, // Optimized zoom
          }}
          region={region}
          onRegionChangeComplete={onRegionChangeComplete} // Use this for better performance
          showsUserLocation={true}
          showsMyLocationButton={false}
          zoomControlEnabled={true} // Enables zoom controls if needed, but can be omitted for performance
        >
          {/* Marker for Ames, Iowa parking location */}
          {markers}
        </MapView>
        <View style={styles.searchbarView}>
          <View style={styles.searchbar}>
            <SearchBar />
          </View>
        </View>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <ActivityIndicator animating={true} size={100} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },

  map: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: 0,
  },

  searchbar: {
    alignContent: 'center',
    position: 'absolute',
    width: '95%',
    zIndex: 1,
  },

  searchbarView: {
    alignItems: 'center',
    top: '2.5%',
  },

  callout: {
    width: 150,
    padding: 10,
    alignItems: 'center',
  },

  lotName: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },

  reserveButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#4CAF50',
    borderRadius: 5,
    alignItems: 'center',
  },

  reserveButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
