import { useNavigation } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { mainBottomNavigationProps } from '@/navigation/bottomTab/BottomTabNavigation';

export default function useBottomNavigation() {
  return useNavigation<BottomTabNavigationProp<mainBottomNavigationProps>>();
}
