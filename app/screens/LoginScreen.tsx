import React, {ChangeEvent, useState} from "react";
import {Image, NativeSyntheticEvent, StyleSheet, TextInputChangeEventData} from "react-native";
import Screen from "../components/Screen";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";

interface LoginScreenState {
    email: string
    password: string
}

export const LoginScreen = () => {
    const [state, setState] = useState<LoginScreenState>({
        email: "",
        password: ""
    })

    return (
        <Screen style={styles.container}>
            <Image style={styles.logo} source={require("../assets/logo-red.png")}/>
            <AppTextInput icon={"mail"} autoCapitalize={"none"} autoCorrect={false}
                          keyboardType={"email-address"} textContentType={"emailAddress"}
                          placeholder={"Email"} value={state.email}
                          onChangeText={(text: string) => setState({...state, email: text})}/>
            <AppTextInput autoCapitalize={"none"} autoCorrect={false} icon={"lock"} placeholder={"Password"}
                          textContentType={"password"} secureTextEntry={true} value={state.password}
                          onChangeText={(text: string) => setState({...state, password: text})}
            />
            <AppButton title={"Login"} onPress={() => {
                console.log(state)
            }}/>
        </Screen>
    )
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        margin: 10
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: "center",
        marginTop: 50,
        marginBottom: 20
    }
})