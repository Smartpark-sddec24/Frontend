import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { CommonActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, BottomNavigation } from 'react-native-paper';
import FA5 from 'react-native-vector-icons/FontAwesome5';
import FA6 from 'react-native-vector-icons/FontAwesome6';
import Home from './Pages/Home';
import Payment from './Pages/Payment';
import axios from 'axios';

export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName={"Home"}
      screenOptions={{
        headerShown: false,
      }}
      tabBar={({ navigation, state, descriptors, insets }) => (
        <BottomNavigation.Bar
          navigationState={state}
          safeAreaInsets={insets}
          onTabPress={({ route, preventDefault }) => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (event.defaultPrevented) {
              preventDefault();
            } else {
              navigation.dispatch({
                ...CommonActions.navigate(route.name, route.params),
                target: state.key,
              });
            }
          }}
          renderIcon={({ route, focused, color }) => {
            const { options } = descriptors[route.key];
            if (options.tabBarIcon) {
              return options.tabBarIcon({ focused, color, size: 24 });
            }
            return null;
          }}
          getLabelText={({ route }) => {
            const { options } = descriptors[route.key];
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                  ? options.title
                  : route.title;

            return label;
          }}
        />
      )}
    >

      {<Tab.Screen
        name="Park"
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Park',
          tabBarIcon: ({ color, size }) => {
            return <FA5 name="map-marker-alt" size={size} color={color} />;
          },
        }}
      />}

      {<Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => {
            return <FA6 name="map-location-dot" size={size} color={color} />;
          },
        }}
      />}

      {<Tab.Screen
        name="Reserve"
        component={Payment}
        initialParams={{spot_id: 0}}
        options={{
          tabBarLabel: 'Reserve',
          tabBarIcon: ({ color, size }) => {
            return <FA5 name="ticket-alt" size={size} color={color} />;
          },
        }}
      />}

    </Tab.Navigator>
  );
}

function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text variant="headlineMedium">Settings!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});