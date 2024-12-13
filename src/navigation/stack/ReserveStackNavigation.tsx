import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Reserve from '@/screens/Reserve/Reserve';
import ReservationDetail from '@/screens/Reserve/ReservationDetail';

export type ReserveStackParamList = {
  ReserveMain: undefined;
  ReservationDetail: {
    campus: 'seoul' | 'erica';
  };
};

const Stack = createStackNavigator<ReserveStackParamList>();

const ReserveStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ReserveMain"
        options={{title: '그룹 스터디룸'}}
        component={Reserve}
      />
      <Stack.Screen
        name="ReservationDetail"
        options={{title: '그룹공간현황', headerBackTitle: ''}}
        component={ReservationDetail}
      />
    </Stack.Navigator>
  );
};

export default ReserveStack;
