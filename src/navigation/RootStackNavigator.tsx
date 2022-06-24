import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NavigatorParamList from './types';
import HomeTabNavigator from './HomeTabNavigator';
import LoginScreen from '../domains/login/LoginScreen';

const Stack = createNativeStackNavigator<NavigatorParamList>();

const RootStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={HomeTabNavigator} />
    </Stack.Navigator>
  );
};

export default RootStackNavigator;
