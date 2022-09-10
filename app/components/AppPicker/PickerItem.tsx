import React from "react";
import {StyleSheet, TouchableOpacity} from "react-native";
import AppText from "../AppText";

interface PickerItemProps {
    label: string
    onPress: (value: any) => void
}

export const PickerItem = (props: PickerItemProps) => {
    const {label, onPress} = props;
    return (
        <TouchableOpacity onPress={onPress}>
            <AppText style={styles.text}>{label}</AppText>
        </TouchableOpacity>
    )
};

export default PickerItem;

const styles = StyleSheet.create({
    text: {
        padding: 20
    }
})