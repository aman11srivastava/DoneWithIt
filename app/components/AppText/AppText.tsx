import React from 'react'
import { Text } from 'react-native'
import {styles} from './styles'

interface AppTextProps {
    children: string
    style?: any;
}

const AppText = (props: AppTextProps) => {
  return (
    <Text style={[styles.text, props.style]}>
        {props.children}
    </Text>
  )
}

export default AppText
