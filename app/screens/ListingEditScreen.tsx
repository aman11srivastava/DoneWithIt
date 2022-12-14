import React from "react";
import * as Yup from 'yup';
import Screen from "../components/Screen";
import AppForm from "../components/AppForm";
import {StyleSheet} from "react-native";
import AppFormField from "../components/AppFormField";
import AppFormPicker from "../components/AppFormPicker";
import SubmitButton from "../components/SubmitButton";
import CategoryPickerItem from "../components/CategoryPickerItem";
import FormImagePicker from "../components/FormImagePicker";
import useForegroundLocation from "../hooks/useForegroundLocation";

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    description: Yup.string().label("Description"),
    category: Yup.object().required().nullable().label("Category"),
    images: Yup.array().min(1, "Please select atleast 1 image.")
})

const categories = [
    {
        backgroundColor: "#fc5c65",
        icon: "floor-lamp",
        label: "Furniture",
        value: 1,
    },
    {
        backgroundColor: "#fd9644",
        icon: "car",
        label: "Cars",
        value: 2,
    },
    {
        backgroundColor: "#fed330",
        icon: "camera",
        label: "Cameras",
        value: 3,
    },
    {
        backgroundColor: "#26de81",
        icon: "cards",
        label: "Games",
        value: 4,
    },
    {
        backgroundColor: "#2bcbba",
        icon: "shoe-heel",
        label: "Clothing",
        value: 5,
    },
    {
        backgroundColor: "#45aaf2",
        icon: "basketball",
        label: "Sports",
        value: 6,
    },
    {
        backgroundColor: "#4b7bec",
        icon: "headphones",
        label: "Movies & Music",
        value: 7,
    },
    {
        backgroundColor: "#a55eea",
        icon: "book-open-variant",
        label: "Books",
        value: 8,
    },
    {
        backgroundColor: "#778ca3",
        icon: "application",
        label: "Other",
        value: 9,
    },
];

const initialValues = {
    title: "",
    price: 0,
    description: "",
    category: null,
    images: []
}


export const ListingEditScreen = () => {
    
    const location = useForegroundLocation();

    return (
        <Screen style={styles.container}>
            <AppForm initialValues={initialValues} validationSchema={validationSchema}
                     onSubmit={(values) => console.log(location)}>
                <>
                    <FormImagePicker name="images"/>
                    <AppFormField maxLength={255} name={"title"} placeholder={"Title"}/>
                    <AppFormField keyboardType={"numeric"} name={"price"} placeholder={"Price"} maxLength={8}/>
                    <AppFormPicker numberOfColumns={3} PickerItemComponent={CategoryPickerItem} items={categories} name={"category"} placeholder={"Category"}/>
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
    container: {
        marginHorizontal: 10
    }
})