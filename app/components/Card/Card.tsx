import React from "react";
import { Image, StyleSheet, View, TouchableOpacity } from "react-native";
import colors from "../../config/colors";
import AppText from "../AppText";

interface CardProps {
    title: string
    subtitle: string
    imageURL: string
    onPress?: () => void;
}

export const Card = (props: CardProps) => {
    const {imageURL, subtitle, title, onPress} = props;
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.card}>
                 <Image style={styles.image} source={{uri: imageURL}}/>
                <View style={styles.detailsCointainer}>
                    <AppText style={styles.title}>{title}</AppText>
                    <AppText style={styles.subTitle}>{subtitle}</AppText>
                </View>
            </View>
        </TouchableOpacity>
    )
};

export default Card;

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: colors.white,
        marginBottom: 20,
        overflow: "hidden"
    },
    image: {
        width: '100%',
        height: 200,
    },
    detailsCointainer: {
        padding: 20,
    },
    title: {
        marginBottom: 7
    },
    subTitle: {
        color: colors.secondary,
        fontWeight: "bold"
    }
})