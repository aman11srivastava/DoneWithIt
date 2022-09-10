import React from "react";
import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import {FlatList, StyleSheet, View} from "react-native";
import {menuItems} from "../config/utils";
import colors from "../config/colors";
import Icon from "../components/Icon";
import listItemSeparator from "../components/ListItemSeparator";

export const AccountScreen = () => {
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem title={"Aman Srivastava"} image={require("../assets/mosh.jpg")}
                          subtitle={"aman.srivastava@ticketmaster.com"} onPress={() => {}}/>
            </View>
            <View style={styles.container}>
                <FlatList ItemSeparatorComponent={listItemSeparator} data={menuItems} renderItem={({item}) => (<ListItem
                    title={item.title}
                    imageComponent={<Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor}/>}
                    onPress={() => {}}/>)} keyExtractor={menuItem => menuItem.title}
                />
            </View>
            <ListItem title={"Logout"} imageComponent={<Icon name={"logout"} backgroundColor={colors.yellow}/>}
                      onPress={() => {}}/>
        </Screen>
    )
};

export default AccountScreen;

const styles = StyleSheet.create({
    container: {
        marginVertical: 20
    },
    screen: {
        backgroundColor: colors.light_gray
    }
})