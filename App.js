import { StatusBar } from 'expo-status-bar'
import { useFonts } from 'expo-font'
import { Ubuntu_700Bold } from '@expo-google-fonts/ubuntu/700Bold'
import { RedHatText_400Regular } from '@expo-google-fonts/red-hat-text/400Regular'
import { RedHatText_500Medium } from '@expo-google-fonts/red-hat-text/500Medium'
import { RedHatText_700Bold } from '@expo-google-fonts/red-hat-text/700Bold'

import Discontinued from './src/screens/Discontinued'

export default function App() {
  const [fontsLoaded] = useFonts({
    Ubuntu_700Bold,
    RedHatText_400Regular,
    RedHatText_500Medium,
    RedHatText_700Bold,
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <>
      <Discontinued />
      <StatusBar style="dark" />
    </>
  )
}
