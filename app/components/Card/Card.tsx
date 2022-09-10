import React from "react";
import { Image, StyleSheet, View } from "react-native";
import colors from "../../config/colors";
import AppText from "../AppText";

interface CardProps {
    title: string
    subtitle: string
    image: any
}

export const Card = (props: CardProps) => {
    const {image, subtitle, title} = props;
    return (
        <>
            <View style={styles.card}>
                 <Image style={styles.image} source={image}/>
                <View style={styles.detailsCointainer}>
                    <AppText style={styles.title}>{title}</AppText>
                    <AppText style={styles.subTitle}>{subtitle}</AppText>
                </View>
            </View>
        </>
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