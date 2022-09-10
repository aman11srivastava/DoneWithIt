import React, {useState} from "react";
import {Button, FlatList, Modal, TouchableWithoutFeedback, View} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {styles} from "./styles";
import defaultStyles from '../../config/styles'
import AppText from "../AppText";
import Screen from "../Screen";
import PickerItem from "./PickerItem";

interface AppPickerProps {
    icon: any
    placeholder: string
    items?: any[]
    selectedItem: any
    onSelectItem: (args: any) => void
}

export const AppPicker = (props: AppPickerProps) => {
    const {placeholder, icon, items, selectedItem, onSelectItem} = props;
    const [visible, setVisible] = useState<boolean>(false);

    return (
        <>
            <TouchableWithoutFeedback onPress={() => setVisible(true)}>
                <View style={styles.container}>
                    {icon && <MaterialCommunityIcons style={styles.icon} size={20} color={defaultStyles.colors.medium_gray} name={icon}/>}
                    <AppText style={styles.text}>{selectedItem.label ? selectedItem.label : placeholder}</AppText>
                    <MaterialCommunityIcons size={20} color={defaultStyles.colors.medium_gray} name={"chevron-down"}/>
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={visible} animationType={"slide"}>
                <Screen>
                    <Button title={"Close"} onPress={() => setVisible(false)}/>
                    <FlatList data={items} renderItem={({item}) => <PickerItem label={item.label} onPress={(item: any) => {
                        setVisible(false);
                        onSelectItem(item)
                    }}/>} keyExtractor={(item: any) => item.value.toString()}/>
                </Screen>
            </Modal>
        </>
    )
};

export default AppPicker;