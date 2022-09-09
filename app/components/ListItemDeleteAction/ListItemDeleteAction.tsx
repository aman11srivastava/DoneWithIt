import React from "react";
import { View, TouchableWithoutFeedback } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {styles} from "./styles";
import colors from "../../config/colors";

interface ListItemDeleteActionProps {
    onPress: () => void;
}

function ListItemDeleteAction(props: ListItemDeleteActionProps) {
    const {onPress} = props;
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <MaterialCommunityIcons
                    name="trash-can"
                    size={35}
                    color={colors.white}
                />
            </View>
        </TouchableWithoutFeedback>
    );
}

export default ListItemDeleteAction;
