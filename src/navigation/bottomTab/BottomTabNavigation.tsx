import React from 'react';
import { mainBottomNavigations, tabBarIcons } from '@/constants';
import Home from '@/screens/Home';
import Seats from '@/screens/Seats';
import Setting from '@/screens/Setting';
import {
  BottomTabBarProps,
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import ReserveStack from '../stack/ReserveStackNavigation';
import CustomHeader from '@/components/common/CustomHeader';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors } from '@/constants';
import useThemeStore from '@/stores/themeStore';

export type mainBottomNavigationProps = {
  [mainBottomNavigations.HOME]: undefined;
  [mainBottomNavigations.SEATS]: undefined;
  [mainBottomNavigations.RESERVE]: undefined;
  [mainBottomNavigations.SETTING]: undefined;
};

export type MainBottomTabNavigationProps =
  BottomTabNavigationProp<mainBottomNavigationProps>;

const BottomTab = createBottomTabNavigator<mainBottomNavigationProps>();
const MainBottomNavigation = () => {
  const theme = useThemeStore(s => s.theme);

  return (
    <BottomTab.Navigator
      screenOptions={({ route }) => ({
        header: () => <CustomHeader name={route.name} />,
        tabBarIcon: ({ focused }) => (
          <Icon
            name={tabBarIcons[route.name]}
            size={24}
            color={focused ? colors[theme].BLUE_500 : colors[theme].GRAY_500}
          />
        ),
        tabBarActiveTintColor: colors[theme].BLUE_500,
        tabBarInactiveTintColor: colors[theme].GRAY_500,
        tabBarLabelStyle: {
          fontSize: 12,
        },
      })}>
      <BottomTab.Screen
        name={mainBottomNavigations.HOME}
        component={Home}
        options={{
          tabBarLabel: '홈',
        }}
      />
      <BottomTab.Screen
        name={mainBottomNavigations.SEATS}
        component={Seats}
        options={{
          tabBarLabel: '좌석',
        }}
      />
      <BottomTab.Screen
        name={mainBottomNavigations.RESERVE}
        component={ReserveStack}
        options={{
          tabBarLabel: '예약',
        }}
      />
      <BottomTab.Screen
        name={mainBottomNavigations.SETTING}
        component={Setting}
        options={{
          tabBarLabel: '설정',
        }}
      />
    </BottomTab.Navigator>
  );
};

export default MainBottomNavigation;
