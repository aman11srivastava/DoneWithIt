import React, {ReactNode} from 'react'
import {Image, TouchableHighlight, View} from 'react-native'
import AppText from '../AppText'
import {styles} from './styles'
import colors from "../../config/colors";
import Swipeable from "react-native-gesture-handler/Swipeable";

interface ListItemProps {
    title: string
    subtitle?: string
    image?: any
    onPress: () => void;
    renderRightActions?: () => ReactNode
    imageComponent?: JSX.Element
}

const ListItem = (props: ListItemProps) => {
    const {image, subtitle, title, onPress, renderRightActions, imageComponent} = props;
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight underlayColor={colors.light_gray} onPress={onPress}>
                <View style={styles.container}>
                    {imageComponent}
                    {image && <Image style={styles.image} source={image}/>}
                    <View style={styles.detailsContainer}>
                        <AppText style={styles.title}>{title}</AppText>
                        {subtitle && <AppText style={styles.subtitle}>{subtitle}</AppText>}
                    </View>
                </View>
            </TouchableHighlight>
        </Swipeable>
    )
}

export default ListItem
