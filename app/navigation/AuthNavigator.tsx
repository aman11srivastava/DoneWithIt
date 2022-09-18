import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { RootStateStackList } from '../config/utils';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import WelcomeScreen from '../screens/WelcomeScreen';

const Stack = createNativeStackNavigator<RootStateStackList>();

const AuthNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Welcome">
            <Stack.Screen name='Welcome' component={WelcomeScreen} options={{headerShown: false}}/>
            <Stack.Screen name='Login' component={LoginScreen}/>
            <Stack.Screen name='Register' component={RegisterScreen}/>
        </Stack.Navigator>
    )
};

export default AuthNavigator;