/* eslint-disable no-unused-vars */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Nodes from '../screens/Nodes';
const Stack = createStackNavigator();

export default function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName="Nodes"
      screenOptions={{gestureEnabled: false, headerShown: false}}>
      <Stack.Screen name="Nodes" component={Nodes} />
    </Stack.Navigator>
  );
}
