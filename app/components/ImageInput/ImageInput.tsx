import React, {useEffect} from "react";
import {Alert, Image, TouchableWithoutFeedback, View} from "react-native";
import {styles} from "./styles";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import colors from "../../config/colors";
import * as ImagePicker from "expo-image-picker";

interface ImageInputProps {
    imageUri: string | null
    onChangeImage: (value: string | null) => void
}

export const ImageInput = (props: ImageInputProps) => {
    const {imageUri, onChangeImage} = props;

    const requestPermission = async () => {
        const {granted} = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (!granted) {
            alert("Permission has to be granted to use this feature")
        }
    }

    useEffect(() => {
        requestPermission();
    }, [])


    function handlePress() {
        if (!imageUri) selectedImage();
        else Alert.alert("Delete", "Are you sure you want to delete the selected image?", [
            {
                text: "Yes",
                onPress: () => onChangeImage(null)
            },
            {
                text: "No"
            }
        ])
    }

    async function selectedImage() {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                quality: 0.5
            });
            if (!result.cancelled) {
                onChangeImage(result?.uri)
            }
        } catch (err: any) {
            console.log("Error ", err);
        }
    }


    return (
        <TouchableWithoutFeedback onPress={handlePress}>
            <View style={styles.container}>
                {!imageUri && <MaterialCommunityIcons name={"camera"} size={40} color={colors.medium_gray}/>}
                {imageUri && <Image source={{uri: imageUri}} style={styles.image}/>}
            </View>
        </TouchableWithoutFeedback>
    )
};

export default ImageInput;