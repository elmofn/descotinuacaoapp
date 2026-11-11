import { StyleSheet } from 'react-native'

import { theme } from '../../config'

export default StyleSheet.create({
  scrollContent: {
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 40,
  },
  title: {
    fontFamily: 'Ubuntu_700Bold',
    fontSize: 24,
    color: theme.text,
    marginBottom: 6,
  },
  subtitle: {
    fontFamily: 'RedHatText_400Regular',
    fontSize: 14,
    lineHeight: 20,
    color: theme.textMuted,
    marginBottom: 20,
  },
  item: {
    borderTopWidth: 1,
    borderTopColor: theme.border,
  },
  itemHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
  },
  question: {
    flex: 1,
    fontFamily: 'RedHatText_500Medium',
    fontSize: 15,
    lineHeight: 21,
    color: theme.text,
    paddingRight: 12,
  },
  chevron: {
    fontFamily: 'RedHatText_700Bold',
    fontSize: 18,
    color: theme.accent,
    width: 20,
    textAlign: 'center',
  },
  answer: {
    fontFamily: 'RedHatText_400Regular',
    fontSize: 14,
    lineHeight: 22,
    color: theme.textMuted,
    paddingBottom: 18,
  },
  answerBold: {
    fontFamily: 'RedHatText_700Bold',
    color: theme.text,
  },
})
