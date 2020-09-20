import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ARScreen from './screens/ARScreen.js';
import CameraScreen from './screens/CameraScreen.js';
import HomeScreen from './screens/HomeScreen.js';

const Tab = createBottomTabNavigator();

export default function App() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Camera" component={CameraScreen} />
          <Tab.Screen name="AR" component={ARScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
}