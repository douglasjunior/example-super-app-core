import React from 'react';
import {Button, View} from 'react-native';
import {useNativeStackNavigation} from '../../hooks/useNavigation';

const StartScreen = () => {
  const navigation = useNativeStackNavigation();

  return (
    <View style={{flex: 1}}>
      <Button
        title="Iniciar"
        onPress={() => {
          navigation.replace('Home');
        }}
      />
    </View>
  );
};

export default StartScreen;
