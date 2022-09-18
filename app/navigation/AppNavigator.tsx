import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { AppStateTabList } from '../config/utils';
import AccountScreen from '../screens/AccountScreen';
import ListingDetailsScreen from '../screens/ListingDetailsScreen';
import FeedNavigator from './FeedNavigator';

const Tab = createBottomTabNavigator<AppStateTabList>();

const AppNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen  options={{headerShown: false}} name='Feed' component={FeedNavigator}/>
            <Tab.Screen name='ListingEdit' component={ListingDetailsScreen}/>
            <Tab.Screen name='Account' component={AccountScreen}/>
        </Tab.Navigator>
    )
};

export default AppNavigator;