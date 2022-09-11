import React from "react";
import * as Yup from 'yup';
import Screen from "../components/Screen";
import AppForm from "../components/AppForm";
import {StyleSheet} from "react-native";
import AppFormField from "../components/AppFormField";
import AppFormPicker from "../components/AppFormPicker";
import SubmitButton from "../components/SubmitButton";

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    description: Yup.string().label("Description"),
    category: Yup.object().required().nullable().label("Category")
})

const categories = [
    {
        label: "Furniture", value: 1,
    },
    {
        label: "Clothing", value: 2,
    },
    {
        label: "Camera", value: 3,
    },
]

const initialValues = {
    title: "",
    price: 0,
    description: "",
    category: null
}

export const ListingEditScreen = () => {
    return (
        <Screen style={styles.container}>
            <AppForm initialValues={initialValues} validationSchema={validationSchema}
                     onSubmit={(values) => console.log(values)}>
                <>
                    <AppFormField maxLength={255} name={"title"} placeholder={"Title"}/>
                    <AppFormField keyboardType={"numeric"} name={"price"} placeholder={"Price"} maxLength={8}/>
                    <AppFormPicker items={categories} name={"category"} placeholder={"Category"}/>
                    <AppFormField name={"description"} placeholder={"Description"} multiline={true} numberOfLines={3}
                                  maxLength={255}/>
                    <SubmitButton title={"Post"}/>
                </>
            </AppForm>
        </Screen>
    )
};

export default ListingEditScreen;

const styles = StyleSheet.create({
    container: {}
})