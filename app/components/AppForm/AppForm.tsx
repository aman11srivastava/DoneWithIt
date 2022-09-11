import React from "react";
import {Formik} from "formik";

interface AppFormProps {
    initialValues: any
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