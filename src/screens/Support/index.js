import { Pressable, ScrollView, Text, View } from 'react-native'

import { openSupport } from '../../utils/openNewApp'
import styles from './styles'

const STEPS = [
  'Toque em "Baixar o app TravelBACK" na aba Início.',
  'Instale o TravelBACK pela App Store.',
  'Abra o TravelBACK e entre com o mesmo e-mail e senha do TravelCash.',
  'Pronto: seu saldo e histórico já estarão lá.',
]

const Support = () => {
  return (
    <ScrollView
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.title}>Suporte</Text>
      <Text style={styles.subtitle}>
        Precisa de ajuda com a migração para o TravelBACK? Fale com o nosso
        atendimento.
      </Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Atendimento via WhatsApp</Text>
        <Text style={styles.cardText}>
          Nossa equipe ajuda você a migrar sua conta e tirar qualquer dúvida.
        </Text>
        <Pressable
          onPress={openSupport}
          style={({ pressed }) => [
            styles.button,
            pressed && styles.buttonPressed,
          ]}
        >
          <Text style={styles.buttonText}>Falar no WhatsApp</Text>
        </Pressable>
      </View>

      <Text style={styles.stepsTitle}>Como migrar em 4 passos</Text>
      {STEPS.map((text, index) => (
        <View key={index} style={styles.step}>
          <Text style={styles.stepNumber}>{index + 1}.</Text>
          <Text style={styles.stepText}>{text}</Text>
        </View>
      ))}
    </ScrollView>
  )
}

export default Support
