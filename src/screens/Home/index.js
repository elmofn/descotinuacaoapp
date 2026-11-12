import { useEffect, useRef } from 'react'
import { Animated, Easing, Pressable, ScrollView, Text, View } from 'react-native'

import TravelBackLogo from '../../../assets/travelback-logo-purple.png'
import { useResponsive } from '../../hooks/useResponsive'
import { openNewApp } from '../../utils/openNewApp'
import styles from './styles'

// Animação de entrada sutil: cada elemento surge com fade + leve subida,
// em cascata, para dar uma recepção mais "premium".
const useEntrance = (count) => {
  const anims = useRef(
    Array.from({ length: count }, () => new Animated.Value(0))
  ).current

  useEffect(() => {
    Animated.stagger(
      110,
      anims.map((value) =>
        Animated.timing(value, {
          toValue: 1,
          duration: 520,
          easing: Easing.out(Easing.cubic),
          useNativeDriver: true,
        })
      )
    ).start()
  }, [anims])

  return (index) => ({
    opacity: anims[index],
    transform: [
      {
        translateY: anims[index].interpolate({
          inputRange: [0, 1],
          outputRange: [14, 0],
        }),
      },
    ],
  })
}

const Home = () => {
  const { isTablet, contentMaxWidth } = useResponsive()
  const entrance = useEntrance(4)

  return (
    <ScrollView
      contentContainerStyle={[
        styles.scrollContent,
        isTablet && styles.scrollContentTablet,
      ]}
      showsVerticalScrollIndicator={false}
    >
      <View style={[styles.inner, { maxWidth: contentMaxWidth }]}>
        <Animated.Text
          style={[styles.heading, isTablet && styles.headingTablet, entrance(0)]}
        >
          A TravelCash agora é
        </Animated.Text>

        <Animated.Image
          source={TravelBackLogo}
          style={[styles.logo, isTablet && styles.logoTablet, entrance(1)]}
        />

        <Animated.Text
          style={[styles.body, isTablet && styles.bodyTablet, entrance(2)]}
        >
          A sua carteira de viagens evoluiu: agora ela é global e traz ainda
          mais vantagens!{'\n\n'}
          Com nova marca, novo aplicativo e um e‑commerce completo para você
          fazer seus resgates: são mais de 1,4 milhão de hotéis pelo mundo,
          passagens aéreas em mais de 250 companhias, passagens de ônibus,
          aluguel de carros e seguro-viagem.{'\n\n'}
          <Text style={styles.bodyBold}>Pode ficar tranquilo</Text>: seu saldo,
          histórico e dados de acesso continuam exatamente os mesmos.{'\n\n'}
          Baixe o novo app agora mesmo e aproveite!
        </Animated.Text>

        <Animated.View style={entrance(3)}>
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
        </Animated.View>
      </View>
    </ScrollView>
  )
}

export default Home
