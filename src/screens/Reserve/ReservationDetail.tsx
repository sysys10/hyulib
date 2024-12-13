import React from 'react';
import { useRoute, RouteProp } from '@react-navigation/native';
import type { ReserveStackParamList } from '@/navigation/stack/ReserveStackNavigation';
import {
  SafeAreaView,
  View,
  StyleSheet,
  ScrollView,
  Platform,
} from 'react-native';
import CustomText from '@/components/common/CustomText';
import { colors, CREATIVE_ZONES } from '@/constants';
import responsive from '@/utils/responsive';
import useThemeStore from '@/stores/themeStore';
import RoomCard from '@/components/reserve/RoomCard';

type ReservationDetailRouteProp = RouteProp<
  ReserveStackParamList,
  'ReservationDetail'
>;

const ReservationDetail = () => {
  const route = useRoute<ReservationDetailRouteProp>();
  const { campus } = route.params;
  const theme = useThemeStore(s => s.theme);

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors[theme].bg }]}>
      <View
        style={[styles.header, { borderBottomColor: colors[theme].GRAY_200 }]}>
        <CustomText variant="primary" weight="bold" type="title2">
          {campus === 'seoul' ? '서울캠퍼스' : 'ERICA캠퍼스'} 예약
        </CustomText>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {CREATIVE_ZONES.map(zoneName => (
          <RoomCard key={zoneName} roomName={zoneName} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: responsive(16),
    borderBottomWidth: 1,
  },
  scrollContent: {
    padding: responsive(16),
  },
});

export default ReservationDetail;
