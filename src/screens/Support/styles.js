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
    lineHeight: 21,
    color: theme.textMuted,
    marginBottom: 24,
  },
  card: {
    borderWidth: 1,
    borderColor: theme.border,
    borderRadius: 14,
    padding: 18,
    marginBottom: 16,
  },
  cardTitle: {
    fontFamily: 'RedHatText_700Bold',
    fontSize: 16,
    color: theme.text,
    marginBottom: 4,
  },
  cardText: {
    fontFamily: 'RedHatText_400Regular',
    fontSize: 14,
    lineHeight: 21,
    color: theme.textMuted,
    marginBottom: 14,
  },
  button: {
    backgroundColor: theme.button,
    borderRadius: 24,
    height: 46,
    alignItems: 'center',
    justifyContent: 'center',
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
  stepsTitle: {
    fontFamily: 'RedHatText_700Bold',
    fontSize: 16,
    color: theme.text,
    marginTop: 8,
    marginBottom: 10,
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
  stepText: {
    flex: 1,
    fontFamily: 'RedHatText_400Regular',
    fontSize: 14,
    lineHeight: 21,
    color: theme.textMuted,
  },
})
