import React from 'react';
import {PickerItemCommonProps} from "../../config/utils";
import {View} from "react-native";
import {styles} from "./styles";
import Icon from "../Icon";
import AppText from "../AppText";

interface CategoryPickerItemProps extends PickerItemCommonProps {
    item: any
}

export const CategoryPickerItem = (props: CategoryPickerItemProps) => {
    const {item, onPress} = props;
    return (
        <View style={styles.container}>
            <Icon name={item.icon} backgroundColor={item.backgroundColor} size={80}/>
            <AppText style={styles.label}>{item.label}</AppText>
        </View>
    )
};

export default CategoryPickerItem;