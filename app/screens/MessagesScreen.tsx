import React from 'react'
import {FlatList} from 'react-native'
import ListItem from '../components/ListItem'
import Screen from '../components/Screen'
import ListItemSeparator from "../components/ListItemSeparator";

const messages = [
    {
        id: 1,
        title: "T1",
        description: "D1",
        image: require("../assets/mosh.jpg")
    },
    {
        id: 2,
        title: "T3",
        description: "D3",
        image: require("../assets/mosh.jpg")
    },
    {
        id: 3,
        title: "T3",
        description: "D3",
        image: require("../assets/mosh.jpg")
    },

]

const MessagesScreen = () => {
    return (
        <Screen>
            <FlatList keyExtractor={message => message.id.toString()}
                data={messages} renderItem={({item}) => <ListItem onPress={() => {}} image={item.image}
                     subtitle={item.description} title={item.title} key={item.id}/>} ItemSeparatorComponent={ListItemSeparator}
            />
        </Screen>
    )
}

export default MessagesScreen