import Screen from "./app/components/Screen";
import {useState} from "react";
import ImageInputList from "./app/components/ImageInputList";

export default function App() {
    const [images, setImages] = useState<string[] | null | any>([]);

    const handleAdd = (uri: string | null) => {
        setImages([...images, uri])
    }

    const handleRemove = (uri: string | null) => {
        setImages(images && images.filter((imageUri:  string | null) => imageUri !== uri))
    }

    return (
        <Screen>
            <ImageInputList imageUris={images}
             onRemoveImage={(uri: string | null) => handleRemove(uri)}
            onAddImage={(uri: string | null) => handleAdd(uri)} />
        </Screen>
    )
};

