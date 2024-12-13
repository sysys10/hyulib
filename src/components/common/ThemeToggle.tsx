import { colors } from '@/constants';
import useThemeStore from '@/stores/themeStore';
import responsive from '@/utils/responsive';
import React from 'react';
import { Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
interface ThemeToggleProps {}

function ThemeToggle({}: ThemeToggleProps) {
  const { theme, setTheme } = useThemeStore();

  return (
    <Pressable
      onPress={() => {
        setTheme(theme === 'light' ? 'dark' : 'light');
      }}>
      <Icon
        name="dark-mode"
        size={responsive(32)}
        color={colors[theme].UNCHANGE_WHITE}
      />
    </Pressable>
  );
}

export default ThemeToggle;
