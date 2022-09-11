import {StyleSheet} from "react-native";
import defaultStyles from "../../config/styles";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.colors.light_gray,
        borderRadius: 25,
        flexDirection: "row",
        width: "100%",
        padding: 15,
        marginVertical: 10
    },
    icon: {
        marginRight: 10
    },
    text: {
        flex: 1
    },
    placeholder: {
        color: defaultStyles.colors.medium_gray,
        flex: 1
    }
})