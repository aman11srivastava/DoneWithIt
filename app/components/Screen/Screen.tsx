import React, {ReactNode} from 'react'
import { SafeAreaView } from 'react-native'
import {styles} from './styles'

interface ScreenProps {
    children: ReactNode
    style?: any
}

const Screen = (props: ScreenProps) => {
  return (
    <SafeAreaView style={[styles.screen, props?.style]}>
        {props.children}
    </SafeAreaView>
  )
}

export default Screen
