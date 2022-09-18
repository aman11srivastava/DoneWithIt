import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import {Image, StyleSheet, View} from 'react-native'
import AppText from '../components/AppText'
import ListItem from '../components/ListItem'
import colors from '../config/colors'
import { FeedStateStackList } from '../config/utils'

type ListingDetailsScreenProps = NativeStackScreenProps<FeedStateStackList, "ListingDetails">

const ListingDetailsScreen = (props: ListingDetailsScreenProps) => {
    const listing = props.route?.params;

    return (
        <View>
            <Image style={styles.image} source={listing?.image}/>
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>{listing?.title}</AppText>
                <AppText style={styles.price}>{`$${listing?.price}`}</AppText>
                <View style={styles.userContainer}>
                    <ListItem
                        onPress={() => {}}
                        image={require("../assets/mosh.jpg")}
                        title="Aman" subtitle="5 Listings"
                    />
                </View>
            </View>
        </View>
    )
}

export default ListingDetailsScreen


const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 300
    },
    detailsContainer: {
        padding: 20
    },
    title: {
        fontSize: 24,
        fontWeight: "500"
    },
    price: {
        color: colors.secondary,
        fontWeight: "bold",
        fontSize: 20,
        marginVertical: 10
    },
    userContainer: {
        marginVertical: 40
    }
})