import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {
  NavigationProp,
  useNavigation as useReactNavigation,
} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import NavigatorParamList from '../navigation/types';

export const useNavigation = () => {
  return useReactNavigation<NavigationProp<NavigatorParamList>>();
};

export const useNativeStackNavigation = () => {
  return useReactNavigation<NativeStackNavigationProp<NavigatorParamList>>();
};

export const useBottomTabNavigation = () => {
  return useReactNavigation<BottomTabNavigationProp<NavigatorParamList>>();
};
