import React from "react";
import {View} from "react-native";
import colors from "../../config/colors";
import {MaterialCommunityIcons} from "@expo/vector-icons";

interface IconProps {
    name: any
    size?: number
    backgroundColor?: string
    iconColor?: string
}

export const Icon = (props: IconProps) => {
    const {iconColor = colors.white, backgroundColor = colors.black, size = 40, name} = props;
    return (
        <View style={{
            width: size,
            height: size,
            borderRadius: size / 2,
            backgroundColor,
            justifyContent: "center",
            alignItems: "center"
        }}>
            <MaterialCommunityIcons name={name} color={iconColor} size={size * 0.5}/>
        </View>
    )
};

export default Icon;