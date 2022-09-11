import React from "react";
import {LoginScreenState} from "../../screens/LoginScreen";
import {Formik} from "formik";

interface AppFormProps {
    initialValues: LoginScreenState
    validationSchema: any
    onSubmit: (value: any) => void
    children: JSX.Element
}

export const AppForm = (props: AppFormProps) => {
    const {validationSchema, initialValues, onSubmit, children} = props;

    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema}
                onSubmit={onSubmit}>
            {() => (
                <>
                    {children}
                </>
            )}
        </Formik>
    )
};

export default AppForm;