const common = {
  // Pink
  PINK_50: '#FDF2F6',
  PINK_100: '#FCE7EF',
  PINK_200: '#FAE2E9',
  PINK_300: '#F9A8C1',
  PINK_400: '#EC87A5',
  PINK_500: '#BF5C79',
  PINK_600: '#C63B64',
  PINK_700: '#9D2F50',
  PINK_800: '#80263F',
  PINK_900: '#672033',

  // Blue
  BLUE_50: '#F0F9FF',
  BLUE_100: '#E0F2FE',
  BLUE_200: '#E6F4FF',
  BLUE_300: '#7CC7FF',
  BLUE_400: '#B4E0FF',
  BLUE_500: '#0D8AFF',
  BLUE_600: '#0284C7',
  BLUE_700: '#0069C9',
  BLUE_800: '#075985',
  BLUE_900: '#0C4A6E',

  // Red
  RED_50: '#FEF2F2',
  RED_100: '#FEE2E2',
  RED_200: '#FFE3E3',
  RED_300: '#FFB4B4',
  RED_400: '#FF8787',
  RED_500: '#FF5F5F',
  RED_600: '#DC2626',
  RED_700: '#B91C1C',
  RED_800: '#991B1B',
  RED_900: '#7F1D1D',

  // Green
  GREEN_50: '#F0FDF4',
  GREEN_100: '#DCFCE7',
  GREEN_200: '#E8F3E2',
  GREEN_300: '#86EFAC',
  GREEN_400: '#CCE6BA',
  GREEN_500: '#82C766',
  GREEN_600: '#16A34A',
  GREEN_700: '#4B9E2E',
  GREEN_800: '#166534',
  GREEN_900: '#14532D',

  // Yellow
  YELLOW_50: '#FEFCE8',
  YELLOW_100: '#FEF9C3',
  YELLOW_200: '#FFF8E1',
  YELLOW_300: '#FDE047',
  YELLOW_400: '#FFE594',
  YELLOW_500: '#FACC15',
  YELLOW_600: '#CA8A04',
  YELLOW_700: '#C7A012',
  YELLOW_800: '#854D0E',
  YELLOW_900: '#713F12',

  // Purple
  PURPLE_50: '#FAF5FF',
  PURPLE_100: '#F3E8FF',
  PURPLE_200: '#E8E8F4',
  PURPLE_300: '#E9D5FF',
  PURPLE_400: '#C4C4E7',
  PURPLE_500: '#7676B8',
  PURPLE_600: '#9333EA',
  PURPLE_700: '#4F4F99',
  PURPLE_800: '#6B21A8',
  PURPLE_900: '#581C87',

  // Fixed colors
  UNCHANGE_WHITE: '#FFF',
  UNCHANGE_BLACK: '#000',
};

// Gray scale도 tailwind 스케일로 업데이트
const grayScale = {
  GRAY_50: '#FAFAFA',
  GRAY_100: '#F8F8F8',
  GRAY_200: '#E7E7E7',
  GRAY_300: '#D8D8D8',
  GRAY_400: '#BABABA',
  GRAY_500: '#8E8E8E',
  GRAY_600: '#6E6E6E',
  GRAY_700: '#575757',
  GRAY_800: '#2E2E2E',
  GRAY_900: '#171717',
};

const colors = {
  light: {
    WHITE: '#FFF',
    BLACK: '#161616',
    ...grayScale,
    ...common,
    // Functional colors는 그대로 유지
    bg_blue: '#0069C9',

    // Blue
    BG_BLUE_200: '#E6F4FF',
    BG_BLUE_500: '#0D8AFF',

    bg: '#FFFFFF',
    bg_secondary: '#F8F8F8',
    text_primary: '#161616',
    text_secondary: '#575757',
    text_tertiary: '#8E8E8E',
    text_button: '#FFFFFF',
    text_success: '#4B9E2E',
    text_warning: '#C7A012',
    text_error: '#C63B64',
    border: '#E7E7E7',
    border_focus: '#0D8AFF',
  },
  dark: {
    WHITE: '#161616',
    BLACK: '#fff',
    // 다크모드의 그레이스케일은 반전
    GRAY_50: '#171717',
    GRAY_100: '#202124',
    GRAY_200: '#3C4043',
    GRAY_300: '#5e5e5e',
    GRAY_400: '#757575',
    GRAY_500: '#8E8E8E',
    GRAY_600: '#B4B4B4',
    GRAY_700: '#F8F8F8',
    GRAY_800: '#FAFAFA',
    GRAY_900: '#FFFFFF',
    ...common,

    BG_BLUE_200: '#7CC7FF',
    BG_BLUE_500: '#0069C9',
    // Functional colors는 그대로 유지
    bg_blue: 'black',

    bg: '#161616',
    bg_secondary: '#202124',
    text_primary: '#FFFFFF',
    text_secondary: '#F8F8F8',
    text_tertiary: '#8E8E8E',
    text_button: '#161616',
    text_success: '#82C766',
    text_warning: '#FACC15',
    text_error: '#EC87A5',
    border: '#3C4043',
    border_focus: '#0D8AFF',
  },
} as const;

const colorHex = {
  RED: colors.light.PINK_400,
  BLUE: colors.light.BLUE_400,
  GREEN: colors.light.GREEN_400,
  YELLOW: colors.light.YELLOW_400,
  PURPLE: colors.light.PURPLE_400,
} as const;

export { colors, colorHex };
