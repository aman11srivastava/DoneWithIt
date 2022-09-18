import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import AppButton from '../components/AppButton';
import colors from '../config/colors';
import { RootStateStackList } from '../config/utils';

type WelcomeScreenProps = NativeStackScreenProps<RootStateStackList, "Welcome">;

export const WelcomeScreen = (props: WelcomeScreenProps) => {
    const {navigation} = props;
  return (
    <ImageBackground blurRadius={10} style={styles.background} source={require("../assets/background.jpg")}>
        <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require("../assets/logo-red.png")}/>
            <Text style={styles.tagline}>Sell What You Don't Need</Text>
        </View>
        <View style={styles.buttonContainer}>
            <AppButton title='Login' onPress={() => navigation.navigate("Login")}/>
            <AppButton color={colors.secondary} title='Register' onPress={() => navigation.navigate("Register")}/>
        </View>
    </ImageBackground>
  )
}

export default WelcomeScreen;

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center"
    },
    logo: {
        width: 100,
        height: 100,
    },
    logoContainer: {        
        position: "absolute",
        top: 70,
        alignItems: "center"
    },
    buttonContainer: {
        padding: 20,
        width: "100%"
    },
    tagline: {
        fontSize: 25,
        fontWeight: "600",
        paddingVertical: 20
    }
})