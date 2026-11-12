import { StyleSheet } from 'react-native'

import { theme } from '../../config'

export default StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 28,
    paddingVertical: 32,
    justifyContent: 'center',
  },
  scrollContentTablet: {
    justifyContent: 'flex-start',
    paddingTop: 72,
    paddingBottom: 48,
  },
  inner: {
    width: '100%',
    alignSelf: 'center',
  },
  heading: {
    fontFamily: 'Ubuntu_700Bold',
    fontSize: 28,
    lineHeight: 34,
    color: theme.text,
  },
  headingTablet: {
    fontSize: 40,
    lineHeight: 48,
  },
  logo: {
    width: 210,
    height: 29, // proporção original 499x69
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 28,
  },
  logoTablet: {
    width: 300,
    height: 41,
    marginTop: 18,
    marginBottom: 40,
  },
  body: {
    fontFamily: 'RedHatText_400Regular',
    fontSize: 15,
    lineHeight: 23,
    color: theme.textMuted,
    marginBottom: 32,
  },
  bodyTablet: {
    fontSize: 19,
    lineHeight: 30,
    marginBottom: 44,
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
  buttonTablet: {
    height: 58,
    borderRadius: 29,
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
  buttonTextTablet: {
    fontSize: 19,
  },
})
