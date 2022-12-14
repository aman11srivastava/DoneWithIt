import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { AppStateTabList } from '../config/utils';
import AccountNavigator from './AccountNavigator';
import FeedNavigator from './FeedNavigator';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import NewListingButton from './NewListingButton';
import ListingEditScreen from '../screens/ListingEditScreen';
import routes from './routes';

const Tab = createBottomTabNavigator<AppStateTabList>();

const FeedTabOptions = () => {
    return {
        ...GeneralTabOptions,
        headerShown: false,
    }
}

const GeneralTabOptions = (name: any) => {
    return {
        tabBarIcon: ({size, color}: any) => <MaterialCommunityIcons size={size} color={color} name={name}/>
    }
}

const AppNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen options={{headerShown: false, tabBarIcon: ({size, color}: any) => <MaterialCommunityIcons size={size} color={color} name={"home"}/>}} 
                name='Feed' component={FeedNavigator}/>
            <Tab.Screen options={({navigation}: any) => ({tabBarButton: () => <NewListingButton onPress={() => navigation.navigate(routes.LISTING_EDIT)}/>})} 
            name='ListingEdit' component={ListingEditScreen}/>
            <Tab.Screen options={() => GeneralTabOptions("account")} name='Account' component={AccountNavigator}/>
        </Tab.Navigator>
    )
};

export default AppNavigator;