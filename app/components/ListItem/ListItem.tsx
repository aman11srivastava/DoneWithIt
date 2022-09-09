import React, {ReactNode} from 'react'
import {Image, TouchableHighlight, View} from 'react-native'
import AppText from '../AppText'
import {styles} from './styles'
import colors from "../../config/colors";
import Swipeable from "react-native-gesture-handler/Swipeable";

interface ListItemProps {
    title: string
    subtitle: string
    image: any
    onPress: () => void;
    renderRightActions?: () => ReactNode
}

const ListItem = (props: ListItemProps) => {
    const {image, subtitle, title, onPress, renderRightActions} = props;
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight underlayColor={colors.light_gray} onPress={onPress}>
                <View style={styles.container}>
                    {/* <Image style={styles.image} source={image}/> */}
                    <View>
                        <AppText style={styles.title}>{title}</AppText>
                        <AppText style={styles.subtitle}>{subtitle}</AppText>
                    </View>
                </View>
            </TouchableHighlight>
        </Swipeable>
    )
}

export default ListItem
