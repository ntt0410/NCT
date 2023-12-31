import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeNCT from './HomeNCT';
import UserNCT from './UserNCT';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeNCT" component={HomeNCT} /> 
        <Stack.Screen name="UserNCT" component={UserNCT} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;