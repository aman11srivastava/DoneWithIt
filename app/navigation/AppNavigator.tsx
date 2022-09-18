import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { AppStateTabList } from '../config/utils';
import ListingDetailsScreen from '../screens/ListingDetailsScreen';
import AccountNavigator from './AccountNavigator';
import FeedNavigator from './FeedNavigator';

const Tab = createBottomTabNavigator<AppStateTabList>();

const AppNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen  options={{headerShown: false}} name='Feed' component={FeedNavigator}/>
            <Tab.Screen name='ListingEdit' component={ListingDetailsScreen}/>
            <Tab.Screen name='Account' component={AccountNavigator}/>
        </Tab.Navigator>
    )
};

export default AppNavigator;