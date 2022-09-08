import { StyleSheet, Text, View } from 'react-native';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import AppText from './app/components/AppText';
import AppButton from './app/components/AppButton';

export default function App() {
  return (
    <>
      {/* <WelcomeScreen/> */}
      {/* <ViewImageScreen/> */}
      <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
        <AppText>My name is Aman Srivastava</AppText>
        <AppButton title='Click me'/>
      </View>
    </>
  )
};

