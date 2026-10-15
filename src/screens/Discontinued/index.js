import {
  Image,
  Linking,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native'

import TravelBackLogo from '../../../assets/travelback-logo-purple.png'
import styles from './styles'

// TODO: substituir pelos links reais do novo app (TravelBACK) nas lojas antes de publicar.
const NEW_APP_IOS_URL = 'https://apps.apple.com/app/idXXXXXXXXX'
const NEW_APP_ANDROID_URL =
  'https://play.google.com/store/apps/details?id=com.exemplo.travelback'

const SUPPORT_WHATSAPP_URL =
  'https://api.whatsapp.com/send?phone=5511988167233&text=Olá%20Concierge!'

const Discontinued = () => {
  const handleOpenStore = () => {
    const url = Platform.OS === 'ios' ? NEW_APP_IOS_URL : NEW_APP_ANDROID_URL
    Linking.openURL(url).catch(() => {})
  }

  const handleOpenSupport = () => {
    Linking.openURL(SUPPORT_WHATSAPP_URL).catch(() => {})
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.heading}>A TravelCash agora é</Text>

        <Image source={TravelBackLogo} style={styles.logo} />

        <Text style={styles.body}>
          A sua carteira de viagens evoluiu: agora ela é global e traz ainda
          mais vantagens!{'\n\n'}
          Com nova marca, novo aplicativo e um e‑commerce completo para você
          fazer seus resgates: são mais de 1,4 milhão de hotéis pelo mundo,
          passagens aéreas em mais de 250 companhias, passagens de ônibus,
          aluguel de carros e seguro-viagem.{'\n\n'}
          <Text style={styles.bodyBold}>Pode ficar tranquilo</Text>: seu saldo,
          histórico e dados de acesso continuam exatamente os mesmos.{'\n\n'}
          Baixe o novo app agora mesmo e aproveite!
        </Text>

        <Pressable
          onPress={handleOpenStore}
          style={({ pressed }) => [
            styles.button,
            pressed && styles.buttonPressed,
          ]}
        >
          <Text style={styles.buttonText}>Baixar o app TravelBACK</Text>
        </Pressable>

        <View style={styles.supportWrapper}>
          <Pressable onPress={handleOpenSupport}>
            <Text style={styles.supportText}>
              Dúvidas? Fale com o Atendimento
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Discontinued
