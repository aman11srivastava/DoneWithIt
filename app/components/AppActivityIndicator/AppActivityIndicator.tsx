import React from "react";
import AnimatedLottieView from "lottie-react-native";

interface AppActivityIndicatorProps {
    visible: boolean
}

const LOADER = require('../../assets/animations/loader.json');

export const AppActivityIndicator = (props: AppActivityIndicatorProps) => {
    const {visible } = props;
    
    if(!visible) return <></>;
    return <AnimatedLottieView autoPlay={true} loop={true} source={LOADER}/>
};

export default AppActivityIndicator;