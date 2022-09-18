import React from "react";
import Screen from "../components/Screen";
import {FlatList, StyleSheet} from "react-native";
import Card from "../components/Card/Card";
import colors from "../config/colors";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FeedStateStackList } from "../config/utils";
import routes from "../navigation/routes";

export type ListingItemType = {
    id: number
    title: string
    price: number
    image: any
}

const listings: ListingItemType[] = [
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

type ListingsScreenProps = NativeStackScreenProps<FeedStateStackList, "Listings">

export const ListingsScreen = (props: ListingsScreenProps) => {
    const {navigation} = props;

    const handleNavigation = (item: ListingItemType) => {
        //@ts-ignore
        navigation.navigate(routes.LISTING_DETAILS, item)
    }

    return (
        <Screen style={styles.screen}>
            <FlatList data={listings} renderItem={({item}) => <Card onPress={() => handleNavigation(item)} 
            title={item.title} subtitle={`$${item.price.toString()}`}  image={item.image}/>}
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