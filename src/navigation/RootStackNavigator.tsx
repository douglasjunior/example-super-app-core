import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NavigatorParamList from './types';
import StartScreen from '../domains/start/StartScreen';
import HomeTabNavigator from './HomeTabNavigator';

const Stack = createNativeStackNavigator<NavigatorParamList>();

const RootStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Start" component={StartScreen} />
      <Stack.Screen name="Home" component={HomeTabNavigator} />
    </Stack.Navigator>
  );
};

export default RootStackNavigator;
