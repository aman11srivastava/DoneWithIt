import React from "react";
import {TextInput, View} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {styles} from "./styles";
import defaultStyles from '../../config/styles'

export const AppTextInput = ({icon, ...restProps}: any) => {
    return (
        <View style={styles.container}>
            {icon && <MaterialCommunityIcons style={styles.icon} size={20} color={defaultStyles.colors.medium_gray} name={"email"}/>}
            <TextInput placeholderTextColor={defaultStyles.colors.medium_gray } style={defaultStyles.text} {...restProps}/>
        </View>
    )
};

export default AppTextInput;