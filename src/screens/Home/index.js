import { Image, Pressable, ScrollView, Text } from 'react-native'

import TravelBackLogo from '../../../assets/travelback-logo-purple.png'
import { openNewApp } from '../../utils/openNewApp'
import styles from './styles'

const Home = () => {
  return (
    <ScrollView
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.heading}>A TravelCash agora é</Text>

      <Image source={TravelBackLogo} style={styles.logo} />

      <Text style={styles.body}>
        A sua carteira de viagens evoluiu: agora ela é global e traz ainda mais
        vantagens!{'\n\n'}
        Com nova marca, novo aplicativo e um e‑commerce completo para você fazer
        seus resgates: são mais de 1,4 milhão de hotéis pelo mundo, passagens
        aéreas em mais de 250 companhias, passagens de ônibus, aluguel de carros
        e seguro-viagem.{'\n\n'}
        <Text style={styles.bodyBold}>Pode ficar tranquilo</Text>: seu saldo,
        histórico e dados de acesso continuam exatamente os mesmos.{'\n\n'}
        Baixe o novo app agora mesmo e aproveite!
      </Text>

      <Pressable
        onPress={openNewApp}
        style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
      >
        <Text style={styles.buttonText}>Baixar o app TravelBACK</Text>
      </Pressable>
    </ScrollView>
  )
}

export default Home
