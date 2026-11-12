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
    lineHeight: 21,
    color: theme.textMuted,
    marginBottom: 24,
  },
  subtitleTablet: {
    fontSize: 17,
    lineHeight: 26,
    marginBottom: 32,
  },
  card: {
    borderWidth: 1,
    borderColor: theme.border,
    borderRadius: 14,
    padding: 18,
    marginBottom: 16,
  },
  cardTablet: {
    padding: 26,
    borderRadius: 18,
    marginBottom: 24,
  },
  cardTitle: {
    fontFamily: 'RedHatText_700Bold',
    fontSize: 16,
    color: theme.text,
    marginBottom: 4,
  },
  cardTitleTablet: {
    fontSize: 20,
  },
  cardText: {
    fontFamily: 'RedHatText_400Regular',
    fontSize: 14,
    lineHeight: 21,
    color: theme.textMuted,
    marginBottom: 14,
  },
  cardTextTablet: {
    fontSize: 17,
    lineHeight: 26,
    marginBottom: 18,
  },
  button: {
    backgroundColor: theme.button,
    borderRadius: 24,
    height: 46,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTablet: {
    height: 56,
    borderRadius: 28,
  },
  buttonPressed: {
    opacity: 0.85,
  },
  buttonText: {
    fontFamily: 'RedHatText_700Bold',
    fontSize: 15,
    color: '#FFFFFF',
    letterSpacing: 0.25,
  },
  buttonTextTablet: {
    fontSize: 18,
  },
  stepsTitle: {
    fontFamily: 'RedHatText_700Bold',
    fontSize: 16,
    color: theme.text,
    marginTop: 8,
    marginBottom: 10,
  },
  stepsTitleTablet: {
    fontSize: 20,
    marginTop: 14,
    marginBottom: 14,
  },
  step: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  stepNumber: {
    fontFamily: 'RedHatText_700Bold',
    fontSize: 14,
    color: theme.accent,
    width: 22,
  },
  stepNumberTablet: {
    fontSize: 17,
    width: 28,
  },
  stepText: {
    flex: 1,
    fontFamily: 'RedHatText_400Regular',
    fontSize: 14,
    lineHeight: 21,
    color: theme.textMuted,
  },
  stepTextTablet: {
    fontSize: 17,
    lineHeight: 26,
  },
})
