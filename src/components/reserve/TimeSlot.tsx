import { colors } from '@/constants';
import useThemeStore from '@/stores/themeStore';
import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import CustomText from '../common/CustomText';
import responsive from '@/utils/responsive';
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
      <CustomText
        type="caption1"
        style={[
          {
            color: isSelected
              ? colors.light.UNCHANGE_WHITE
              : colors.light.UNCHANGE_BLACK,
          },
        ]}>
        {time}
      </CustomText>
    </Pressable>
  );
};

export default TimeSlot;

const styles = StyleSheet.create({
  timeSlot: {
    padding: responsive(8),
    borderRadius: responsive(6),
    alignItems: 'center',
    justifyContent: 'center',
    width: responsive(56),
  },
});
