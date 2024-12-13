// screens/Reserve/ReservationDetail.tsx
import { useRoute, RouteProp } from '@react-navigation/native';
import type { ReserveStackParamList } from '@/navigation/stack/ReserveStackNavigation';
import { SafeAreaView, View } from 'react-native';
import CustomText from '@/components/common/CustomText';

type ReservationDetailRouteProp = RouteProp<ReserveStackParamList, 'ReservationDetail'>;

const ReservationDetail = () => {
    const route = useRoute<ReservationDetailRouteProp>();
    const { campus } = route.params;

    return (
        <SafeAreaView>
            <View>
                <CustomText>
                    {campus === 'seoul' ? '서울캠퍼스' : 'ERICA캠퍼스'} 예약 페이지
                </CustomText>
            </View>
        </SafeAreaView>
    );
};

export default ReservationDetail;