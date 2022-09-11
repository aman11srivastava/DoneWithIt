import React from "react";
import AppText from "../AppText";
import {styles} from "./styles";

interface ErrorMessageProps {
    error: string | undefined
    visible: boolean | undefined
}

export const ErrorMessage = (props: ErrorMessageProps) => {
    const {error, visible} = props;
    if (!error || !visible) return null
    return <AppText style={styles.error}>{error}</AppText>

};

export default ErrorMessage;