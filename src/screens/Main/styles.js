import { StyleSheet } from 'react-native'

import { theme } from '../../config'

export default StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: theme.background,
  },
  content: {
    flex: 1,
  },
  tabBar: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: theme.border,
    backgroundColor: theme.background,
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabTablet: {
    paddingVertical: 18,
  },
  tabIcon: {
    fontSize: 18,
    marginBottom: 2,
  },
  tabIconTablet: {
    fontSize: 24,
    marginBottom: 4,
  },
  tabLabel: {
    fontFamily: 'RedHatText_500Medium',
    fontSize: 12,
  },
  tabLabelTablet: {
    fontSize: 15,
  },
})
