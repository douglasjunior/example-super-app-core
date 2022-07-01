import { NavigationContainer } from '@react-navigation/native';
import { AppProvider, setup } from 'example-super-app-context';
import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native';

import RootStackNavigator from './navigation/RootStackNavigator';

const App: React.FC = () => {

  useEffect(() => {
    setup({
      appName: 'Super App',
      reactotron: true,
    });
  }, []);
  
  return (
    <AppProvider>
      <NavigationContainer>
        <SafeAreaView style={{ flex: 1 }}>
          <RootStackNavigator />
        </SafeAreaView>
      </NavigationContainer>
    </AppProvider>
  );
};

export default App;
