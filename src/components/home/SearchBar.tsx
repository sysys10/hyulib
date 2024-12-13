import responsive from '@/utils/responsive';
import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors } from '@/constants';
import useThemeStore from '@/stores/themeStore';

interface SearchBarProps {}

function SearchBar({}: SearchBarProps) {
  const theme = useThemeStore(state => state.theme);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="검색어를 입력하세요"
        placeholderTextColor={colors[theme].GRAY_500}
      />
      <Icon
        name="search"
        size={20}
        color={colors[theme].UNCHANGE_BLACK}
        style={styles.icon}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: responsive(32),
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 'auto',
    paddingHorizontal: responsive(12),
    borderRadius: responsive(8),
    backgroundColor: '#F5F5F5',
  },
  input: {
    flex: 1,
    height: '100%',
    padding: 0,
    fontSize: responsive(14),
  },
  icon: {
    marginLeft: responsive(8),
  },
});

export default SearchBar;
