import React from "react";
import AppTextInput from "../AppTextInput";
import ErrorMessage from "../ErrorMessage";
import {useFormikContext} from "formik";

export const AppFormField = ({name, ...restProps}) => {
    const {setFieldTouched, handleChange, touched, errors} = useFormikContext();
    return (
        <>
            <AppTextInput name={"email"} onBlur={() => setFieldTouched(name)}
                          onChangeText={handleChange(name)} {...restProps} />
            <ErrorMessage error={errors[name]} visible={touched[name]}/>
        </>
    )
};

export default AppFormField;