import { Image, Pressable, ScrollView, Text, View } from 'react-native'

import TravelBackLogo from '../../../assets/travelback-logo-purple.png'
import { useResponsive } from '../../hooks/useResponsive'
import { openNewApp } from '../../utils/openNewApp'
import styles from './styles'

const Home = () => {
  const { isTablet, contentMaxWidth } = useResponsive()

  return (
    <ScrollView
      contentContainerStyle={[
        styles.scrollContent,
        isTablet && styles.scrollContentTablet,
      ]}
      showsVerticalScrollIndicator={false}
    >
      <View style={[styles.inner, { maxWidth: contentMaxWidth }]}>
        <Text style={[styles.heading, isTablet && styles.headingTablet]}>
          A TravelCash agora é
        </Text>

        <Image
          source={TravelBackLogo}
          style={[styles.logo, isTablet && styles.logoTablet]}
        />

        <Text style={[styles.body, isTablet && styles.bodyTablet]}>
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
          onPress={openNewApp}
          style={({ pressed }) => [
            styles.button,
            isTablet && styles.buttonTablet,
            pressed && styles.buttonPressed,
          ]}
        >
          <Text
            style={[styles.buttonText, isTablet && styles.buttonTextTablet]}
          >
            Baixar o app TravelBACK
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  )
}

export default Home
