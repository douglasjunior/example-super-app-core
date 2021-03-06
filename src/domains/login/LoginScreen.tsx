import React, {useCallback} from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from 'react-native';
import {useAppContext} from 'example-super-app-context';
import {LoginType} from 'example-super-app-context/lib/types';
import {useNativeStackNavigation} from '../../hooks/useNavigation';

const styles = StyleSheet.create({
  context: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 16,
    height: 55,
    borderRadius: 4,
    paddingHorizontal: 16,
    fontSize: 20,
  },
  wellcome: {textAlign: 'center', fontSize: 24, marginBottom: 24},
});

const FAKE_USER: LoginType = {
  accessToken:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
  refreshToken:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
  loggedUser: {
    id: 'a1b2c3',
    name: 'Gabriel Verão',
    email: 'verao@mail.com',
  },
  roles: [],
};

const Input: React.FC<TextInputProps> = props => {
  return (
    <TextInput
      {...props}
      underlineColorAndroid="transparent"
      style={styles.input}
    />
  );
};

const LoginScreen: React.FC = () => {
  const navigation = useNativeStackNavigation();
  const {
    private: {setLogin},
  } = useAppContext();

  const handlePress = useCallback(() => {
    setLogin(FAKE_USER);
    navigation.replace('Home');
  }, [navigation, setLogin]);

  return (
    <View style={styles.context}>
      <Text style={styles.wellcome}>Bem-vindo ao Super App</Text>
      <Input placeholder="E-mail ou CPF" />
      <Input placeholder="Senha" />
      <Button title="Entrar" onPress={handlePress} />
    </View>
  );
};

export default LoginScreen;
