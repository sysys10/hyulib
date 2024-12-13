import React from 'react';
import {mainBottomNavigations} from '@/constants';
import Home from '@/screens/Home';
import Seats from '@/screens/Seats';
import Setting from '@/screens/Setting';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ReserveStack from '../stack/ReserveStackNavigation';

export type mainBottomNavigationProps = {
  [mainBottomNavigations.HOME]: undefined;
  [mainBottomNavigations.BOOK_MARK]: undefined;
  [mainBottomNavigations.RESERVE]: undefined;
  [mainBottomNavigations.SETTING]: undefined;
};

const BottomTab = createBottomTabNavigator<mainBottomNavigationProps>();

const MainBottomNavigation = (): React.JSX.Element => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name={mainBottomNavigations.HOME} component={Home} />
      <BottomTab.Screen
        name={mainBottomNavigations.BOOK_MARK}
        component={Seats}
      />
      <BottomTab.Screen
        name={mainBottomNavigations.RESERVE}
        options={{headerShown: false}}
        component={ReserveStack}
      />
      <BottomTab.Screen
        name={mainBottomNavigations.SETTING}
        component={Setting}
      />
    </BottomTab.Navigator>
  );
};

export default MainBottomNavigation;
