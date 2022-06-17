import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import NavigatorParamList from './types';

import {RootStackNavigator as Mini1RootStackNavigator} from 'example-super-app-mini-1';
import {RootStackNavigator as Mini2RootStackNavigator} from 'example-super-app-mini-2';

const Tab = createBottomTabNavigator<NavigatorParamList>();

const HomeTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="TabMini1" component={Mini1RootStackNavigator} />
      <Tab.Screen name="TabMini2" component={Mini2RootStackNavigator} />
    </Tab.Navigator>
  );
};

export default HomeTabNavigator;
