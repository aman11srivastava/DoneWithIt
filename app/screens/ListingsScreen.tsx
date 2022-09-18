import React, { useEffect, useState } from "react";
import Screen from "../components/Screen";
import {FlatList, StyleSheet, View} from "react-native";
import Card from "../components/Card/Card";
import colors from "../config/colors";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FeedStateStackList } from "../config/utils";
import routes from "../navigation/routes";
import { LocationState } from "../hooks/useForegroundLocation";
import { getListings } from "../api/getListings";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import AppActivityIndicator from "../components/AppActivityIndicator";

export type ImageStructure = {
    url: string
    thumbnailUrl: string
}

export type ListingStructure = {
    id: number
    title: string
    images: ImageStructure[]
    price: number
    categoryId: number
    userId: number
    location: LocationState
}

interface ListingsScreenState {
    listings: ListingStructure[]
    hasError: boolean
    loading: boolean
}

type ListingsScreenProps = NativeStackScreenProps<FeedStateStackList, "Listings">

export const ListingsScreen = (props: ListingsScreenProps) => {
    const {navigation} = props;

    const [state, setState] = useState<ListingsScreenState>({
        listings: [], 
        hasError: false,
        loading: false
    })

    const handleNavigation = (item: ListingStructure) => {
        //@ts-ignore
        navigation.navigate(routes.LISTING_DETAILS, item)
    }

    useEffect(() => {
        loadListings()
    }, []) 

    const loadListings = async () => {
        try {
            setState({...state, loading: true})
            const response = await getListings();
            setState({listings: response?.data, hasError: false, loading: false});
        } catch (error) {
            setState({listings: [], hasError: true, loading: false});
            return;
        }
    }

    return (
        <Screen style={styles.screen}>
            {state.hasError && (
                <View style={styles.errorContainer}>
                    <AppText>Couldn't fetch listings right now</AppText>
                    <AppButton title="Retry" onPress={loadListings}/>
                </View>
            )}
            <AppActivityIndicator visible={state.loading}/>
            <FlatList data={state.listings} renderItem={({item}) => <Card onPress={() => handleNavigation(item)} 
            title={item.title} subtitle={`$${item.price.toString()}`}  imageURL={item.images[0].url}/>}
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
    },
    errorContainer: {
        marginHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center'
    }
})