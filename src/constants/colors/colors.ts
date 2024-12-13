interface ColorProps {
  // 배경 관련
  bg: string;
  bg_setion: string;
  bg_bottom_sheet: string;
  bg_bottom_tab: string;
  bg_button: string;
  bg_button_focus: string;
  bg_card: string;
  bg_input: string;
  bg_dim: string;

  // 텍스트 관련
  text_primary: string;
  text_secondary: string;
  text_tertiary: string;
  text_placeholder: string;
  text_link: string;
  text_success: string;
  text_warning: string;
  text_error: string;

  // 보더 관련
  border: string;
  border_focus: string;
  border_error: string;
  shadow_color: string;
  // 아이콘 관련
  icon_primary: string;
  icon_secondary: string;
  icon_disabled: string;

  // 상태 관련
  success: string;
  warning: string;
  error: string;
  info: string;
  active: string;
  inactive: string;

  // 기타 UI 요소
  divider: string;
  shadow: string;
  overlay: string;
  badge: string;
}

const light: ColorProps = {
  // 배경 관련
  bg: '#fffff',
  bg_setion: '#ffffff',
  bg_bottom_sheet: '#FFFFFF',
  bg_bottom_tab: '#FFFFFF',
  bg_button: '#e6e9ed',
  bg_button_focus: '#d9dce1',
  bg_card: '#FFFFFF',
  bg_input: '#FFFFFF',
  bg_dim: 'rgba(0, 0, 0, 0.5)',

  // 텍스트 관련
  text_primary: '#1F2937',
  text_secondary: '#4B5563',
  text_tertiary: '#9CA3AF',
  text_placeholder: '#D1D5DB',
  text_link: '#2563EB',
  text_success: '#059669',
  text_warning: '#D97706',
  text_error: '#DC2626',

  // 보더 관련
  border: '#E5E7EB',
  border_focus: '#2563EB',
  border_error: '#DC2626',

  shadow_color: "#3C4043",


  // 아이콘 관련
  icon_primary: '#1F2937',
  icon_secondary: '#6B7280',
  icon_disabled: '#D1D5DB',

  // 상태 관련
  success: '#10B981',
  warning: '#F59E0B',
  error: '#EF4444',
  info: '#3B82F6',
  active: '#60A5FA',
  inactive: '#E5E7EB', // 연한 회색

  // 기타 UI 요소
  divider: '#E5E7EB',
  shadow: 'rgba(0, 0, 0, 0.1)',
  overlay: 'rgba(0, 0, 0, 0.5)',
  badge: '#EF4444',
};

const dark: ColorProps = {
  // 배경 관련
  bg: '#101013',
  bg_setion: '#17171C',
  bg_bottom_sheet: '#17171C',
  bg_bottom_tab: '#17171C',
  bg_button: '#3B3B46',
  bg_button_focus: '#2C2C35',
  bg_card: '#17171C',
  bg_input: '#27272C',
  bg_dim: 'rgba(0, 0, 0, 0.7)',

  // 텍스트 관련
  text_primary: '#F9FAFB',
  text_secondary: '#D1D5DB',
  text_tertiary: '#9CA3AF',
  text_placeholder: '#6B7280',
  text_link: '#60A5FA',
  text_success: '#34D399',
  text_warning: '#FBBF24',
  text_error: '#F87171',

  // 보더 관련
  border: '#27272C',
  border_focus: '#60A5FA',
  border_error: '#F87171',
  shadow_color: "#FFFFFF",

  // 아이콘 관련
  icon_primary: '#F9FAFB',
  icon_secondary: '#9CA3AF',
  icon_disabled: '#4B5563',

  // 상태 관련
  success: '#059669',
  warning: '#D97706',
  error: '#DC2626',
  info: '#2563EB',
  active: '#3B82F6', // 진한 파란색
  inactive: '#374151', // 진한 회색
  // 기타 UI 요소
  divider: '#27272C',
  shadow: 'rgba(0, 0, 0, 0.3)',
  overlay: 'rgba(0, 0, 0, 0.7)',
  badge: '#EF4444',
};

export const colors = { dark, light };
