import { StyleSheet } from 'react-native'

import { theme } from '../../config'

export default StyleSheet.create({
  scrollContent: {
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 40,
  },
  scrollContentTablet: {
    paddingTop: 56,
    paddingHorizontal: 32,
  },
  inner: {
    width: '100%',
    alignSelf: 'center',
  },
  title: {
    fontFamily: 'Ubuntu_700Bold',
    fontSize: 24,
    color: theme.text,
    marginBottom: 6,
  },
  titleTablet: {
    fontSize: 34,
    marginBottom: 10,
  },
  subtitle: {
    fontFamily: 'RedHatText_400Regular',
    fontSize: 14,
    lineHeight: 20,
    color: theme.textMuted,
    marginBottom: 20,
  },
  subtitleTablet: {
    fontSize: 17,
    lineHeight: 25,
    marginBottom: 28,
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
  itemHeaderTablet: {
    paddingVertical: 22,
  },
  question: {
    flex: 1,
    fontFamily: 'RedHatText_500Medium',
    fontSize: 15,
    lineHeight: 21,
    color: theme.text,
    paddingRight: 12,
  },
  questionTablet: {
    fontSize: 18,
    lineHeight: 25,
  },
  chevron: {
    fontFamily: 'RedHatText_700Bold',
    fontSize: 18,
    color: theme.accent,
    width: 20,
    textAlign: 'center',
  },
  chevronTablet: {
    fontSize: 24,
    width: 26,
  },
  answer: {
    fontFamily: 'RedHatText_400Regular',
    fontSize: 14,
    lineHeight: 22,
    color: theme.textMuted,
    paddingBottom: 18,
  },
  answerTablet: {
    fontSize: 17,
    lineHeight: 27,
    paddingBottom: 24,
  },
})
