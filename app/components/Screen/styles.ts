import { StyleSheet, Platform, StatusBar } from "react-native";

export const styles = StyleSheet.create({
    screen: {
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    }
})

export default styles;