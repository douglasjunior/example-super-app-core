import { NavigationContainer } from '@react-navigation/native';
import { AppProvider } from 'example-super-app-context';
import React from 'react';
import { SafeAreaView } from 'react-native';

import RootStackNavigator from './navigation/RootStackNavigator';

const appConfig = {
  appName: 'Super App',
  reactotron: true,
}

const App: React.FC = () => {
  return (
    <AppProvider config={appConfig} >
      <NavigationContainer>
        <SafeAreaView style={{ flex: 1 }}>
          <RootStackNavigator />
        </SafeAreaView>
      </NavigationContainer>
    </AppProvider>
  );
};

export default App;
