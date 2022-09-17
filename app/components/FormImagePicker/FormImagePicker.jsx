import { useFormikContext } from 'formik'
import React from 'react'
import ErrorMessage from '../ErrorMessage'
import ImageInputList from '../ImageInputList'

export const FormImagePicker = (props) => {
    const {name} = props;
    const {errors, setFieldValue, touched, values} = useFormikContext();

    const imageUris = values[name];

    const handleAdd = (uri) => {
        setFieldValue(name, [...imageUris, uri])
    }

    const handleRemove = (uri) => {
        setFieldValue(name,  values && imageUris && imageUris.filter((imageUri) => imageUri !== uri))
    }

    return (
        <>
            <ImageInputList onAddImage={handleAdd} onRemoveImage={handleRemove} 
            imageUris={imageUris}/>
            <ErrorMessage error={errors[name]} visible={touched[name]}/>
        </>
    )
}

export default FormImagePicker
