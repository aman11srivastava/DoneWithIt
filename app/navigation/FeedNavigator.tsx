import {createStackNavigator} from '@react-navigation/stack';
import { FeedStateStackList } from '../config/utils';
import ListingDetailsScreen from '../screens/ListingDetailsScreen';
import ListingsScreen from '../screens/ListingsScreen';

const Stack = createStackNavigator<FeedStateStackList>();

const FeedNavigator = () => {
    return (
        <Stack.Navigator
            // screenOptions={{presentation: "modal"}}
         >
            <Stack.Screen name='Listings' component={ListingsScreen} options={{headerShown: false}}/>
            <Stack.Screen name='ListingDetails' component={ListingDetailsScreen}/>
        </Stack.Navigator>
    )
};

export default FeedNavigator;