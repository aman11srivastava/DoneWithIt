import React from 'react'
import { Text } from 'react-native'
import defaultStyles from '../../config/styles'

interface AppTextProps {
    children: string
    style?: any;
}

const AppText = (props: AppTextProps) => {
  return (
    <Text style={[defaultStyles.text, props.style]}>
        {props.children}
    </Text>
  )
}

export default AppText
