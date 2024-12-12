import { createStackNavigator } from '@react-navigation/stack';

export type RootStackParamList = {
  front: undefined;
  second: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default Stack;
