import { Pressable, ScrollView, Text, View } from 'react-native'

import { useResponsive } from '../../hooks/useResponsive'
import { openSupport } from '../../utils/openNewApp'
import styles from './styles'

const STEPS = [
  'Toque em "Baixar o app TravelBACK" na aba Início.',
  'Instale o TravelBACK pela App Store.',
  'Abra o TravelBACK e entre com o mesmo e-mail e senha do TravelCash.',
  'Pronto: seu saldo e histórico já estarão lá.',
]

const Support = () => {
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
        <Text style={[styles.title, isTablet && styles.titleTablet]}>
          Suporte
        </Text>
        <Text style={[styles.subtitle, isTablet && styles.subtitleTablet]}>
          Precisa de ajuda com a migração para o TravelBACK? Fale com o nosso
          atendimento.
        </Text>

        <View style={[styles.card, isTablet && styles.cardTablet]}>
          <Text style={[styles.cardTitle, isTablet && styles.cardTitleTablet]}>
            Atendimento via WhatsApp
          </Text>
          <Text style={[styles.cardText, isTablet && styles.cardTextTablet]}>
            Nossa equipe ajuda você a migrar sua conta e tirar qualquer dúvida.
          </Text>
          <Pressable
            onPress={openSupport}
            style={({ pressed }) => [
              styles.button,
              isTablet && styles.buttonTablet,
              pressed && styles.buttonPressed,
            ]}
          >
            <Text
              style={[styles.buttonText, isTablet && styles.buttonTextTablet]}
            >
              Falar no WhatsApp
            </Text>
          </Pressable>
        </View>

        <Text style={[styles.stepsTitle, isTablet && styles.stepsTitleTablet]}>
          Como migrar em 4 passos
        </Text>
        {STEPS.map((text, index) => (
          <View key={index} style={styles.step}>
            <Text
              style={[styles.stepNumber, isTablet && styles.stepNumberTablet]}
            >
              {index + 1}.
            </Text>
            <Text style={[styles.stepText, isTablet && styles.stepTextTablet]}>
              {text}
            </Text>
          </View>
        ))}
      </View>
    </ScrollView>
  )
}

export default Support
