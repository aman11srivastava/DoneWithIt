import {Platform, StyleSheet} from "react-native";
import colors from "../../config/colors";

export const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.light_gray,
      borderRadius: 25,
      flexDirection: "row",
      width: "100%",
      padding: 15,
      marginVertical: 10
    },
    textInput: {
        fontSize: 18,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
        color: colors.dark_gray
    },
    icon: {
        marginRight: 10
    }
})