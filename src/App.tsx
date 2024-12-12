import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import MainBottomNavigation from './navigation/bottomTab/BottomTabNavigation';

function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView>
      <NavigationContainer>
        <MainBottomNavigation />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

export default App;
