import React from 'react'
import {Image, TouchableHighlight, View} from 'react-native'
import AppText from '../AppText'
import {styles} from './styles'
import colors from "../../config/colors";

interface ListItemProps {
    title: string
    subtitle: string
    image: any
    onPress: () => void;
}

const ListItem = (props: ListItemProps) => {
    const {image, subtitle, title, onPress} = props;
    return (
        <TouchableHighlight underlayColor={colors.light_gray} onPress={onPress}>
            <View style={styles.container}>
                {/* <Image style={styles.image} source={image}/> */}
                <View>
                    <AppText style={styles.title}>{title}</AppText>
                    <AppText style={styles.subtitle}>{subtitle}</AppText>
                </View>
            </View>
        </TouchableHighlight>
    )
}

export default ListItem
