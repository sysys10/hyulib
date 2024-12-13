const mainBottomNavigations = {
  HOME: 'HOME',
  SEATS: 'SEATS',
  RESERVE: 'RESERVE',
  SETTING: 'SETTING',
} as const;

const headerTitles = {
  [mainBottomNavigations.HOME]: '백남학술정보관',
  [mainBottomNavigations.SEATS]: '좌석',
  [mainBottomNavigations.RESERVE]: '그룹스터디룸',
  [mainBottomNavigations.SETTING]: '설정',
} as const;

const tabBarIcons = {
  [mainBottomNavigations.HOME]: 'home',
  [mainBottomNavigations.SEATS]: 'event-seat',
  [mainBottomNavigations.RESERVE]: 'book',
  [mainBottomNavigations.SETTING]: 'settings',
} as const;
export { mainBottomNavigations, headerTitles, tabBarIcons };
