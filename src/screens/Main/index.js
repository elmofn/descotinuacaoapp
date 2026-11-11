import { useState } from 'react'
import { Pressable, SafeAreaView, Text, View } from 'react-native'

import { theme } from '../../config'
import Faq from '../Faq'
import Home from '../Home'
import Support from '../Support'
import styles from './styles'

const TABS = [
  { key: 'home', label: 'Início', icon: '🏠', Screen: Home },
  { key: 'faq', label: 'Dúvidas', icon: '❓', Screen: Faq },
  { key: 'support', label: 'Suporte', icon: '💬', Screen: Support },
]

const Main = () => {
  const [active, setActive] = useState('home')
  const ActiveScreen = TABS.find((t) => t.key === active).Screen

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.content}>
        <ActiveScreen />
      </View>

      <View style={styles.tabBar}>
        {TABS.map((tab) => {
          const isActive = tab.key === active
          const color = isActive ? theme.accent : theme.tabInactive
          return (
            <Pressable
              key={tab.key}
              style={styles.tab}
              onPress={() => setActive(tab.key)}
            >
              <Text style={[styles.tabIcon, { opacity: isActive ? 1 : 0.5 }]}>
                {tab.icon}
              </Text>
              <Text style={[styles.tabLabel, { color }]}>{tab.label}</Text>
            </Pressable>
          )
        })}
      </View>
    </SafeAreaView>
  )
}

export default Main
