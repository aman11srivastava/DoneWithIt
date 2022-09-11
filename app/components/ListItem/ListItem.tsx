import React, {ReactNode} from 'react'
import {Image, TouchableHighlight, View} from 'react-native'
import AppText from '../AppText'
import {styles} from './styles'
import colors from "../../config/colors";
import Swipeable from "react-native-gesture-handler/Swipeable";
import {MaterialCommunityIcons} from "@expo/vector-icons";

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
    // @ts-ignore
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight underlayColor={colors.light_gray} onPress={onPress}>
                <View style={styles.container}>
                    {imageComponent}
                    {image && <Image style={styles.image} source={image}/>}
                    <View style={styles.detailsContainer}>
                        <AppText numberOfLines={1} style={styles.title}>{title}</AppText>
                        {subtitle && <AppText numberOfLines={2} style={styles.subtitle}>{subtitle}</AppText>}
                    </View>
                    <MaterialCommunityIcons color={colors.medium_gray} name={"chevron-right"} size={25}/>
                </View>
            </TouchableHighlight>
        </Swipeable>
    )
}

export default ListItem
