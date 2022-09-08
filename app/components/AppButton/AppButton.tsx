import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import colors from '../../config/colors'
import { styles } from './styles'

interface AppButtonProps {
  title: string
  onPress?: () => void
  color?: string
}

const AppButton = (props: AppButtonProps) => {
  const {title, onPress, color = colors.primary} = props;
  return (
    <TouchableOpacity style={[styles.button, {backgroundColor: color}]} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

export default AppButton
