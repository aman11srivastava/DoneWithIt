import React from "react";
import {useFormikContext} from "formik";
import AppPicker from "../AppPicker";
import ErrorMessage from "../ErrorMessage";

export const AppFormPicker = (props) => {
    const {placeholder, items, name, PickerItemComponent, numberOfColumns} = props;
    const {errors, setFieldValue, touched, values} = useFormikContext();
    return (
        <>
            <AppPicker numberOfColumns={numberOfColumns} placeholder={placeholder} items={items}
                       onSelectItem={(item) => setFieldValue(name, item)}
                       selectedItem={values[name]} PickerItemComponent={PickerItemComponent}/>
            <ErrorMessage error={errors[name]} visible={touched[name]}/>
        </>
    )
};

export default AppFormPicker;