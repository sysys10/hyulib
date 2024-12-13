import CustomText from '@/components/common/CustomText';
import CampusCard from '@/components/reserve/CampusCard';
import { colors } from '@/constants';
import { ReserveStackParamList } from '@/navigation/stack/ReserveStackNavigation';
import useThemeStore, { ThemeProp } from '@/stores/themeStore';
import responsive from '@/utils/responsive';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useMemo } from 'react';
import {
  StyleSheet,
  View,
  Platform,
  SafeAreaView,
  Pressable,
} from 'react-native';
interface ReserveProps {}

type ReserveScreenNavigationProp = StackNavigationProp<ReserveStackParamList>;

function Reserve({}: ReserveProps) {
  const navigation = useNavigation<ReserveScreenNavigationProp>();

  const theme = useThemeStore(s => s.theme);
  const styles = useMemo(() => customStyle(theme), [theme]);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.cardContainer}>
          <CampusCard
            image={require('@/assets/images/erica.png')}
            name="ERICA 캠퍼스"
            onPress={() =>
              navigation.navigate('ReservationDetail', { campus: 'erica' })
            }
          />
          <CampusCard
            image={require('@/assets/images/seoul.jpg')}
            name="서울 캠퍼스"
            onPress={() =>
              navigation.navigate('ReservationDetail', { campus: 'seoul' })
            }
          />
        </View>

        <View>
          <Pressable style={[styles.btn, styles.blue]}>
            <CustomText variant="primary" type="body" weight="semiBold">
              나의 시설 예약
            </CustomText>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const customStyle = (theme: ThemeProp) => {
  return StyleSheet.create({
    blue: {
      backgroundColor: colors[theme].bg_secondary,
      borderColor: colors[theme].GRAY_600,
      borderWidth: 1,
    },
    btn: {
      marginTop: responsive(8),
      maxWidth: '90%',
      width: '100%',
      paddingVertical: responsive(8),
      marginHorizontal: 'auto',
      borderRadius: 8,
      alignItems: 'center',
    },
    container: {
      height: '100%',
      width: '100%',
      paddingTop: responsive(12),
      backgroundColor: colors[theme].WHITE,
    },
    cardContainer: {
      marginVertical: responsive(8),
      flexDirection: 'row',
      justifyContent: 'space-evenly',
    },
    backImg: {
      width: responsive(150),
      height: responsive(150),
      borderRadius: responsive(8),
    },
    backImgStyle: {
      height: '100%',
      opacity: 0.8,
      justifyContent: 'center',
      alignItems: 'center',
    },
    card: {
      width: responsive(150),
      height: responsive(150),
      borderRadius: responsive(8),
      overflow: 'hidden',
      ...Platform.select({
        ios: {
          shadowColor: '#3C4043',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 8,
        },
        android: {
          elevation: 5,
        },
      }),
    },
    cardText: {
      color: 'white',
      textAlign: 'center',
    },
  });
};

export default Reserve;
