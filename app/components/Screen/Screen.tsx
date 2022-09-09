import React from 'react'
import { SafeAreaView } from 'react-native'
import {styles} from './styles'

interface ScreenProps {
    children: JSX.Element
}

const Screen = (props: ScreenProps) => {
  return (
    <SafeAreaView style={styles.screen}>
        {props.children}
    </SafeAreaView>
  )
}

export default Screen
