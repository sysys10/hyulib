import { colors, TIME_SLOTS } from '@/constants';
import useThemeStore from '@/stores/themeStore';
import React, { useState } from 'react';
import CustomText from '../common/CustomText';
import { Pressable, StyleSheet, View } from 'react-native';
import TimeSlot from './TimeSlot';
import responsive from '@/utils/responsive';
import { Platform } from 'react-native';

interface RoomCardProps {
  roomName: string;
}

const RoomCard = ({ roomName }: RoomCardProps) => {
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const theme = useThemeStore(s => s.theme);

  const handleReservation = () => {
    if (selectedTime) {
      setModalVisible(true);
    }
  };

  //   const handleConfirm = reservationData => {
  //     console.log('Reservation:', {
  //       room: roomName,
  //       time: selectedTime,
  //       ...reservationData,
  //     });
  //     setModalVisible(false);
  //   };

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
            isAvailable={true}
            isSelected={selectedTime === time}
            onPress={() => setSelectedTime(time)}
          />
        ))}
      </View>
      <Pressable
        style={[
          styles.reserveButton,
          {
            backgroundColor: selectedTime
              ? colors[theme].bg_blue
              : colors[theme].GRAY_300,
          },
        ]}
        disabled={!selectedTime}
        onPress={handleReservation}>
        <CustomText style={styles.buttonText}>
          {selectedTime ? '예약하기' : '시간을 선택하세요'}
        </CustomText>
      </Pressable>
      {/* {selectedTime && (
        <ReservationModal
          isVisible={modalVisible}
          onClose={() => setModalVisible(false)}
          selectedTime={selectedTime}
          onConfirm={handleConfirm}
        />
      )} */}
    </View>
  );
};

const styles = StyleSheet.create({
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
  reserveButton: {
    padding: responsive(12),
    borderRadius: responsive(8),
    alignItems: 'center',
    marginTop: responsive(8),
  },
  buttonText: {
    color: colors.light.UNCHANGE_WHITE,
    fontWeight: '500',
  },
});

export default RoomCard;
