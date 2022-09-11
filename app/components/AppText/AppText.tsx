import React from 'react'
import {Text} from 'react-native'
import defaultStyles from '../../config/styles'

interface AppTextProps {
    children: string
    style?: any;
}

const AppText = ({style, children, ...rest}: AppTextProps) => {
    return (
        <Text {...rest} style={[defaultStyles.text, style]}>
            {children}
        </Text>
    )
}

export default AppText
