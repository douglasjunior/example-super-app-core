import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView} from 'react-native';

import RootStackNavigator from './navigation/RootStackNavigator';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={{flex: 1}}>
        <RootStackNavigator />
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
