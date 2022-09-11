import React from "react";
import {Image, StyleSheet} from "react-native";
import Screen from "../components/Screen";
import AppButton from "../components/AppButton";
import {Formik} from "formik";
import * as Yup from 'yup'
import AppFormField from "../components/AppFormField";

interface LoginScreenState {
    email: string
    password: string
}

const initialStateValue: LoginScreenState = {
    email: "",
    password: ""
}

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(6).label("Password")
})

export const LoginScreen = () => {
    return (
        <Screen style={styles.container}>
            <Image style={styles.logo} source={require("../assets/logo-red.png")}/>
            <Formik initialValues={initialStateValue} validationSchema={validationSchema}
                    onSubmit={values => console.log(values)}>
                {({ handleSubmit}) => (
                    <>
                        <AppFormField icon={"mail"} autoCapitalize={"none"} autoCorrect={false}
                                      keyboardType={"email-address"} textContentType={"emailAddress"}
                                      placeholder={"Email"} name={"email"}
                        />
                        <AppFormField autoCapitalize={"none"} autoCorrect={false} icon={"lock"} placeholder={"Password"}
                                      textContentType={"password"} secureTextEntry={true} name={"password"}
                        />
                        <AppButton title={"Login"} onPress={handleSubmit}/>
                    </>
                )}
            </Formik>
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