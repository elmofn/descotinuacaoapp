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

// --- Lojas (links reais do app novo TravelBACK) ---
const NEW_APP_IOS_STORE_URL =
  'https://apps.apple.com/us/app/travelback/id6802664762'
const NEW_APP_ANDROID_STORE_URL =
  'https://play.google.com/store/apps/details?id=com.travelback.app'

// --- Abrir o app novo se já estiver instalado ---
// Scheme do app TravelBACK (mesmo nas duas plataformas; vem do app.json do app novo).
// No iOS, este scheme também está declarado em ios.infoPlist.LSApplicationQueriesSchemes
// (no app.json deste app), senão o canOpenURL sempre retorna falso.
const NEW_APP_SCHEME = 'appmvp'
const NEW_APP_ANDROID_PACKAGE = 'com.travelback.app'

const SUPPORT_WHATSAPP_URL =
  'https://api.whatsapp.com/send?phone=5511988167233&text=Olá%20Concierge!'

const Discontinued = () => {
  const openStore = () => {
    const url =
      Platform.OS === 'ios' ? NEW_APP_IOS_STORE_URL : NEW_APP_ANDROID_STORE_URL
    Linking.openURL(url).catch(() => {})
  }

  const handleOpenApp = async () => {
    // Android: um intent com o package abre o app instalado e, se não estiver
    // instalado, usa browser_fallback_url para abrir a Play Store automaticamente.
    if (Platform.OS === 'android') {
      const intentUrl =
        `intent://#Intent;package=${NEW_APP_ANDROID_PACKAGE};` +
        (NEW_APP_SCHEME ? `scheme=${NEW_APP_SCHEME};` : '') +
        `S.browser_fallback_url=${encodeURIComponent(
          NEW_APP_ANDROID_STORE_URL,
        )};end`
      try {
        await Linking.openURL(intentUrl)
      } catch (e) {
        openStore()
      }
      return
    }

    // iOS: tenta abrir pelo scheme; se o app não estiver instalado (ou o scheme
    // ainda não estiver configurado), vai para a App Store.
    if (NEW_APP_SCHEME) {
      try {
        const appUrl = `${NEW_APP_SCHEME}://`
        if (await Linking.canOpenURL(appUrl)) {
          await Linking.openURL(appUrl)
          return
        }
      } catch (e) {
        // ignora e cai no fallback da loja
      }
    }
    openStore()
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
          onPress={handleOpenApp}
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
