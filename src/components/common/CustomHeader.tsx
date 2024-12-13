import React from 'react';
import useThemeStore from '@/stores/themeStore';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomText from './CustomText';
import { colors, headerTitles } from '@/constants';
import ThemeToggle from './ThemeToggle';
import responsive from '@/utils/responsive';
import { StyleSheet } from 'react-native';
import { mainBottomNavigationProps } from '@/navigation/bottomTab/BottomTabNavigation';

interface CustomHeaderProps {
  name: keyof mainBottomNavigationProps;
}

const CustomHeader = ({ name }: CustomHeaderProps) => {
  const theme = useThemeStore(s => s.theme);
  return (
    <SafeAreaView
      edges={['top']}
      style={[
        styles.headerContainer,
        { backgroundColor: colors[theme].bg_blue },
      ]}>
      <CustomText
        variant="primary"
        style={styles.title}
        weight="bold"
        type="title2">
        {headerTitles[name]}
      </CustomText>
      <ThemeToggle />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    color: colors.light.UNCHANGE_WHITE,
  },
  headerContainer: {
    paddingHorizontal: responsive(12),
    paddingBottom: responsive(4),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: '#E5E5E5',
  },
});
export default CustomHeader;
