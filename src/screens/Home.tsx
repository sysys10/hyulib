import CustomText from '@/components/common/CustomText';
import ThemeToggle from '@/components/common/ThemeToggle';
import { colors } from '@/constants';
import useThemeStore from '@/stores/themeStore';
import React from 'react';
import { SafeAreaView } from 'react-native';

interface HomeProps { }

function Home({ }: HomeProps) {
  const theme = useThemeStore(s => s.theme);
  return (
    <SafeAreaView
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        backgroundColor: colors[theme].bg,
        display: 'flex',
        flex: 1,
      }}>
      <ThemeToggle />
      <CustomText type="largeTitle" variant="primary" weight="bold">
        hello
      </CustomText>
    </SafeAreaView>
  );
}

export default Home;
