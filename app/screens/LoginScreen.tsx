import React from "react";
import {Image, StyleSheet} from "react-native";
import Screen from "../components/Screen";
import * as Yup from 'yup'
import AppFormField from "../components/AppFormField";
import SubmitButton from "../components/SubmitButton";
import AppForm from "../components/AppForm";

export interface LoginScreenState {
    email: string
    password: string
}

export const initialStateValue: LoginScreenState = {
    email: "",
    password: ""
}

export const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(6).label("Password")
})

export const LoginScreen = () => {
    return (
        <Screen style={styles.container}>
            <Image style={styles.logo} source={require("../assets/logo-red.png")}/>
            <AppForm initialValues={initialStateValue} validationSchema={validationSchema}
                    onSubmit={values => console.log(values)}>
               <>
                   <AppFormField icon={"mail"} autoCapitalize={"none"} autoCorrect={false}
                                 keyboardType={"email-address"} textContentType={"emailAddress"}
                                 placeholder={"Email"} name={"email"}
                   />
                   <AppFormField autoCapitalize={"none"} autoCorrect={false} icon={"lock"} placeholder={"Password"}
                                 textContentType={"password"} secureTextEntry={true} name={"password"}
                   />
                   <SubmitButton title={"Login"}/>
               </>
            </AppForm>
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