import Screen from "./app/components/Screen";
import {useState} from "react";
import ImageInput from "./app/components/ImageInput";

export default function App() {
    const [image, setImage] = useState<string | null>(null);

    return (
        <Screen>
            <ImageInput onChangeImage={(uri) => setImage(uri)} imageUri={image}/>
        </Screen>
    )
};

