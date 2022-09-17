import React, { useRef } from "react";
import { ScrollView, View } from "react-native";
import ImageInput from "../ImageInput/ImageInput";
import { styles } from "./styles";

interface ImageInputListProps {
    imageUris: string[] | null
    onRemoveImage: (uri: string | null) => void;
    onAddImage: (uri: string | null) => void;
}

export const ImageInputList = (props: ImageInputListProps) => {
    const {imageUris = [], onAddImage, onRemoveImage} = props;

    const scrollView = useRef<any>();
    
    return (
        <View>
            <ScrollView horizontal={true} ref={scrollView}
                onContentSizeChange={() => scrollView?.current?.scrollToEnd()}>
                <View style={styles.container}>
                    {imageUris && imageUris.map((uri: string, index: number) => (
                        <View style={styles.image} key={index}>
                            <ImageInput imageUri={uri} onChangeImage={() => onRemoveImage(uri)}/>
                        </View>
                    ))}
                    <ImageInput imageUri={""} onChangeImage={(uri: string | null) => onAddImage(uri)} />
                </View>
            </ScrollView>
        </View>
    )
};

export default ImageInputList;