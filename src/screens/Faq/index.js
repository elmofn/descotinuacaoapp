import { useState } from 'react'
import { Pressable, ScrollView, Text, View } from 'react-native'

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

const FaqItem = ({ item, open, onToggle }) => (
  <View style={styles.item}>
    <Pressable style={styles.itemHeader} onPress={onToggle}>
      <Text style={styles.question}>{item.q}</Text>
      <Text style={styles.chevron}>{open ? '–' : '+'}</Text>
    </Pressable>
    {open ? <Text style={styles.answer}>{item.a}</Text> : null}
  </View>
)

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <ScrollView
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.title}>Dúvidas frequentes</Text>
      <Text style={styles.subtitle}>
        Tudo o que você precisa saber sobre a migração do TravelCash para o
        TravelBACK.
      </Text>

      {FAQS.map((item, index) => (
        <FaqItem
          key={index}
          item={item}
          open={openIndex === index}
          onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
        />
      ))}
    </ScrollView>
  )
}

export default Faq
