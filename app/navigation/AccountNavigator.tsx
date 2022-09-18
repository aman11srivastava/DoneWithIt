import {createStackNavigator} from '@react-navigation/stack';
import { AccountStateStackList, FeedStateStackList } from '../config/utils';
import AccountScreen from '../screens/AccountScreen';
import MessagesScreen from '../screens/MessagesScreen';

const Stack = createStackNavigator<AccountStateStackList>();

const AccountNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{headerShown: false}} name='Account' component={AccountScreen}/>
            <Stack.Screen name='Messages' component={MessagesScreen}/>
        </Stack.Navigator>
    )
};

export default AccountNavigator;