import { useState } from 'react'
import { Pressable, ScrollView, Text, View } from 'react-native'

import { useResponsive } from '../../hooks/useResponsive'
import styles from './styles'

const FAQS = [
  {
    q: 'O que aconteceu com o TravelCash?',
    a: 'O TravelCash foi descontinuado e evoluiu para o TravelBACK: nova marca, novo aplicativo e um e-commerce de viagens completo. Todo o atendimento e os serviços agora acontecem no TravelBACK.',
  },
  {
    q: 'Meu saldo e meu histórico foram perdidos?',
    a: 'Não. Seu saldo, seu histórico e seus dados de acesso continuam exatamente os mesmos — agora dentro do app TravelBACK.',
  },
  {
    q: 'Como faço para migrar?',
    a: 'Baixe o app TravelBACK na loja (botão na aba Início) e entre com o mesmo e-mail e senha que você já usava no TravelCash.',
  },
  {
    q: 'Preciso criar uma nova conta?',
    a: 'Não. Use o mesmo login do TravelCash. Sua conta já está disponível no TravelBACK.',
  },
  {
    q: 'O que tem de novo no TravelBACK?',
    a: 'Uma carteira de viagens global e um e-commerce completo: mais de 1,4 milhão de hotéis pelo mundo, passagens aéreas em mais de 250 companhias, passagens de ônibus, aluguel de carros e seguro-viagem.',
  },
  {
    q: 'Ainda consigo usar o TravelCash?',
    a: 'Este aplicativo foi descontinuado e serve apenas para orientar a migração. Para usar sua carteira e os serviços, utilize o app TravelBACK.',
  },
  {
    q: 'Como falo com o atendimento?',
    a: 'Na aba Suporte você encontra o canal de atendimento via WhatsApp para tirar qualquer dúvida sobre a migração.',
  },
]

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0)
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
          Dúvidas frequentes
        </Text>
        <Text style={[styles.subtitle, isTablet && styles.subtitleTablet]}>
          Tudo o que você precisa saber sobre a migração do TravelCash para o
          TravelBACK.
        </Text>

        {FAQS.map((item, index) => {
          const open = openIndex === index
          return (
            <View key={index} style={styles.item}>
              <Pressable
                style={[
                  styles.itemHeader,
                  isTablet && styles.itemHeaderTablet,
                ]}
                onPress={() => setOpenIndex(open ? -1 : index)}
              >
                <Text
                  style={[styles.question, isTablet && styles.questionTablet]}
                >
                  {item.q}
                </Text>
                <Text
                  style={[styles.chevron, isTablet && styles.chevronTablet]}
                >
                  {open ? '–' : '+'}
                </Text>
              </Pressable>
              {open ? (
                <Text style={[styles.answer, isTablet && styles.answerTablet]}>
                  {item.a}
                </Text>
              ) : null}
            </View>
          )
        })}
      </View>
    </ScrollView>
  )
}

export default Faq
