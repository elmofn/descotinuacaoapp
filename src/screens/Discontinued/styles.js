import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 28,
    paddingVertical: 40,
    justifyContent: 'center',
  },
  heading: {
    fontFamily: 'Ubuntu_700Bold',
    fontSize: 28,
    lineHeight: 34,
    color: '#191919',
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
    color: '#4A4A4A',
    marginBottom: 32,
  },
  bodyBold: {
    fontFamily: 'RedHatText_700Bold',
    color: '#191919',
  },
  button: {
    backgroundColor: '#000000',
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
  supportWrapper: {
    marginTop: 18,
    alignItems: 'center',
  },
  supportText: {
    fontFamily: 'RedHatText_500Medium',
    fontSize: 14,
    lineHeight: 20,
    color: '#04B2D4',
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
})
