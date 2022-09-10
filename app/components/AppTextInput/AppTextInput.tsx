import React from "react";
import {TextInput, View} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {styles} from "./styles";
import colors from "../../config/colors";

export const AppTextInput = ({icon, ...restProps}: any) => {
    return (
        <View style={styles.container}>
            {icon && <MaterialCommunityIcons style={styles.icon} size={20} color={colors.medium_gray} name={"email"}/>}
            <TextInput style={styles.textInput} {...restProps}/>
        </View>
    )
};

export default AppTextInput;