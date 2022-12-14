import { StyleSheet } from "react-native";
import colors from "../../config/colors";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 15,
        backgroundColor: colors.white,
        alignItems: "center"
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    title: {
        fontWeight: "500",
    },
    subtitle: {
        color: colors.medium_gray
    },
    detailsContainer: {
        marginLeft: 10,
        justifyContent: "center",
        flex: 1
    }
})