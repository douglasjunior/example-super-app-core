import {NavigationContainer} from '@react-navigation/native';
import {AppProvider} from 'example-super-app-mock';
import React from 'react';
import {SafeAreaView} from 'react-native';

import RootStackNavigator from './navigation/RootStackNavigator';

const App: React.FC = () => {
  return (
    <AppProvider>
      <NavigationContainer>
        <SafeAreaView style={{flex: 1}}>
          <RootStackNavigator />
        </SafeAreaView>
      </NavigationContainer>
    </AppProvider>
  );
};

export default App;
