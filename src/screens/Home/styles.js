import { StyleSheet } from 'react-native'

import { theme } from '../../config'

export default StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 28,
    paddingVertical: 32,
    justifyContent: 'center',
  },
  heading: {
    fontFamily: 'Ubuntu_700Bold',
    fontSize: 28,
    lineHeight: 34,
    color: theme.text,
  },
  logo: {
    width: 210,
    height: 29, // proporção original 499x69
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 28,
  },
  body: {
    fontFamily: 'RedHatText_400Regular',
    fontSize: 15,
    lineHeight: 23,
    color: theme.textMuted,
    marginBottom: 32,
  },
  bodyBold: {
    fontFamily: 'RedHatText_700Bold',
    color: theme.text,
  },
  button: {
    backgroundColor: theme.button,
    borderRadius: 24,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonPressed: {
    opacity: 0.85,
  },
  buttonText: {
    fontFamily: 'RedHatText_700Bold',
    fontSize: 16,
    color: '#FFFFFF',
    letterSpacing: 0.25,
  },
})
