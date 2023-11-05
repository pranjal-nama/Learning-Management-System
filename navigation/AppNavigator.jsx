import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CourseListing from '../screens/CourseListing';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="CourseListing" component={CourseListing} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
