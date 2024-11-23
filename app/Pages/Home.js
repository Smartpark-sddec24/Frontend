
import React, { useEffect, useState, useCallback} from 'react';
import MapView, { Marker, Callout } from 'react-native-maps';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import * as Location from 'expo-location';
import { ActivityIndicator } from 'react-native-paper';
import SearchBar from '../Components/SearchBar';
import axios from 'axios';

export default function Home({ navigation }) {
  const [userLocation, setUserLocation] = useState(null);
  const [locations, setLocations] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);
  const [availableSpots, setAvailableSpots] = useState({});
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
      setUserLocation(location);
      await axios.get(process.env.EXPO_PUBLIC_SERVER_ADDRESS +"/getLocations")
      .then((res) => {setLocations(res.data)})
      .catch((error) => {
        if(error.request){
          console.log("request error ", error.request)
        } else if (error.response){
          console.log("response error: ", error.response)
        } else {
          console.log("error: ", error)
        }
      })
    })();
  }, []);

  // Use useCallback to avoid unnecessary re-renders when region changes
  const onRegionChangeComplete = useCallback((newRegion) => {
    setRegion(newRegion);
  }, []);





  const handleMarkerPress = async (marker_id) => {
    // Handle the marker press event here
    console.log("Handling: ", marker_id)
    await axios.get(process.env.EXPO_PUBLIC_SERVER_ADDRESS +"/getAvailableSpots", {
        params: {
          location_id: marker_id
        }
      }
    )
    .then((res) => {setAvailableSpots(res.data)})
    .then(console.log(availableSpots))
    .catch((error) => {
      if(error.request){
        console.log("request error ", error.request)
      } else if (error.response){
        console.log("response error: ", error.response)
      } else {
        console.log("error: ", error)
      }
  })
}
   // console.log("Marker pressed:", marker);




  const handleReservePress = () => {
    // Navigate to the reservation page
    navigation.navigate('Reserve');  // Ensure 'Reserve' is the correct name of your screen
  };

  if (errorMsg) {
    console.log(errorMsg);
  } 

  if (userLocation && locations) {
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
          {locations.map(loc => 
            <Marker key={loc.location_id} coordinate={loc} 
            onPress={() => handleMarkerPress(loc.location_id)}>
                <Callout >
                  <View style={styles.callout}> 
                    <Text style={styles.lotName}>{loc.location_name}</Text>
                    
                    {/* TODO do avaliable spots request when a marker is pressed */}
                    
                    <Text>{`Available Spots: ${availableSpots.availableSpot}/${availableSpots.totalSpot}`}</Text>
                    <TouchableOpacity style={styles.reserveButton} onPress={handleReservePress}>
                      <Text style={styles.reserveButtonText}>Reserve</Text>
                    </TouchableOpacity>
                  </View>
                  
                  
                </Callout>
              </Marker>
            )}
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
    width: 200,
    padding: 10,
    //height: 200,
    alignItems: 'center',
    zIndex: 1,

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
