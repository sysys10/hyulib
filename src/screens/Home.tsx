import React from 'react';
import CustomText from '@/components/common/CustomText';
import useThemeStore, { ThemeProp } from '@/stores/themeStore';
import { Pressable, StyleSheet, View } from 'react-native';
import { colors, menuItems } from '@/constants';
import SearchBar from '@/components/home/SearchBar';
import responsive from '@/utils/responsive';
import Icon from 'react-native-vector-icons/MaterialIcons';

function Home() {
  const theme = useThemeStore(s => s.theme);
  const styles = customStyle(theme);

  return (
    <View style={styles.container}>
      <View style={styles.searchBarContainer}>
        <SearchBar />
      </View>
      <View style={styles.elementsContainer}>
        {menuItems.map((item, index) => (
          <Pressable key={index} style={styles.element}>
            <View style={styles.icon}>
              <Icon name={item.icon} size={32} color={colors[theme].GRAY_700} />
            </View>
            <CustomText variant="primary" weight="regular" type="caption1">
              {item.title}
            </CustomText>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

const customStyle = (theme: ThemeProp) => {
  return StyleSheet.create({
    searchBarContainer: {
      backgroundColor: colors[theme].bg_blue,
      paddingVertical: responsive(12),
      borderBottomWidth: 1,
      borderColor: colors.light.GRAY_200,
    },
    icon: {
      alignItems: 'center',
      justifyContent: 'center',
      width: '80%',
      aspectRatio: 1,
      backgroundColor: colors[theme].GRAY_100,
      marginBottom: responsive(4),
      borderRadius: '100%',
    },
    container: {
      backgroundColor: colors[theme].WHITE,
      flex: 1,
    },
    elementsContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'flex-start',
      padding: responsive(12),
    },
    element: {
      alignItems: 'center',
      justifyContent: 'center',
      width: '25%',
      marginBottom: responsive(16),
    },
  });
};

export default Home;
