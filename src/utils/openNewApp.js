import { Linking, Platform } from 'react-native'

import {
  NEW_APP_ANDROID_PACKAGE,
  NEW_APP_ANDROID_STORE_URL,
  NEW_APP_IOS_STORE_URL,
  NEW_APP_SCHEME,
  SUPPORT_WHATSAPP_URL,
} from '../config'

export const openStore = () => {
  const url =
    Platform.OS === 'ios' ? NEW_APP_IOS_STORE_URL : NEW_APP_ANDROID_STORE_URL
  Linking.openURL(url).catch(() => {})
}

// Abre o app novo se instalado; senão vai para a loja.
export const openNewApp = async () => {
  // Android: intent com o package abre o app instalado; se não estiver instalado,
  // o browser_fallback_url abre a Play Store automaticamente.
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

  // iOS: tenta abrir pelo scheme; se não instalado, vai para a App Store.
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

export const openSupport = () => {
  Linking.openURL(SUPPORT_WHATSAPP_URL).catch(() => {})
}
