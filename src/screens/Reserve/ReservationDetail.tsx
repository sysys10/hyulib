import React from 'react';
import { useRoute, RouteProp } from '@react-navigation/native';
import type { ReserveStackParamList } from '@/navigation/stack/ReserveStackNavigation';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Pressable,
  ScrollView,
  Platform,
} from 'react-native';
import CustomText from '@/components/common/CustomText';
import { colors } from '@/constants';
import responsive from '@/utils/responsive';
import useThemeStore from '@/stores/themeStore';

// 상수 정의
const CREATIVE_ZONES = [
  'CreativeZone 1',
  'CreativeZone 2',
  'CreativeZone 3',
  'CreativeZone 4',
  'CreativeZone 5',
  'CreativeZone 6',
  'CreativeZone 7',
  'CreativeZone 8',
  'CreativeZone 9',
  'CreativeZone 10',
  'CreativeZone 11',
  'CreativeZone 12',
  'CreativeZone 13',
  'CreativeZone 14',
  'CreativeZone 15',
  'CreativeZone 16',
  'CreativeZone 17',
  'CreativeZone 18',
  'CreativeZone 19',
  'CreativeZone 20',
  'CreativeZone 21',
] as const;

const TIME_SLOTS = [
  '09:00',
  '10:00',
  '11:00',
  '12:00',
  '13:00',
  '14:00',
  '15:00',
  '16:00',
  '17:00',
  '18:00',
  '19:00',
  '20:00',
  '21:00',
] as const;

type ReservationDetailRouteProp = RouteProp<
  ReserveStackParamList,
  'ReservationDetail'
>;

interface TimeSlotProps {
  time: string;
  isAvailable: boolean;
  isSelected: boolean;
  onPress: () => void;
}

const TimeSlot = ({
  time,
  isAvailable,
  isSelected,
  onPress,
}: TimeSlotProps) => {
  const theme = useThemeStore(s => s.theme);

  return (
    <Pressable
      onPress={onPress}
      disabled={!isAvailable}
      style={[
        styles.timeSlot,
        {
          backgroundColor: isSelected
            ? colors[theme].BG_BLUE_500
            : isAvailable
            ? colors[theme].BG_BLUE_200
            : colors[theme].GRAY_200,
        },
      ]}>
      <CustomText type="caption1">{time}</CustomText>
    </Pressable>
  );
};

interface RoomCardProps {
  roomName: string;
}

const RoomCard = ({ roomName }: RoomCardProps) => {
  const [selectedTime, setSelectedTime] = React.useState<string | null>(null);
  const theme = useThemeStore(s => s.theme);

  return (
    <View style={[styles.card, { backgroundColor: colors[theme].WHITE }]}>
      <CustomText variant="primary" weight="bold" type="title3">
        {roomName}
      </CustomText>
      <View style={styles.timeContainer}>
        {TIME_SLOTS.map(time => (
          <TimeSlot
            key={time}
            time={time}
            isAvailable={true} // 임시로 랜덤 설정
            isSelected={selectedTime === time}
            onPress={() => setSelectedTime(time)}
          />
        ))}
      </View>
      <Pressable
        style={[
          styles.reserveButton,
          { backgroundColor: colors[theme].bg_blue },
        ]}
        onPress={() => console.log('Reserve:', roomName, selectedTime)}>
        <CustomText style={styles.buttonText}>예약하기</CustomText>
      </Pressable>
    </View>
  );
};

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
  card: {
    borderRadius: responsive(12),
    padding: responsive(16),
    marginBottom: responsive(16),
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  timeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: responsive(12),
    gap: responsive(8),
  },
  timeSlot: {
    padding: responsive(8),
    borderRadius: responsive(6),
    alignItems: 'center',
    justifyContent: 'center',
    width: responsive(56),
  },
  timeText: {
    fontSize: responsive(12),
  },
  reserveButton: {
    padding: responsive(12),
    borderRadius: responsive(8),
    alignItems: 'center',
    marginTop: responsive(8),
  },
  buttonText: {
    color: colors.light.UNCHANGE_WHITE,
  },
});

export default ReservationDetail;
