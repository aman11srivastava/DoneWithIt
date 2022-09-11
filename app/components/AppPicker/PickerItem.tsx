import React from "react";
import {StyleSheet, TouchableOpacity} from "react-native";
import AppText from "../AppText";
import {PickerItemCommonProps} from "../../config/utils";

interface PickerItemProps extends PickerItemCommonProps {
    item: any
}

export const PickerItem = (props: PickerItemProps) => {
    const {item, onPress} = props;
    return (
        <TouchableOpacity onPress={onPress}>
            <AppText style={styles.text}>{item.label}</AppText>
        </TouchableOpacity>
    )
};

export default PickerItem;

const styles = StyleSheet.create({
    text: {
        padding: 20
    }
})