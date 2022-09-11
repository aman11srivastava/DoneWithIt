import React from "react";
import {Image, StyleSheet} from "react-native";
import Screen from "../components/Screen";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import {Formik} from "formik";
import * as Yup from 'yup'
import ErrorMessage from "../components/ErrorMessage";

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
                {({handleChange, handleSubmit, errors, setFieldTouched, touched}) => (
                    <>
                        <AppTextInput icon={"mail"} autoCapitalize={"none"} autoCorrect={false}
                                      keyboardType={"email-address"} textContentType={"emailAddress"}
                                      placeholder={"Email"} name={"email"}
                                      onBlur={() => setFieldTouched("email")}
                                      onChangeText={handleChange("email")}/>
                        <ErrorMessage error={errors.email} visible={touched.email}/>
                        <AppTextInput autoCapitalize={"none"} autoCorrect={false} icon={"lock"} placeholder={"Password"}
                                      textContentType={"password"} secureTextEntry={true}
                                      onBlur={() => setFieldTouched("password")}
                                      onChangeText={handleChange("password")} name={"password"}
                        />
                        <ErrorMessage error={errors.password} visible={touched.password}/>
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