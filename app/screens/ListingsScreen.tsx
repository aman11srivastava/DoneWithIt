import React from "react";
import Screen from "../components/Screen";
import {FlatList, StyleSheet} from "react-native";
import Card from "../components/Card/Card";
import colors from "../config/colors";

const listings = [
    {
        id: 1,
        title: "Red jacket for sale",
        price: 100,
        image: require("../assets/jacket.jpg")
    },
    {
        id: 2,
        title: "Couch in great condition",
        price: 1000,
        image: require("../assets/couch.jpg")
    },
]

export const ListingsScreen = () => {
    return (
        <Screen style={styles.screen}>
            <FlatList data={listings} renderItem={({item}) => <Card title={item.title} subtitle={`$${item.price.toString()}`}  image={item.image}/>}
                      keyExtractor={listing => listing.id.toString()}/>
        </Screen>
    )
};

export default ListingsScreen;

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        backgroundColor: colors.light_gray,
        paddingHorizontal: 20
    }
})