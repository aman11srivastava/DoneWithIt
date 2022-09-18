import { Button, Text } from "react-native";
import Screen from "./app/components/Screen";
import {createNativeStackNavigator, NativeStackScreenProps} from '@react-navigation/native-stack';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import { RootStateParamsList, RootStateTabsList } from "./app/config/utils";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import AuthNavigator from "./app/navigation/AuthNavigator";

type TweetsScreenProps = NativeStackScreenProps<RootStateParamsList, "Tweets">;

type TweetDetailsScreenProps = NativeStackScreenProps<RootStateParamsList, "TweetDetails">;

const Tweets = (props: TweetsScreenProps) => {
    const {navigation} = props;

    const handleNavigation = () => {
        //@ts-ignore
        navigation.navigate("TweetDetails", {id: 1})
    }

    return <Screen>
        <Text>Tweets Component</Text>
        <Button title="View Tweet" onPress={handleNavigation}/>
        <Link/>
    </Screen>
}

const Link = () => {
    const navigation = useNavigation();

    const handleNavigation = () => {
        //@ts-ignore
        navigation.navigate("Tweets")
    }
    return (
        <Button title="Click" onPress={handleNavigation}/>
    )
}

const TweetDetails = (props: TweetDetailsScreenProps) => {
    const {route} = props;
    console.log(route.params)
    return (
        <>
            <Screen>
                <Text>Tweet Details</Text>
            </Screen>
        </>
    )
}

const Feeds = () => {
    return (
        <Screen>
            <Text>Feeeds</Text>
        </Screen>
    )
}

const Account = () => {
    return (
        <Screen>
            <Text>Accountss</Text>
        </Screen>
    )
}

const Stack = createNativeStackNavigator<RootStateParamsList>();

const StackNavigator = () => (
    <Stack.Navigator initialRouteName="Tweets">
        <Stack.Screen name="Tweets" component={Tweets}/>
        <Stack.Screen options={{title: "Testing Details"}} name="TweetDetails" component={TweetDetails}/>
    </Stack.Navigator>
)

const Tab = createBottomTabNavigator<RootStateTabsList>()

const TabNavigator = () => (
    <Tab.Navigator>
        <Tab.Screen options={{tabBarIcon: () => <MaterialCommunityIcons size={25} name="home"/>}} name="Feed" component={Feeds}/>
        <Tab.Screen name="Account" component={Account}/>
    </Tab.Navigator>
)

export default function App() {

    return (
        <NavigationContainer>
            <AuthNavigator/>
        </NavigationContainer>
    )
};

