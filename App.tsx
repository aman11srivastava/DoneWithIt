import {View } from 'react-native';
import Card from './app/components/Card/Card';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import AppTextInput from "./app/components/AppTextInput";

export default function App() {
  return (
    <Screen>
      {/* <WelcomeScreen/> */}
      {/* <ViewImageScreen/> */}
      {/* <Card title='Aman' subtitle='Srivastava' image={""}/> */}
        {/* <ListingDetailsScreen/> */}
        {/*<MessagesScreen/>*/}
        {/*<Icon name={"email"} size={50} backgroundColor={"red"} iconColor={"white"}/>*/}
        {/*<ListItem imageComponent={<Icon name={"email"} size={50} backgroundColor={"red"} iconColor={"white"}/>} title={"Test"} subtitle={"Subtitle"} image={""} onPress={() => {}}/>*/}
        {/*<AccountScreen/>*/}
        {/*<ListingsScreen/>*/}
        <AppTextInput placeholder={"Username"} icon={"email"}/>
    </Screen>
  )
};

