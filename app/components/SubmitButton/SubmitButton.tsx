import React from "react";
import AppButton from "../AppButton";
import {useFormikContext} from "formik";

interface SubmitButtonProps {
    title: string
}

export const SubmitButton = (props: SubmitButtonProps) => {
    const {title} = props;
    const {handleSubmit} = useFormikContext();
    return <AppButton title={title} onPress={handleSubmit}/>
};

export default SubmitButton;